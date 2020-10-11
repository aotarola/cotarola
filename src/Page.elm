module Page exposing (Page(..), view)

import Browser exposing (Document)
import Browser.Dom exposing (Element)
import Color
    exposing
        ( cyan
        , darkCyan
        , darkCyan2
        , darkGreen
        , lightViolet
        , skyBlue
        , violet
        , white
        )
import Element
    exposing
        ( Element
        , centerX
        , column
        , fill
        , image
        , layout
        , link
        , mouseOver
        , paddingXY
        , row
        , spacingXY
        , text
        , width
        )
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Route exposing (Route)



-- TYPE


type Page
    = Home
    | Services
    | Contact
    | Other


view : Page -> { title : String, content : Element msg } -> Document msg
view page { title, content } =
    { title = "Claudia Otárola | " ++ title
    , body =
        [ layout
            [ Font.family [ Font.sansSerif ]
            , Font.size 16
            ]
          <|
            column [ width fill ]
                [ logo
                , navBar page
                , content
                ]
        ]
    }


logo : Element msg
logo =
    row [ Background.color cyan, width fill ] [ image [] { src = "/logo.jpg", description = "Logo" } ]


navBarLink : Page -> Route -> Element msg -> Element msg
navBarLink page route label =
    let
        active =
            Background.color darkCyan2

        backgroundColor =
            if isActive page route then
                active

            else
                Background.color skyBlue
    in
    link
        [ paddingXY 15 20
        , mouseOver [ active ]
        , backgroundColor
        , centerX
        ]
        { url = Route.href route
        , label = label
        }


navBar : Page -> Element msg
navBar page =
    let
        linkTo =
            navBarLink page
    in
    row
        [ width fill
        , Background.color skyBlue
        , Font.color white
        ]
        [ linkTo Route.Home <| text "Inicio"
        , linkTo Route.Services <| text "Servicios"
        , linkTo Route.Contact <| text "Contacto"
        ]


isActive : Page -> Route -> Bool
isActive page route =
    case ( page, route ) of
        ( Home, Route.Home ) ->
            True

        ( Contact, Route.Contact ) ->
            True

        ( Services, Route.Services ) ->
            True

        ( _, _ ) ->
            False
