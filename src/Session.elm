module Session exposing (Session, fromNavKey, init, navKey)

import Browser.Navigation as Nav



-- TYPES


type Session
    = Guest Nav.Key



-- PUBLIC


navKey : Session -> Nav.Key
navKey (Guest key) =
    key


fromNavKey : Nav.Key -> Session
fromNavKey key =
    Guest key


init : Nav.Key -> Session
init key =
    Guest key
