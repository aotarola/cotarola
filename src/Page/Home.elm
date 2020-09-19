module Page.Home exposing
    ( Model
    , Msg
    , init
    , toSession
    , update
    , view
    )

import Color exposing (gray)
import Element
    exposing
        ( Element
        , centerX
        , centerY
        , clip
        , column
        , el
        , fill
        , height
        , image
        , maximum
        , padding
        , paragraph
        , px
        , row
        , spacing
        , text
        , width
        )
import Element.Border as Border
import Element.Font as Font
import Session exposing (Session)



-- TYPES


type alias Model =
    { session : Session }


type Msg
    = Something



-- PUBLIC


init : Session -> ( Model, Cmd Msg )
init session =
    ( { session = session }, Cmd.none )


view : Model -> { title : String, content : Element msg }
view _ =
    { title = "Inicio"
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


mainText : String
mainText =
    "Soy Claudia y mi re-conexión conmigo misma dió paso a la terapia intuitiva integral. Desde el conocer como paciente algunos métodos comunes con algunos terapeutas fue que comprendí que mi forma de sanar está dentro mío y este poder lo tenemos todos y todas. Cuando comprendo que yo soy la creadora de mi vida y 100% responsable de ella, entiendo que las experiencias que vivo tienen un propósito mayor y tienen que ver con la evolución de mi alma\n\nSi quieres hacerte responsable de tu vida y de toda circunstancia que aparezca en ella debes tener una profunda conexión con tu ser, esto se puede lograr a través de diferentes herramientas que vienen con tu sabiduría interior. Yo te guío a que conectes con ellas, te empoderes y seas el creador/a de la vida que siempre has anhelado.\n "


viewContent : Element msg
viewContent =
    row
        [ width fill
        , height fill
        , padding 50
        , spacing 20
        ]
        [ column
            [ width fill
            , centerY
            , spacing 10
            , Border.widthEach { right = 1, left = 0, top = 0, bottom = 0 }
            , Border.color gray
            ]
            [ el
                [ centerX
                , clip
                , height <| px 600
                , width <| px 600
                , Border.rounded 500
                ]
              <|
                image [ width fill, height fill ]
                    { src = "require:img/pachimascarasana.jpg"
                    , description = "an image"
                    }
            ]
        , column [ width fill, centerY, spacing 10 ]
            [ el [ centerX, Font.bold ] <| text "Hola!"
            , paragraph
                [ width <| maximum 600 fill
                , centerX
                , Font.size 16
                ]
                [ text mainText ]
            ]
        ]
