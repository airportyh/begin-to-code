port module App exposing (..)

import Html exposing (Html, input, div, text, ul, li, h1, a, p)
import Html.Attributes exposing (type_, placeholder, href, property)
import Json.Encode exposing (string)
import Http
import Json.Decode as Json
import Navigation

type alias Lesson = {
  title: String,
  path: String
}

type alias Page = {
  slide: String,
  speakerNotes: String
}

type alias Model = {
  currentLocation: Navigation.Location,
  lessons: List Lesson,
  currentLessonContent: Maybe String,
  currentLessonContentHtml: Maybe String,
  currentLessonPages: List Page
}

type Message =
  GotLessons (Result Http.Error (List Lesson)) |
  UrlChange Navigation.Location |
  GotLessonContent (Result Http.Error String) |
  CompiledHtml (List Page)

port convertMarkdown : String -> Cmd msg

getLessons : Cmd Message
getLessons =
  let request = Http.get "./lessons/python/lessons.json" decodeLessons
  in Http.send GotLessons request

decodeLessons =
  Json.list (Json.map2 Lesson
    (Json.at ["title"] Json.string)
    (Json.at ["path"] Json.string))

main = Navigation.program UrlChange {
  init = init,
  update = update,
  view = view,
  subscriptions = subscriptions
  }

init : Navigation.Location -> (Model, Cmd Message)
init location =
  let initModel = {
    currentLocation = location,
    lessons = [],
    currentLessonContent = Nothing,
    currentLessonContentHtml = Nothing,
    currentLessonPages = [] }
  in (initModel, getLessons)

update : Message -> Model -> (Model, Cmd Message)
update msg model =
  case msg of
    GotLessons (Ok lessons) ->
      let newModel = { model | lessons = lessons }
      in (newModel, maybeLoadLessonContents newModel)
    GotLessons (Err _) ->
      (model, Cmd.none)
    UrlChange location ->
      let newModel = { model | currentLocation = location }
      in (newModel, maybeLoadLessonContents newModel)
    GotLessonContent (Ok content) ->
      ({ model | currentLessonContent = Just content }, convertMarkdown content)
    GotLessonContent (Err _) ->
      (model, Cmd.none)
    CompiledHtml pages ->
      ({ model | currentLessonPages = pages }, Cmd.none)

maybeLoadLessonContents : Model -> Cmd Message
maybeLoadLessonContents model =
  case (currentLesson model) of
    Nothing -> Cmd.none
    Just lesson -> loadLessonContents lesson

loadLessonContents : Lesson -> Cmd Message
loadLessonContents lesson =
  let
    url = "./lessons/python/" ++ lesson.path ++ "/presentation.md"
    request = Http.getString url
  in
    Http.send GotLessonContent request

currentLesson : Model -> Maybe Lesson
currentLesson model =
  let
    hash = model.currentLocation.hash
    path = String.slice 1 (String.length hash) hash
  in
    List.head (List.filter (\l -> l.path == path) model.lessons)

view : Model -> Html Message
view model = div [] [
  h1 [] [text "All Lessons"],
  ul [] (List.map viewLesson model.lessons),
  p [] [text (toString model.currentLessonPages)],
  case model.currentLessonContentHtml of
    Nothing -> text ""
    Just html -> div [ property "innerHTML" (string html) ] []
  ]

viewLesson : Lesson -> Html Message
viewLesson lesson =
  li [] [
    a [href ("#" ++ lesson.path)] [text lesson.title]
  ]

port compiledHtml : ((List Page) -> msg) -> Sub msg

subscriptions : Model -> Sub Message
subscriptions model = compiledHtml CompiledHtml
