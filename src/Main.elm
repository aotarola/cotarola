module Main exposing (main)

import Browser exposing (Document)
import Browser.Events exposing (onResize)
import Browser.Navigation as Nav
import Html
import Html.Attributes exposing (height, width)
import Page
import Page.Blank as Blank
import Page.Contact as Contact
import Page.Home as Home
import Page.NotFound as NotFound
import Page.Services as Services
import Route exposing (Route)
import Session exposing (Session)
import Shared
import Url exposing (Url)



---- MODEL ----


type Model
    = NotFound Shared.Model
    | Home Home.Model
    | Services Services.Model
    | Contact Contact.Model
    | Redirect Shared.Model


type alias Flags =
    { width : Int, height : Int }


init : Flags -> Url -> Nav.Key -> ( Model, Cmd Msg )
init flags url navKey =
    changeRouteTo (Route.fromUrl url)
        (Redirect (Shared.init navKey flags))


changeRouteTo : Maybe Route -> Model -> ( Model, Cmd Msg )
changeRouteTo maybeRoute model =
    let
        shared =
            toShared model
    in
    case maybeRoute of
        Nothing ->
            ( NotFound shared, Cmd.none )

        Just Route.Home ->
            Home.init shared
                |> updateWith Home GotHomeMsg model

        Just Route.Services ->
            Services.init shared
                |> updateWith Services GotServicesMsg model

        Just Route.Contact ->
            Contact.init shared
                |> updateWith Contact GotContactMsg model



---- UPDATE ----


type Msg
    = ChangedUrl Url
    | ClickedLink Browser.UrlRequest
    | GotHomeMsg Home.Msg
    | GotServicesMsg Services.Msg
    | GotContactMsg Contact.Msg


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case ( msg, model ) of
        ( ClickedLink urlRequest, _ ) ->
            case urlRequest of
                Browser.Internal url ->
                    case url.fragment of
                        Nothing ->
                            ( model, Cmd.none )

                        Just _ ->
                            ( model, Nav.pushUrl (Shared.navKey (toShared model)) <| Url.toString url )

                Browser.External href ->
                    ( model, Nav.load href )

        ( ChangedUrl url, _ ) ->
            changeRouteTo (Route.fromUrl url) model

        ( GotHomeMsg subMsg, Home home ) ->
            Home.update subMsg home
                |> updateWith Home GotHomeMsg model

        ( GotServicesMsg subMsg, Services services ) ->
            Services.update subMsg services
                |> updateWith Services GotServicesMsg model

        ( GotContactMsg subMsg, Contact contact ) ->
            Contact.update subMsg contact
                |> updateWith Contact GotContactMsg model

        ( _, _ ) ->
            ( model, Cmd.none )


toShared : Model -> Shared.Model
toShared model =
    case model of
        NotFound shared ->
            shared

        Redirect shared ->
            shared

        Home home ->
            getShared home

        Services services ->
            getShared services

        Contact contact ->
            getShared contact


getShared : { a | shared : Shared.Model } -> Shared.Model
getShared { shared } =
    shared


updateWith : (subModel -> Model) -> (subMsg -> Msg) -> Model -> ( subModel, Cmd subMsg ) -> ( Model, Cmd Msg )
updateWith toModel toMsg _ ( subModel, subCmd ) =
    ( toModel subModel, Cmd.map toMsg subCmd )



---- VIEW ----


view : Model -> Document Msg
view model =
    let
        viewPage page toMsg config =
            let
                { title, body } =
                    Page.view page config
            in
            { title = title
            , body = List.map (Html.map toMsg) body
            }
    in
    case model of
        Redirect _ ->
            Page.view Page.Other Blank.view

        NotFound _ ->
            Page.view Page.Other NotFound.view

        Home home ->
            viewPage Page.Home GotHomeMsg (Home.view home)

        Services services ->
            viewPage Page.Services GotServicesMsg (Services.view services)

        Contact contact ->
            viewPage Page.Contact GotContactMsg (Contact.view contact)



---- SUBSCRIPTIONS ----


subscriptions : Model -> Sub Msg
subscriptions model =
    case model of
        Home home ->
            Home.subscriptions home
                |> Sub.map GotHomeMsg

        Services services ->
            Services.subscriptions services
                |> Sub.map GotServicesMsg

        Contact contact ->
            Contact.subscriptions contact
                |> Sub.map GotContactMsg

        _ ->
            Sub.none



---- PROGRAM ----


main : Program Flags Model Msg
main =
    Browser.application
        { view = view
        , init = init
        , update = update
        , subscriptions = subscriptions
        , onUrlChange = ChangedUrl
        , onUrlRequest = ClickedLink
        }
