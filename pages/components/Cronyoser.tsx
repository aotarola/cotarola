import { FunctionComponent } from 'react'

const Services: FunctionComponent = () => {
  return (
    <section id="cronyoser" className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <div className="w-5/6 mx-auto">
          <img className="sm:h-96 mx-auto rounded-full" alt="Cronyoser" src="/cronyoser.png" />
        </div>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="p-6">
            <p className="text-primary-paragraph mb-8">
              Es el espacio energético donde se sostienen, nacen y crecen los cursos canalizados
              para nuestro crecimiento. CRONYOSER no viene a formarte, certificarte ni enseñarte
              como una escuela, academia o instituto; viene con la misión de RECORDARTE qué estás
              haciendo aquí y CÓMO regresar a tu centro y fuente a través de tus propias respuestas
              y experiencias. Su intención y sentido más profundo de hacerse visible aquí es para
              recordarte sobre tu libertad a través de la reconexión con tu divinidad expresada en
              TODAS tus formas de comunicación. Su energía es muy potente y clara, se dirige
              especialmente hacia la comunicación amorosa y asertiva. Viene a mostrar luces desde la
              liberación y limpieza energética y emocional para recordarte que eres canal y portal.
              CRONYOSER te recuerda que “al expresarte te transformas y transformas.”
            </p>
            <div className="w-5/6 mx-auto">
              <img className="sm:h-96 mx-auto " alt="Evolucion 33" src="/evolucion33.png" />
            </div>
            <h2 className="w-full my-8  font-bold leading-tight text-left text-primary-title">
              Evolución 33 viene a romper todos los esquemas y creencias colectivas sobre amor
              propio Y valor personal para darle espacio a tu real SER.
            </h2>
            <p className="text-primary-paragraph mb-8">
              Evolución 33 es un innovador, original y único curso de transformación personal y
              sanación emocional que te lleva directo al desarrollo de la comunicación clara,
              amorosa y asertiva de tus emociones generando un sano diálogo interno y externo
              potenciando y elevando tus relaciones hacia relaciones sanas y conscientes. ¿Te
              imaginas cómo sería tener conversaciones incómodamente cómodas en tus relaciones de
              pareja, de amigos, familiares o laborales sólo desarrollando una buena comunicación
              interna? Lee más información.
            </p>
            <p className="text-primary-paragraph mb-8">Tienes acceso gratis a los 3 primeros audios</p>
            <a
              href="https://cronyoser.thinkific.com/"
              className="inline-block mx-auto lg:mx-0 hover:underline gradient text-button-500 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out mb-8"
            >
              Mas información del curso aquí (medio de pago Paypal)
            </a>
            <br />
            <a
              href="https://www.flow.cl/app/web/pagarBtnPago.php?token=qfpz434"
              className="inline-block mx-auto lg:mx-0 hover:underline gradient text-button-500 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out mb-8"
            >
              Medios de pago débito/crédito (Chile)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
