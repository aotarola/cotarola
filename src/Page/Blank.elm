module Page.Blank exposing (view)

import Browser.Dom exposing (Element)
import Element exposing (Element, text)


view : { title : String, content : Element msg }
view =
    { title = ""
    , content = text ""
    }
