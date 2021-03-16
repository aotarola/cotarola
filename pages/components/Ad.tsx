import { FunctionComponent } from 'react'

const Footer: FunctionComponent = () => {
  return (
    <div className="mx-auto sm:w-3/4 md:w-2/4 fixed inset-x-0 bottom-5 gradient rounded-lg">
      <div className="container px-8">
        <div className="w-full flex flex-col md:flex-row ">
          <div className="flex-1">
            <p className="uppercase text-indigo-800 font-bold align-middle text-center py-6">
              ¡Aprovecha el 30% de descuento solo hasta el 30 de Abril!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
