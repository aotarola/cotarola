import { FunctionComponent } from 'react'

const Testimonials: FunctionComponent = () => {
  return (
    <section id="testimonials" className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary-title">
          Testimonios
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-primary-title font-bold leading-none mb-3">
              Andrea Flores
            </h3>
            <p className="text-primary-paragraph mb-8">
              <em>Cuando comencé a aceptarme las cadenas que impedían mi vuelo se transformaron en alas y comencé a volar</em>
            </p>
            <a href="https://www.instagram.com/andrea.flores.holistica/?hl=es" class="inline-block mx-auto lg:mx-0 hover:underline gradient text-button-500 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out mb-8" target="_blank">
              IG: @andrea.flores.holistica
            </a>
          </div>
          <div className="w-5/6 mx-auto sm:pt-10 sm:w-1/2">
            <iframe width="450" height="315" src="https://www.youtube.com/embed/dFZJkB1Bvdw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-5/6 mx-auto sm:pt-10 sm:w-1/2">
            <iframe width="450" height="315" src="https://www.youtube.com/embed/pqQAL2G-p9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-primary-title font-bold leading-none mb-3">
                Rosy Arrieta
              </h3>
              <p className="text-primary-paragraph mb-8">
                Bioquímica
              </p>
              <p className="text-primary-paragraph mb-8">
                <em>Si tuviera que elegir alguna frase sería que ‘vinimos a este mundo con la obligación de ser felices y tratando de hacer daño a la menor cantidad de personas en el camino’....lo que realmente mereces, es ser Feliz 😄💕</em>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-primary-title font-bold leading-none mb-3">
              David Lopez
            </h3>
            <p className="text-primary-paragraph mb-8">
              <em>
                Co-Fundador Escuela Creativa de Autoconocimiento (ECA), baterista en Pesticidas (Autoayuda Punk) , Empresario, Ingeniero Ambiental y Experto en Prevención de Riesgos
                "No se Brilla sin Oscuridad " cuando te haces consciente de tu inconsciente comienza tu proceso de sanación.
                IG: @pesticidasoficial
              </em>
            </p>
            <a href="https://www.instagram.com/pesticidasoficial/?hl=es" class="inline-block mx-auto lg:mx-0 hover:underline gradient text-button-500 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out mb-8" target="_blank">
              IG: @pesticidasoficial
            </a>
          </div>
          <div className="w-5/6 mx-auto sm:pt-10 sm:w-1/2">
            <iframe width="450" height="315" src="https://www.youtube.com/embed/CsG64_MVG4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-5/6 mx-auto sm:pt-10 sm:w-1/2">
            <iframe width="450" height="315" src="https://www.youtube.com/embed/KFZh8ONtpSA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-primary-title font-bold leading-none mb-3">
                Martin Moreira
              </h3>
              <p className="text-primary-paragraph mb-8">
                Productor, Artista e Ingeniero
              </p>
              <a href="https://www.instagram.com/doctor.ritmo/?hl=es" class="inline-block mx-auto lg:mx-0 hover:underline gradient text-button-500 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out mb-8" target="_blank">
                IG: @doctor.ritmo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
