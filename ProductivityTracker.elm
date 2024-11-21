module ProductivityTracker exposing (..)

import Html exposing (Html, div, h2, text, span)
import Json.Decode as Decode exposing (Decoder)

-- Model
type alias Model =
    { completedTasks : Int }

init : Model
init =
    { completedTasks = 5 }

-- Update
type Msg = IncrementCompletedTasks

update : Msg -> Model -> Model
update msg model =
    case msg of
        IncrementCompletedTasks ->
            { model | completedTasks = model.completedTasks + 1 }

-- View
view : Model -> Html Msg
view model =
    div []
        [ h2 [] [ text "Tarefas Concluídas" ]
        , span [] [ text (String.fromInt model.completedTasks) ]
        ]

-- Subscriptions
subscriptions : Model -> Cmd Msg
subscriptions model =
    Cmd.none

-- Main
main =
    Html.beginnerProgram { model = init, update = update, view = view }
