module Page.Home exposing
    ( Model
    , Msg
    , init
    , toSession
    , update
    , view
    )

import Element exposing (Element, text)
import Session exposing (Session)


type alias Model =
    { session : Session }


type Msg
    = Something


init : Session -> ( Model, Cmd Msg )
init session =
    ( { session = session }, Cmd.none )


view : Model -> { title : String, content : Element msg }
view _ =
    { title = "Inicio"
    , content = text "pagina de inicio"
    }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Something ->
            ( model, Cmd.none )


toSession : Model -> Session
toSession { session } =
    session
