module Shared exposing (..)

import Browser.Events exposing (onResize)
import Browser.Navigation as Nav
import Element exposing (Device, DeviceClass(..), Element, height)
import Session


type alias Flags =
    { width : Int
    , height : Int
    }


type alias Model =
    { session : Session.Session
    , device : Device
    }


type Msg
    = DeviceClassified Device


subscriptions : Model -> Sub Msg
subscriptions model =
    onResize <|
        \width height ->
            DeviceClassified
                (Element.classifyDevice
                    { width = width
                    , height = height
                    }
                )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        DeviceClassified device ->
            ( { model | device = device }, Cmd.none )


init : Nav.Key -> Flags -> Model
init key flags =
    Model (Session.init key) <| Element.classifyDevice flags


navKey : Model -> Nav.Key
navKey { session } =
    Session.navKey session


isDesktop : Model -> Bool
isDesktop { device } =
    case device.class of
        Phone ->
            False

        _ ->
            True
