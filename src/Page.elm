module Page exposing (Page(..), view)

import Browser exposing (Document)
import Browser.Dom exposing (Element)
import Color
import Element
    exposing
        ( Element
        , alignRight
        , centerX
        , column
        , el
        , fill
        , height
        , image
        , layout
        , link
        , mouseOver
        , newTabLink
        , paddingXY
        , px
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
                , el [ paddingXY 0 20, width fill ] content
                ]
        ]
    }


facebookIcon : Element msg
facebookIcon =
    image [ width <| px 40, height <| px 40 ]
        { src = "/facebook.svg"
        , description = "Facebook"
        }


whatsappIcon : Element msg
whatsappIcon =
    image [ width <| px 40, height <| px 40 ]
        { src = "/whatsapp.svg"
        , description = "Whatsapp"
        }


instagramIcon : Element msg
instagramIcon =
    image [ width <| px 40, height <| px 40 ]
        { src = "/instagram.svg"
        , description = "Instagram"
        }


logo : Element msg
logo =
    let
        socialRow =
            row [ alignRight, spacingXY 10 0, paddingXY 20 0 ]
                [ newTabLink []
                    { url = "https://www.google.com"
                    , label = facebookIcon
                    }
                , newTabLink []
                    { url = "https://wa.me/56991313337"
                    , label = whatsappIcon
                    }
                , newTabLink []
                    { url = "https://www.google.com"
                    , label = instagramIcon
                    }
                ]
    in
    row
        [ Background.color Color.background
        , width fill
        ]
        [ image [] { src = "/logo.jpg", description = "Logo" }
        , socialRow
        ]


navBarLink : Page -> Route -> Element msg -> Element msg
navBarLink page route label =
    let
        active =
            Background.color Color.primary

        nonActive =
            Background.color Color.secondary

        backgroundColor =
            if isActive page route then
                active

            else
                nonActive
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
        , Background.color Color.secondary
        , Font.bold
        , Font.color Color.white
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
