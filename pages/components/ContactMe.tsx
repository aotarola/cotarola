import { FunctionComponent, useState } from 'react'

const options = [
  {
    id: 'abre-tus-alas',
    name: 'Abre tus alas',
  },
  {
    id: 'poder-interior',
    name: 'Reconocimiento de tu Poder Interior',
  },
  { id: 'yoga', name: 'Clases de Yoga' },
]

const ContactMe: FunctionComponent = () => {
  const [currentOption, setOption] = useState(null)
  const yogaOptionActive = currentOption === 'yoga'

  const optionClicked = (event): void => {
    setOption((prev) => event.target.value)
  }

  const doAction = (): void => {
    if (currentOption && currentOption !== 'yoga') {
      window.location.href = 'https://calendly.com/claudiaotarola'
    }
  }
  return (
    <section id="contactme" className="container mx-auto text-center py-6 mb-12">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
        ¿Te interesan mis clases de Yoga?
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <h3 className="my-4 text-3xl leading-tight">
        Ingresa tus datos, preferencia de sesión y te contactaré
      </h3>
      <div className="text-black md:flex md:justify-center mb-6">
        <div className="grid grid-cols gap-6">
          <label htmlFor="Name" className="block">
            <span className="text-gray-700">Nombre</span>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <label htmlFor="email" className="block">
            <span className="text-gray-700">Dirección de correo</span>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full rounded-md-border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="tu@correo.com"
            />
          </label>
          <label htmlFor="yoga-option" className="text-gray-700">
            <span className="text-gray-700">Clases</span>
            <select
              name="yoga-option"
              id="yoga-option"
              className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option>Selecciona una opción</option>
              <option>4 clases mensuales</option>
              <option>8 clases mensuales</option>
              <option>12 clases mensuales</option>
            </select>
          </label>
        </div>
      </div>
      <button
        onClick={doAction}
        className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        Enviar
      </button>
    </section>
  )
}

export default ContactMe
