import { FunctionComponent } from 'react'
import Image from 'next/image'

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
              con tu sabiduría. Con este servicio abro un espacio sagrado para acompañarte y guiarte
              en tu proceso de autoconocimiento y transformación para que tú vayas reconociendo tus
              propias herramientas desde tu sabiduría interior y así evolucionar desde tu expansión
              de consciencia encaminándote hacia dónde te lleva tu alma. Este programa está
              principalmente enfocado en personas que se sienten inseguras y desvalorizadas.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <Image
              className="w-full sm:h-64 mx-auto rounded-full"
              width={495}
              height={327}
              src="/mentoria.jpg"
            />
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <Image
              className="w-5/6 sm:h-64 mx-auto rounded-full"
              width={495}
              height={327}
              src="/oraculo.jpg"
            />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Reconocimento de tu Poder Interior
              </h3>
              <p className="text-gray-600 mb-8">
                Es un paquete de 4 sesiones de terapia de 1 hora donde vamos a identificar:
                <ul>
                  <li>El porqué de tu situación actual.</li>
                  <li>A qué debes renunciar para conectar con tu poder interior y autosanación.</li>
                  <li>Conectar con tu confianza y seguridad.</li>
                  <li>Resignificar la relación contigo mism@ y con los demás.</li>
                </ul>
                Solo para quienes terminaron el programa &quot;Abre tus Alas&quot; y quieran seguir
                en su camino de autoconocimento tiene un descuento exclusevi equivalente al 15% en
                este mágico servicio por todas las veces que quisieran tomarlo.
              </p>
              <p className="text-gray-600 mb-8">
                Mi mision es acompañarte y ayudarte a recordar quien realmente eres.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Clases de Yoga</h3>
            <p className="text-gray-600 mb-8">
              De lo que he estudiado sobre este estilo de vida es que el yoga va más allá que un
              simple ejercicio físico, yoga es conexión y unión con el
              dios/divinidad/universo/consciencia infinita (o como prefieras nombrarle) que habita
              en nosotros, es sentirte parte del todo, es hacer la práctica con consciencia y nos
              lleva a vivir nuestra vida así. Algunos de sus tantos beneficios es que nos ayuda a
              conectar con algunas emociones bloqueadas a través de la estimulación de nuestros
              puntos energéticos o chakras como también a mejorar la comunicación con nuestro
              cuerpo. Antes de iniciar tu práctica siempre recuerda que toda asana (postura) está
              perfecta cuando la disfrutas. Te invito a ver el siguiente video donde revisamos
              algunos ajustes de las asanas más comunes que realizamos en clases.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <Image
              className="w-full sm:h-64 mx-auto rounded-full"
              width={495}
              height={327}
              src="/yoga.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
