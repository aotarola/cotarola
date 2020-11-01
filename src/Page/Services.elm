module Page.Services exposing
    ( Model
    , Msg
    , init
    , subscriptions
    , update
    , view
    )

import Array
import Color
import Element
    exposing
        ( Attribute
        , Decoration
        , Element
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


type alias ServiceData a =
    { picture : Element a
    , title : Element a
    , description : Element a
    }


type Msg
    = SharedMsg Shared.Msg


type Mode
    = Desktop
    | Mobile


type Alternate
    = Odd
    | Even


toAlternate : Int -> Alternate
toAlternate num =
    if modBy 2 num == 1 then
        Odd

    else
        Even


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
    let
        viewService index service =
            let
                alternate =
                    toAlternate index

                attrs =
                    case alternate of
                        Odd ->
                            [ Background.color Color.alternateBackground ]

                        Even ->
                            []

                serviceViewElement =
                    serviceElement alternate Mobile service
            in
            el attrs <| column [ spacingXY 0 10 ] serviceViewElement

        data =
            [ spiritMentoringService
            , tarotReadingService
            , yogaService
            , personalClassesService
            ]
                |> List.indexedMap viewService
    in
    column
        [ width fill
        , Font.color Color.primary
        , paddingXY 10 0
        ]
        data


desktopView : Element msg
desktopView =
    let
        viewService index service =
            let
                alternate =
                    toAlternate index

                attrs =
                    case alternate of
                        Odd ->
                            [ paddingXY 200 20, Background.color Color.alternateBackground ]

                        Even ->
                            [ paddingXY 200 20 ]

                serviceViewElement =
                    serviceElement alternate Desktop service
            in
            el attrs <| row [ width fill ] serviceViewElement

        data =
            [ spiritMentoringService
            , tarotReadingService
            , yogaService
            , personalClassesService
            ]
                |> List.indexedMap viewService
    in
    column
        [ width fill
        , Font.color Color.primary
        , spacingXY 0 20
        ]
        data


imageServiceAttrs : Mode -> List (Attribute msg)
imageServiceAttrs mode =
    case mode of
        Desktop ->
            [ width <| px 495, height <| px 327 ]

        Mobile ->
            [ centerX, width <| px 355, height <| px 197 ]


yogaService : Mode -> ServiceData msg
yogaService mode =
    { picture =
        image (imageServiceAttrs mode)
            { src = "https://www.lagatahoracia.cl/wp-content/uploads/2016/07/yoga5-632x436.jpg"
            , description = "Yoga"
            }
    , title = text "Clases de Yoga"
    , description = text "De lo que he estudiado sobre este estilo de vida es que el yoga va más allá que un simple ejercicio físico, yoga es conexión y unión con el dios/divinidad/universo/consciencia infinita (o como prefieras nombrarle) que habita en nosotros, es sentirte parte del todo, es hacer la práctica con consciencia y nos lleva a vivir nuestra vida así. Algunos de sus tantos beneficios es que nos ayuda a conectar con algunas emociones bloqueadas a través de la estimulación de nuestros puntos energéticos o chakras como también a mejorar la comunicación con nuestro cuerpo. Antes de iniciar tu práctica siempre recuerda que toda asana (postura) está perfecta cuando la disfrutas.\nTe invito a ver el siguiente video donde revisamos algunos ajustes de las asanas más comunes que realizamos en clases.\nInversión en ti:\n"
    }


spiritMentoringService : Mode -> ServiceData msg
spiritMentoringService mode =
    { picture =
        image (imageServiceAttrs mode)
            { src = "http://mscperu.org/espirit/Emiliano%20Jimenez/Espiritu/pic2_Espiritu/oracion05.png"
            , description = "Espíritu"
            }
    , title = text "Mentoría Espiritual"
    , description = text "Introducción a la mentoría espiritual: Si ya estás viviendo y encarnando un despertar espiritual/crisis/caos interno pero no sabes si la mentoría es lo que necesitas, aquí junto a estas maravillosas herramientas ancestrales con sus poderosos mensajes universales podemos resolver e identificar lo que no te está permitiendo ver con claridad cuál es tu direccionamiento interno y así podrás decidir con consciencia y desde tu amor si es el servicio que necesitas para tu proceso de crecimiento y transformación."
    }


personalClassesService : Mode -> ServiceData msg
personalClassesService mode =
    { picture =
        image (imageServiceAttrs mode)
            { src = "https://demo.posicionamiento-web.com.ar/wp-content/uploads/2020/04/Desarrollo-personal.png"
            , description = "Cursos y Talleres"
            }
    , title = text "Cursos Y Talleres"
    , description = text "Cada vez que inviertes en ti, en tu autoconocimiento, crecimiento, sanación y todo lo que tenga relación con conectar contigo, con tu alma, con tu esencia ya sea a través de terapias, libros, cursos, conferencias o las herramientas que más te hagan sentido, estás aportando a elevar la energía y consciencia del planeta, aportas a la sanación del conjunto que somos y sumas tu luz, la que todos necesitamos para seguir iluminando nuestros caminos. Es por esto que en esta sección te dejo algunos cursos hechos con mucho amor, todos están destinados a ser realizados cuando tú quieras, a tus tiempos y pausas. (PRONTO)"
    }


tarotReadingService : Mode -> ServiceData msg
tarotReadingService mode =
    { picture =
        image (imageServiceAttrs mode)
            { src = "https://nypost.com/wp-content/uploads/sites/2/2018/09/tarot-card-reading3.jpg?quality=90&strip=all&w=1236&h=820&crop=1"
            , description = "Tarot"
            }
    , title = text "Lectura de Oráculos"
    , description = text "Estas herramientas nos las utilizo para lecturas predictivas, sólo y únicamente como guías de conexión espiritual para desenvolvernos en el mundo desde el amor y así tomar las decisiones necesarias para nuestros cambios internos. Este servicio se compone de dos opciones:\n\nTransformación espiritual: A través de tus preguntas vamos a ir conectando con las respuestas de los oráculos que te van a orientar hacia tu crecimiento, bienestar y conexión con tu sabiduría interior permitiéndote ver como una foto panorámica todo aquello que no has logrado identificar en el proceso que estás viviendo actualmente adentrándote en tu presente para expandir tu consciencia, conectar con tu poder sanador y alinearte con la ruta de tu alma.\nInversión en ti: $30.000 pesos chilenos/$44 dólares (Sesión de 45 minutos)"
    }


serviceElement : Alternate -> Mode -> (Mode -> ServiceData msg) -> List (Element msg)
serviceElement alternate mode viewService =
    let
        { picture, title, description } =
            viewService mode

        content =
            column [ spacingXY 0 10 ]
                [ el [ Font.bold ] <| title
                , paragraph [] [ description ]
                ]

        desktopElement =
            case alternate of
                Odd ->
                    [ el [ width fill ] picture
                    , el [ centerX, width fill, height fill ] content
                    ]

                Even ->
                    [ el [ centerX, width fill, height fill ] content
                    , el [ width fill, centerX ] picture
                    ]

        mobileElement =
            case alternate of
                Odd ->
                    [ el [ centerX, width fill, height fill, paddingXY 0 10 ] content
                    , el [ width fill, centerX ] picture
                    ]

                Even ->
                    [ el [ centerX, width fill, height fill ] content
                    , el [ width fill, centerX ] picture
                    ]
    in
    case mode of
        Desktop ->
            desktopElement

        Mobile ->
            mobileElement


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SharedMsg subMsg ->
            let
                ( newSharedModel, newCmd ) =
                    Shared.update subMsg model.shared
            in
            ( { model | shared = newSharedModel }, Cmd.map SharedMsg newCmd )
