module Route exposing (Route(..), fromUrl, href, replaceUrl)

import Browser.Navigation as Nav
import Url exposing (Url)
import Url.Parser as Parser exposing (Parser, oneOf, s)



-- TYPES


type Route
    = Home
    | Services
    | Contact



-- PRIVATE


parser : Parser (Route -> a) a
parser =
    oneOf
        [ Parser.map Home Parser.top
        , Parser.map Services (s "servicios")
        , Parser.map Contact (s "contacto")
        ]


routeToString : Route -> String
routeToString page =
    "#/" ++ String.join "/" (routeToPieces page)


routeToPieces : Route -> List String
routeToPieces page =
    case page of
        Home ->
            []

        Services ->
            [ "servicios" ]

        Contact ->
            [ "contacto" ]



-- PUBLIC


href : Route -> String
href targetRoute =
    routeToString targetRoute


fromUrl : Url -> Maybe Route
fromUrl url =
    { url
        | path = Maybe.withDefault "" url.fragment
        , fragment = Nothing
    }
        |> Parser.parse parser


replaceUrl : Nav.Key -> Route -> Cmd msg
replaceUrl key route =
    Nav.replaceUrl key (routeToString route)
