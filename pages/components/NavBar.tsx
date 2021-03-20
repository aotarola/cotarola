import { FunctionComponent, useRef, useEffect, useState, MutableRefObject } from 'react'

function useOutsideClick(
  ref: MutableRefObject<HTMLDivElement>,
  callback: (ar0: void) => void
): void {
  const handleClick = (e): void => {
    if (ref.current && !ref.current.contains(e.target as Element)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}

const NavBar: FunctionComponent = () => {
  const [shouldShowMenu, setShowMenu] = useState(false)
  const divRef = useRef<HTMLDivElement>(null)

  const toggleMenu = (): void => {
    setShowMenu((curr) => !curr)
  }

  useOutsideClick(divRef, () => {
    setShowMenu(() => false)
  })

  return (
    <nav id="header" ref={divRef} className="fixed gradient w-full z-30 top-0">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a
            className="text-button-500 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            <img alt="Logo" className="h-10 px-2 fill-current inline" src="/logo.svg" />
            INICIO
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            onClick={toggleMenu}
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            !shouldShowMenu && 'hidden'
          } mt-2 lg:mt-0 p-4 lg:p-0 z-20`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a className="inline-block text-button-500 py-2 px-4 font-bold no-underline" href="#">
                Inicio
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-button-500 no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#aboutme"
              >
                Acerca de Mi
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-button-500 no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#services"
              >
                Servicios
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-button-500 no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#pricing"
              >
                Precios
              </a>
            </li>
          </ul>
          <a
            id="navAction"
            href="https://wa.me/56932752284"
            className="focus:outline-none focus:shadow-outline transform transition hover:scale-125 duration-300 ease-in-out"
          >
            <img alt="Whatsapp" src="/whatsapp.svg" className="h-10 px-2 fill-current inline" />
          </a>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  )
}

export default NavBar
