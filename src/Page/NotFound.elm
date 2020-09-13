module Page.NotFound exposing (view)

import Element exposing (Element, text)


view : { title : String, content : Element msg }
view =
    { title = "Page not found"
    , content = text "not found"
    }
