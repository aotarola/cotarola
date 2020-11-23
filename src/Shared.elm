module Shared exposing (..)

import Browser.Events exposing (onResize)
import Browser.Navigation as Nav
import Dict exposing (Dict)
import Element exposing (Device, DeviceClass(..), Element)
import Session


type alias Flags =
    { width : Int
    , height : Int
    , assets : List String
    }


type alias Model =
    { session : Session.Session
    , device : Device
    , assets : Dict String String
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
    let
        toTuple asset =
            let
                assetKey =
                    asset
                        |> String.split "/"
                        |> List.reverse
                        |> List.head
                        |> Maybe.withDefault "not-found"
                        |> String.split "."
                        |> List.head
                        |> Maybe.withDefault "not-found"
            in
            ( assetKey, asset )

        assets =
            flags.assets
                |> List.map toTuple
                |> Dict.fromList
    in
    Model (Session.init key) (Element.classifyDevice flags) assets


getAsset : String -> Model -> String
getAsset name model =
    Dict.get name model.assets
        |> Maybe.withDefault ""


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
