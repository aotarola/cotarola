import { FunctionComponent } from 'react'

const Services: FunctionComponent = () => {
  return (
    <section id="services" className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Servicios
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Programa &quot;Abre tus Alas&quot;
            </h3>
            <p className="text-gray-600 mb-8">
              Creé este programa con una base, raíz y esencia en la mentoría y el yoga para generar
              una terapia y estudio de ti mism@ y a través del yoga armonices, integres y conectes
              con tu sabiduría.
            </p>
            <p className="text-gray-600 mb-8">
              Con este servicio abro un espacio sagrado para acompañarte y guiarte en tu proceso de
              autoconocimiento y transformación para que tú vayas reconociendo tus propias
              herramientas desde tu sabiduría interior y así evolucionar desde tu expansión de
              consciencia encaminándote hacia donde te lleva tu alma.
            </p>
            <p className="text-gray-600 mb-8">
              Este programa está principalmente enfocado en personas que se sienten inseguras y
              desvalorizadas.
            </p>
            <ul className="text-gray-600 ml-4 mb-8 list-disc">
              <li>Vas a conectar con tu poder autosanador.</li>
              <li>Vas a conectar con tu seguridad, confianza y plenitud.</li>
              <li>Vas a comprender tu mente y cómo enfocarla.</li>
              <li>
                Vas a aprender a utilizar todas tus proyecciones para nutrir con amor y luz esos
                lugares que has olvidado en ti.
              </li>
              <li>
                Vas a conectar con tu poder creador y con las revelaciones que tu sabiduría interna
                tiene para ti.
              </li>
              <li>
                Vas a ser capaz de encontrar una solución acertada a cada situación de alta tensión
                que aparezca en tu vida.
              </li>
              <li>Vas a resignificar la relación contigo mism@ y con tu entorno.</li>
              <li>Verás como todas tus relaciones interpersonales van a mejorar.</li>
              <li>Aprenderás a abrir y cerrar ciclos sanamente.</li>
              <li>
                Vas a conectar con tu misión de vida y vas a permitirte seguir la ruta de tu alma
                desde tu amor y aportando al mundo lo que más necesitamos, tu luz y autenticidad.
              </li>
              <li>No seas víctima de tu vida y conviértete en PROTAGONISTA. </li>
              <li>No esperes más por tu cambio, estás a un paso de darle el giro a tu vida. </li>
              <li>Ámate tanto y haz la inversión más importante de tu vida.</li>
            </ul>
            <p className="text-gray-600">
              Mi misión es acompañarte y ayudarte a cumplir la tuya que es ABRIR TUS ALAS.
            </p>
            <a
              href="https://www.dropbox.com/s/o6cj29rzl7qhcb5/PROGRAMA%20ABRE%20TUS%20ALAS.pdf?dl=0"
              className="inline-block mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out mb-8"
            >
              Mas información
            </a>
          </div>
          <div className="w-5/6 mx-auto sm:pt-10 sm:w-1/2">
            <img
              className="sm:h-96 mx-auto rounded-full"
              alt="Abre tus Alas"
              src="/abre-tus-alas.jpg"
            />
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-5/6 mx-auto sm:pt-10 sm:w-1/2">
            <img
              className="sm:h-96 mx-auto rounded-full"
              alt="Masterclass mensuales"
              src="/mentoria.jpg"
            />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Masterclass mensuales
              </h3>
              <p className="text-gray-600 mb-8">
                Cada mes estaré dictando una exclusiva Masterclass en vivo vía Zoom con un tema a
                desarrollar compuesto de material previo de trabajo y herramientas para que hagas tu
                trabajo personal. Siempre estaré entregándoles información y contenido exclusivo y
                de calidad.
              </p>
              <p className="text-gray-600 mb-8">
                No te puedes perder esta oportunidad de crecimiento en conjunto. Nunca olvides que
                tus preguntas nutren las clase.
              </p>
              <p className="text-gray-600 mb-8">
                Solo para las personas que estén activas en el programa “Abre tus Alas” tendrán
                acceso gratuito.
              </p>
              <p className="text-gray-600">
                Puedes revisar mi Masterclass Gratuita de Febrero 2021, ¡no dejes de hacer el
                poderoso ejercicio de esta clase!.
              </p>
              <a
                href="https://youtu.be/nXvkmEO5gRM"
                className="inline-block mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out mb-8"
              >
                Mas información
              </a>
              <p className="text-gray-600">
                Y el material de apoyo para tu estudio en el siguiente enlace
              </p>
              <a
                href="https://www.dropbox.com/sh/s5es3babvja3kus/AAC36cCg5T0G5YT7LHQmt21La?dl=0"
                className="inline-block mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                ¡Descárgalo ya!
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Clases de Yoga</h3>
            <p className="text-gray-600 mb-8">
              De lo que he estudiado sobre esta forma de vida es que el yoga va más allá que un
              simple ejercicio físico, yoga es conexión y unión con el
              dios/divinidad/universo/consciencia infinita (o como prefieras llamarle) que habita en
              nosotros.
            </p>

            <p className="text-gray-600 mb-8">
              Yoga es la ciencia de la consciencia individual que alcanza la comunión con la
              consciencia última.
            </p>

            <p className="text-gray-600 mb-8">
              Yoga es sentirte parte del todo, es hacer la práctica con conciencia y nos lleva a
              vivir nuestra vida así.
            </p>

            <p className="text-gray-600 mb-8">
              Algunos de sus tantos beneficios es que nos ayuda a conectar con algunas emociones
              bloqueadas a través de la estimulación de nuestros puntos energéticos o chakras como
              también a mejorar la comunicación con nuestro cuerpo y purificar y clarificar nuestra
              mente y pensamientos. A nivel físico ayuda a mejorar dolores musculares, lumbares,
              tensiones, tránsito grastrointestinal entre otros.
            </p>

            <p className="text-gray-600 mb-8">
              Antes de iniciar tu práctica siempre recuerda que toda asana (postura) está perfecta
              cuando la disfrutas.
            </p>

            <p className="text-gray-600">
              Te invito a tomar una clase de regalo para que sientas si conectas con mi forma de
              entregar el yoga.
            </p>
          </div>
          <div className="w-5/6 mx-auto sm:pt-10 sm:w-1/2">
            <img className="sm:h-96 mx-auto rounded-full" alt="yoga" src="/yoga.jpg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
