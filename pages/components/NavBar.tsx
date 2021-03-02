import { FunctionComponent, useEffect, useState } from 'react'

interface IProps {
  currentScrollTop: number
}

function useDocumentScroll(callback: (ar0: IProps) => void): void {
  const [, setScrollPosition] = useState(0)

  function handleDocumentScroll(): void {
    const { scrollTop: currentScrollTop } = document.documentElement || document.body

    setScrollPosition(() => currentScrollTop)

    callback({ currentScrollTop })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleDocumentScroll)
    return () => {
      window.removeEventListener('scroll', handleDocumentScroll)
    }
  })
}

const NavBar: FunctionComponent = () => {
  const [shouldChangeColor, setShouldSetColor] = useState(false)
  const MINIMUM_SCROLL = 10

  useDocumentScroll((callbackData) => {
    const { currentScrollTop } = callbackData
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL
    setShouldSetColor(isMinimumScrolled)
  })

  const textColor = shouldChangeColor ? 'text-gray-800' : 'text-white'
  const backgroundColor = shouldChangeColor ? 'gradient' : ''
  return (
    <nav id="header" className={`fixed w-full z-30 top-0 text-white ${backgroundColor}`}>
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a
            className={`${textColor} no-underline hover:no-underline font-bold text-2xl lg:text-4xl`}
            href="#"
          >
            <img alt="Logo" className="h-10 px-2 fill-current inline" src="/logo.svg" />
            INICIO
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
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
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">
                Inicio
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#services"
              >
                Servicios
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
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
