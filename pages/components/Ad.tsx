import { FunctionComponent, useState } from 'react'

const Footer: FunctionComponent = () => {
  const [shouldShow, setShouldShow] = useState(true)
  const closeIt = (): void => {
    setShouldShow((curr) => !curr)
  }

  return (
    shouldShow && (
      <div className="mx-auto sm:w-3/4 md:w-2/4 fixed inset-x-0 bottom-5 gradient rounded-lg">
        <button className="absolute top-0 right-0 cursor-pointer" onClick={closeIt}>
          <svg
            className="h-6 w-6 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="container px-8">
          <div className="w-full flex flex-col md:flex-row ">
            <div className="flex-1">
              <p className="uppercase text-indigo-800 font-bold align-middle text-center py-6">
                <a href="#pricing">
                  ¡Aprovecha programa &quot;Abre tus alas&quot; con 20% de descuento solo hasta el
                  30 de Abril!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default Footer
