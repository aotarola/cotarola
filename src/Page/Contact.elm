module Page.Contact exposing
    ( Model
    , Msg
    , init
    , subscriptions
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
        , paddingXY
        , spacing
        , text
        , width
        )
import Element.Font as Font
import Session exposing (Session)
import Shared exposing (subscriptions)


type alias Model =
    { shared : Shared.Model
    }


type Msg
    = SharedMsg Shared.Msg


init : Shared.Model -> ( Model, Cmd Msg )
init shared =
    ( { shared = shared }
    , Cmd.none
    )


subscriptions : Model -> Sub Msg
subscriptions { shared } =
    Shared.subscriptions shared
        |> Sub.map SharedMsg


view : Model -> { title : String, content : Element msg, isDesktop : Bool }
view model =
    { title = "Contacto"
    , content = viewContent
    , isDesktop = Shared.isDesktop model.shared
    }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SharedMsg subMsg ->
            let
                ( newSharedModel, newCmd ) =
                    Shared.update subMsg model.shared
            in
            ( { model | shared = newSharedModel }, Cmd.map SharedMsg newCmd )



-- PRIVATE


viewContent : Element msg
viewContent =
    column
        [ width fill
        , spacing 20
        , Font.size 28
        , Font.color Color.primary
        ]
        [ el [ centerX ] <| text "CONTÁCTAME 👇"
        , el [ centerX ] <| text "gracias@claudiaotarola.com"
        ]
