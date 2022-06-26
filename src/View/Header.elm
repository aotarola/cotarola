module View.Header exposing (..)

import Css
import Html.Styled exposing (..)
import Html.Styled.Attributes as Attr exposing (css)
import Path exposing (Path)
import Tailwind.Breakpoints as Bp
import Tailwind.Utilities as Tw


view : msg -> Path -> Html msg
view toggleMobileMenuMsg currentPath =
    let
        hlink =
            headerLink currentPath
    in
    nav
        [ css
            [ Tw.flex
            , Tw.items_center
            , Tw.bg_white
            , Tw.z_20
            , Tw.sticky
            , Tw.top_0
            , Tw.left_0
            , Tw.right_0
            , Tw.h_16
            , Tw.border_b
            , Tw.border_gray_200
            , Tw.px_6
            ]
        ]
        [ div
            [ css
                [ Tw.hidden
                , Tw.w_full
                , Tw.flex
                , Tw.items_center
                , Bp.md
                    [ Tw.block
                    ]
                ]
            ]
            [ hlink "acerca-de-mi" "Acerca de mi"
            , hlink "servicios" "Servicios"
            , hlink "testimonios" "Testimonios"
            , hlink "cronyoser" "Cronyoser"
            , hlink "precios" "Precios"
            ]
        ]


headerLink : Path -> String -> String -> Html msg
headerLink currentPagePath linkTo name =
    a
        [ Attr.href ("/" ++ linkTo)
        , Attr.attribute "elm-pages:prefetch" "true"
        ]
        [ linkInner currentPagePath linkTo name ]


linkInner : Path -> String -> String -> Html msg
linkInner currentPagePath linkTo name =
    let
        isCurrentPath : Bool
        isCurrentPath =
            List.head (Path.toSegments currentPagePath) == Just linkTo
    in
    span
        [ css
            [ Tw.text_sm
            , Tw.p_2
            , if isCurrentPath then
                Css.batch
                    [ Tw.text_blue_600
                    , Css.hover
                        [ Tw.text_blue_700
                        ]
                    ]

              else
                Css.batch
                    [ Tw.text_gray_600
                    , Css.hover
                        [ Tw.text_gray_900
                        ]
                    ]
            ]
        ]
        [ text name ]
