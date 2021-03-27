import { FunctionComponent } from 'react'
const toCalendly = (): void => {
  window.location.href = 'https://calendly.com/claudiaotarola'
}

const toForm = (): void => {
  window.location.href = '#contactme'
}
const services = [
  {
    id: 'abre-tus-alas',
    name: 'Programa Abre tus Alas',
    whatsIncluded: [
      '12 sesiones de terapia de 1 hora',
      '12 sesiones de clases grupales de yoga',
      'Incluye sesión "Resurgimiento de tu vuelo" gratis',
    ],
    redirect: toCalendly,
    price: '$520.000 CLP / $776 USD',
    priceBefore: '$650.000 CLP / $970 USD',
    actionText: 'Inscribir',
    discountOff: '*Precio valido solo hasta el 30 de Abril',
  },
  {
    id: 'masterclass-vivo',
    name: 'Masterclass en Vivo',
    whatsIncluded: ['Clase presencial*', 'Puedes conectar de manera remota via zoom'],
    redirect: toCalendly,
    price: '$30.000 CLP / $44 USD',
    actionText: 'Inscribir',
  },
  {
    id: 'masterclass-grabada',
    name: 'Masterclass Grabada',
    whatsIncluded: ['Acceso exclusivo a mis clases anteriores', 'Sigue el curso a tu tiempo'],
    redirect: toCalendly,
    price: '$35.000 CLP / $50 USD',
    actionText: 'Inscribir',
  },
  {
    id: 'yoga',
    name: 'Clases de Yoga (Múltiple)',
    whatsIncluded: ['4 clases mensuales', '8 clases mensuales', '12 clases mensuales'],
    redirect: toForm,
    price: 'Desde $12.000 CLP / $22 USD',
    actionText: 'Contáctame',
  },
]

const Pricing: FunctionComponent = () => {
  return (
    <section id="pricing" className="bg-gray-100 py-8">
      <div className="container mx-auto px-2 pt-4 pb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary-title">
          Inversión en tí
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
          {services.map((service) => (
            <div
              id={service.id}
              key={service.id}
              className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4"
            >
              <div className="flex-1 bg-white text-primary-paragraph rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">{service.name}</div>
                <ul className="w-full text-center text-sm">
                  {service.whatsIncluded.map((includes) => (
                    <li key={includes} className="border-b py-4">
                      {includes}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-none mt-auto bg-white overflow-hidden shadow p-6">
                {service.priceBefore && (
                  <div className="w-full line-through pt-6 text-3xl text-primary-paragraph font-bold text-center">
                    {service.priceBefore}
                  </div>
                )}
                <div className="w-full pt-6 text-3xl text-primary-paragraph font-bold text-center">
                  {service.price}
                </div>

                <div className="w-full pt-6 text-primary-paragraph text-sm text-center">
                  {service.discountOff}
                </div>
                <div className="flex items-center justify-center">
                  <button
                    onClick={service.redirect}
                    className="mx-auto lg:mx-0 hover:underline gradient text-button-500 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                  >
                    {service.actionText}
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
