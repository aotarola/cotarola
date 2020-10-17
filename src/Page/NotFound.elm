module Page.NotFound exposing (view)

import Element exposing (Element, text)
import Shared exposing (isDesktop)


view : { title : String, content : Element msg, isDesktop : Bool }
view =
    { title = "Page not found"
    , content = text "No encontrado"
    , isDesktop = True
    }
