import { FunctionComponent } from 'react'

const services = [
  {
    id: 'abre-tus-alas',
    name: 'Programa Abre tus Alas',
    whatsIncluded: ['12 sesiones de terapia de 1 hora', '12 sesiones de clases grupales de yoga'],
    price: '$650.000 CLP / $970 USD',
  },
  {
    id: 'reconocimento-de-tu-poder-interior',
    name: 'Reconocimiento de tu Poder Interior',
    whatsIncluded: ['4 sesiones de terapia', '1 hora de duracion por sesion'],
    price: '$272.000 CLP / $440 USD',
  },
  {
    id: 'yoga',
    name: 'Clases de Yoga (Multiple)',
    whatsIncluded: ['4 clases mensuales', '8 clases mensuales', '12 clases mensuales'],
    price: 'Desde $12.000 CLP / $22 USD',
  },
]

const Pricing: FunctionComponent = () => {
  return (
    <section id="pricing" className="bg-gray-100 py-8">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Inversión en tí
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4"
            >
              <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">{service.name}</div>
                <ul className="w-full text-center text-sm">
                  {service.whatsIncluded.map((include) => (
                    <li key="include" className="border-b py-4">
                      {include}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-none mt-auto bg-white overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                  {service.price}
                </div>
                <div className="flex items-center justify-center">
                  <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Inscribir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing