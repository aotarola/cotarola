module Page.Blank exposing (view)

import Browser.Dom exposing (Element)
import Element exposing (Element, text)
import Shared exposing (isDesktop)


view : { title : String, content : Element msg, isDesktop : Bool }
view =
    { title = ""
    , content = text ""
    , isDesktop = True
    }
