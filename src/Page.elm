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
        , padding
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
import Maybe exposing (withDefault)
import Route exposing (Route)
import Shared exposing (isDesktop)



-- TYPE


type Page
    = Home
    | Services
    | Contact
    | Other


view : Page -> { title : String, content : Element msg, isDesktop : Bool } -> Document msg
view page { title, content, isDesktop } =
    { title = "Claudia Otárola | " ++ title
    , body =
        [ layout
            [ Font.family [ Font.sansSerif ]
            , Font.size 16
            ]
          <|
            column [ width fill ]
                [ logo isDesktop
                , navBar page
                , el [ paddingXY 0 20, width fill ] content
                ]
        ]
    }


socialShareIcon : String -> Element msg
socialShareIcon key =
    image [ width <| px 40, height <| px 40 ]
        { src = "/" ++ key ++ ".svg"
        , description = key
        }


facebookIcon : Element msg
facebookIcon =
    socialShareIcon "facebook"


whatsappIcon : Element msg
whatsappIcon =
    socialShareIcon "whatsapp"


instagramIcon : Element msg
instagramIcon =
    socialShareIcon "instagram"


tiktokIcon : Element msg
tiktokIcon =
    socialShareIcon "tiktok"


twitterIcon : Element msg
twitterIcon =
    socialShareIcon "twitter"


youtubeIcon : Element msg
youtubeIcon =
    socialShareIcon "youtube"


logo : Bool -> Element msg
logo isDesktop =
    if isDesktop then
        logoDesktop

    else
        logoMobile


logoMobile : Element msg
logoMobile =
    column
        [ Background.color Color.background
        , width fill
        , padding 10
        , spacingXY 0 10
        ]
        [ image [ width <| px 300, centerX ] { src = "/logo.png", description = "" }
        , row [ centerX, spacingXY 10 0, paddingXY 0 10 ] socialItems
        ]


socialItems : List (Element msg)
socialItems =
    [ newTabLink []
        { url = "http://facebook.com/clauotarola"
        , label = facebookIcon
        }
    , newTabLink []
        { url = "https://wa.me/56932752284"
        , label = whatsappIcon
        }
    , newTabLink []
        { url = "https://www.instagram.com/clau__otarola/"
        , label = instagramIcon
        }
    , newTabLink []
        { url = "https://vm.tiktok.com/ZS9Uq8sQ/"
        , label = tiktokIcon
        }
    , newTabLink []
        { url = "https://twitter.com/clau__otarola"
        , label = twitterIcon
        }
    , newTabLink []
        { url = "https://www.youtube.com/channel/UCL9mBa9UXELydAtdOPctiaQ"
        , label = youtubeIcon
        }
    ]


logoDesktop : Element msg
logoDesktop =
    row
        [ Background.color Color.background
        , width fill
        , paddingXY 10 20
        ]
        [ image [ width <| px 300 ]
            { src = "/logo.png", description = "Logo" }
        , row [ alignRight, spacingXY 10 0, paddingXY 20 0 ]
            socialItems
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
