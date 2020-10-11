module Page.Contact exposing
    ( Model
    , Msg
    , init
    , toSession
    , update
    , view
    )

import Browser.Dom exposing (Element)
import Color
import Element
    exposing
        ( Element
        , centerX
        , column
        , el
        , fill
        , spacing
        , text
        , width
        )
import Element.Font as Font
import Session exposing (Session)


type alias Model =
    { session : Session
    }


type Msg
    = Something


init : Session -> ( Model, Cmd Msg )
init session =
    ( { session = session }
    , Cmd.none
    )


view : Model -> { title : String, content : Element msg }
view _ =
    { title = "Contacto"
    , content = viewContent
    }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Something ->
            ( model, Cmd.none )


toSession : Model -> Session
toSession { session } =
    session



-- PRIVATE


viewContent : Element msg
viewContent =
    column
        [ width fill
        , spacing 20
        , Font.size 30
        , Font.color Color.primary
        ]
        [ el [ centerX ] <| text "CONTÁCTAME 👇"
        , el [ centerX ] <| text "gracias@claudiaotarola.com"
        ]
