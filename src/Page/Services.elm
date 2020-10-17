module Page.Services exposing
    ( Model
    , Msg
    , init
    , subscriptions
    , update
    , view
    )

import Color
import Element
    exposing
        ( Element
        , alignLeft
        , alignRight
        , centerX
        , column
        , el
        , fill
        , height
        , image
        , paddingXY
        , paragraph
        , px
        , row
        , spacingXY
        , text
        , width
        )
import Element.Background as Background
import Element.Font as Font
import Session exposing (Session)
import Shared exposing (isDesktop)


type alias Model =
    { shared : Shared.Model }


type Msg
    = SharedMsg Shared.Msg


subscriptions : Model -> Sub Msg
subscriptions { shared } =
    Shared.subscriptions shared
        |> Sub.map SharedMsg


init : Shared.Model -> ( Model, Cmd Msg )
init shared =
    ( { shared = shared }, Cmd.none )


view : Model -> { title : String, content : Element msg, isDesktop : Bool }
view model =
    { title = "Servicios"
    , content = viewContent model
    , isDesktop = Shared.isDesktop model.shared
    }


viewContent : Model -> Element msg
viewContent { shared } =
    if Shared.isDesktop shared then
        desktopView

    else
        mobileView


mobileView : Element msg
mobileView =
    column
        [ width fill
        , Font.color Color.primary
        , paddingXY 10 0
        ]
        [ el [] (column [ spacingXY 0 10 ] spiritMentoringM)
        , el [ Background.color Color.alternateBackground ] (column [ spacingXY 0 10 ] tarotReadingM)
        , el [] (column [ spacingXY 0 10 ] yogaClassesM)
        , el [ Background.color Color.alternateBackground ] (column [ spacingXY 0 10 ] personalClassesM)
        ]


desktopView : Element msg
desktopView =
    column
        [ width fill
        , Font.color Color.primary
        , spacingXY 0 20
        ]
        [ el [ paddingXY 200 20 ]
            (row
                [ width fill
                ]
                spiritMentoring
            )
        , el [ paddingXY 200 20, Background.color Color.alternateBackground ]
            (row [ width fill ]
                tarotReading
            )
        , el [ paddingXY 200 20 ]
            (row
                [ width fill
                ]
                yogaClasses
            )
        , el [ paddingXY 200 20, Background.color Color.alternateBackground ]
            (row [ width fill ]
                personalClasses
            )
        ]


