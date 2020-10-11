module Color exposing
    ( alternateBackground
    , background
    , primary
    , secondary
    , white
    )

import Element exposing (Color, rgb255)


darkCyan : Color
darkCyan =
    rgb255 18 172 172


lightCyan : Color
lightCyan =
    rgb255 131 244 250


lighterCyan : Color
lighterCyan =
    rgb255 230 251 252


white : Color
white =
    rgb255 255 255 255


cyan : Color
cyan =
    rgb255 146 220 229


primary : Color
primary =
    darkCyan


secondary : Color
secondary =
    cyan


background : Color
background =
    lightCyan


alternateBackground : Color
alternateBackground =
    lighterCyan