yogaClassesM : List (Element msg)
yogaClassesM =
    let
        img =
            image [ centerX, width <| px 355, height <| px 197 ]
                { src = "https://www.lagatahoracia.cl/wp-content/uploads/2016/07/yoga5-632x436.jpg"
                , description = "Yoga"
                }

        content =
            column [ spacingXY 0 10 ]
                [ el [ Font.bold ] <| text "Clases de Yoga"
                , paragraph [] [ text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacus purus, vehicula sit amet porta sed, scelerisque non metus. Aliquam at eleifend erat. Integer ut ante sit amet mi porttitor porta in et massa. Mauris vehicula lectus ut purus dignissim volutpat. Ut id lobortis mauris. Duis rhoncus libero sed dolor lobortis condimentum. Suspendisse ultricies, odio vel dapibus laoreet, dolor lorem ornare nunc, quis scelerisque justo mauris at elit. Proin interdum at purus sed molestie. Proin iaculis tincidunt enim sed auctor." ]
                ]
    in
    [ el [ centerX, width fill, height fill, paddingXY 0 10 ] content, el [ width fill, centerX ] img ]


yogaClasses : List (Element msg)
yogaClasses =
    let
        img =
            image [ alignRight, width <| px 495, height <| px 327 ]
                { src = "https://www.lagatahoracia.cl/wp-content/uploads/2016/07/yoga5-632x436.jpg"
                , description = "Yoga"
                }

        content =
            column [ spacingXY 0 10 ]
                [ el [ Font.bold ] <| text "Clases de Yoga"
                , paragraph [] [ text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacus purus, vehicula sit amet porta sed, scelerisque non metus. Aliquam at eleifend erat. Integer ut ante sit amet mi porttitor porta in et massa. Mauris vehicula lectus ut purus dignissim volutpat. Ut id lobortis mauris. Duis rhoncus libero sed dolor lobortis condimentum. Suspendisse ultricies, odio vel dapibus laoreet, dolor lorem ornare nunc, quis scelerisque justo mauris at elit. Proin interdum at purus sed molestie. Proin iaculis tincidunt enim sed auctor." ]
                ]
    in
    [ el [ centerX, width fill, height fill ] content, el [ width fill, centerX ] img ]


spiritMentoringM : List (Element msg)
spiritMentoringM =
    let
        img =
            image [ centerX, width <| px 355, height <| px 197 ]
                { src = "http://mscperu.org/espirit/Emiliano%20Jimenez/Espiritu/pic2_Espiritu/oracion05.png"
                , description = "Espíritu"
                }

        content =
            column [ spacingXY 0 10 ]
                [ el [ Font.bold ] <| text "Mentoría Espiritual"
                , paragraph [] [ text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacus purus, vehicula sit amet porta sed, scelerisque non metus. Aliquam at eleifend erat. Integer ut ante sit amet mi porttitor porta in et massa. Mauris vehicula lectus ut purus dignissim volutpat. Ut id lobortis mauris. Duis rhoncus libero sed dolor lobortis condimentum. Suspendisse ultricies, odio vel dapibus laoreet, dolor lorem ornare nunc, quis scelerisque justo mauris at elit. Proin interdum at purus sed molestie. Proin iaculis tincidunt enim sed auctor." ]
                ]
    in
    [ el [ centerX, width fill, height fill ] content, el [ width fill, centerX ] img ]


spiritMentoring : List (Element msg)
spiritMentoring =
    let
        img =
            image [ alignRight ]
                { src = "http://mscperu.org/espirit/Emiliano%20Jimenez/Espiritu/pic2_Espiritu/oracion05.png"
                , description = "Espíritu"
                }

        content =
            column [ spacingXY 0 10 ]
                [ el [ Font.bold ] <| text "Mentoría Espiritual"
                , paragraph [] [ text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacus purus, vehicula sit amet porta sed, scelerisque non metus. Aliquam at eleifend erat. Integer ut ante sit amet mi porttitor porta in et massa. Mauris vehicula lectus ut purus dignissim volutpat. Ut id lobortis mauris. Duis rhoncus libero sed dolor lobortis condimentum. Suspendisse ultricies, odio vel dapibus laoreet, dolor lorem ornare nunc, quis scelerisque justo mauris at elit. Proin interdum at purus sed molestie. Proin iaculis tincidunt enim sed auctor." ]
                ]
    in
    [ el [ centerX, width fill, height fill ] content, el [ width fill, centerX ] img ]


tarotReadingM : List (Element msg)
tarotReadingM =
    let
        img =
            image [ centerX, width <| px 355, height <| px 197 ]
                { src = "https://nypost.com/wp-content/uploads/sites/2/2018/09/tarot-card-reading3.jpg?quality=90&strip=all&w=1236&h=820&crop=1"
                , description = "Espíritu"
                }

        content =
            column [ spacingXY 0 10 ]
                [ el [ Font.bold ] <| text "Lectura de Tarot"
                , paragraph [] [ text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacus purus, vehicula sit amet porta sed, scelerisque non metus. Aliquam at eleifend erat. Integer ut ante sit amet mi porttitor porta in et massa. Mauris vehicula lectus ut purus dignissim volutpat. Ut id lobortis mauris. Duis rhoncus libero sed dolor lobortis condimentum. Suspendisse ultricies, odio vel dapibus laoreet, dolor lorem ornare nunc, quis scelerisque justo mauris at elit. Proin interdum at purus sed molestie. Proin iaculis tincidunt enim sed auctor." ]
                ]
    in
    [ el [ centerX, width fill, height fill, paddingXY 0 10 ] content, el [ width fill, centerX ] img ]


tarotReading : List (Element msg)
tarotReading =
    let
        img =
            image [ alignLeft, width <| px 495, height <| px 327 ]
                { src = "https://nypost.com/wp-content/uploads/sites/2/2018/09/tarot-card-reading3.jpg?quality=90&strip=all&w=1236&h=820&crop=1"
                , description = "Espíritu"
                }

        content =
            column [ spacingXY 0 10 ]
                [ el [ Font.bold ] <| text "Lectura de Tarot"
                , paragraph [] [ text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacus purus, vehicula sit amet porta sed, scelerisque non metus. Aliquam at eleifend erat. Integer ut ante sit amet mi porttitor porta in et massa. Mauris vehicula lectus ut purus dignissim volutpat. Ut id lobortis mauris. Duis rhoncus libero sed dolor lobortis condimentum. Suspendisse ultricies, odio vel dapibus laoreet, dolor lorem ornare nunc, quis scelerisque justo mauris at elit. Proin interdum at purus sed molestie. Proin iaculis tincidunt enim sed auctor." ]
                ]
    in
    [ el [ width fill ] img, el [ centerX, width fill, height fill ] content ]


personalClasses : List (Element msg)
personalClasses =
    let
        img =
            image [ alignLeft, width <| px 495, height <| px 327 ]
                { src = "https://demo.posicionamiento-web.com.ar/wp-content/uploads/2020/04/Desarrollo-personal.png"
                , description = "Taller"
                }

        content =
            column [ spacingXY 0 10 ]
                [ el [ Font.bold ] <| text "Talleres"
                , paragraph [] [ text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacus purus, vehicula sit amet porta sed, scelerisque non metus. Aliquam at eleifend erat. Integer ut ante sit amet mi porttitor porta in et massa. Mauris vehicula lectus ut purus dignissim volutpat. Ut id lobortis mauris. Duis rhoncus libero sed dolor lobortis condimentum. Suspendisse ultricies, odio vel dapibus laoreet, dolor lorem ornare nunc, quis scelerisque justo mauris at elit. Proin interdum at purus sed molestie. Proin iaculis tincidunt enim sed auctor." ]
                ]
    in
    [ el [ width fill ] img, el [ centerX, width fill, height fill ] content ]


personalClassesM : List (Element msg)
personalClassesM =
    let
        img =
            image [ centerX, width <| px 355, height <| px 197 ]
                { src = "https://demo.posicionamiento-web.com.ar/wp-content/uploads/2020/04/Desarrollo-personal.png"
                , description = "Taller"
                }

        content =
            column [ spacingXY 0 10 ]
                [ el [ Font.bold ] <| text "Talleres"
                , paragraph [] [ text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacus purus, vehicula sit amet porta sed, scelerisque non metus. Aliquam at eleifend erat. Integer ut ante sit amet mi porttitor porta in et massa. Mauris vehicula lectus ut purus dignissim volutpat. Ut id lobortis mauris. Duis rhoncus libero sed dolor lobortis condimentum. Suspendisse ultricies, odio vel dapibus laoreet, dolor lorem ornare nunc, quis scelerisque justo mauris at elit. Proin interdum at purus sed molestie. Proin iaculis tincidunt enim sed auctor." ]
                ]
    in
    [ el [ centerX, width fill, height fill, paddingXY 0 10 ] content, el [ width fill, centerX ] img ]


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SharedMsg subMsg ->
            let
                ( newSharedModel, newCmd ) =
                    Shared.update subMsg model.shared
            in
            ( { model | shared = newSharedModel }, Cmd.map SharedMsg newCmd )
