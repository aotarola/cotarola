import { ChangeEvent, FunctionComponent, FormEvent, useState } from 'react'

const HEROKU_BASEURL = 'https://cotarola-api.herokuapp.com'

type NetworkNotAsked = {
  state: 'notAsked'
  data: null
}

type NetworkLoading = {
  state: 'loading'
  data: null
}

type NetworkError = {
  state: 'error'
  code: number
  data: string
}

type NetworkSuccess = {
  state: 'success'
  data: {
    status: string
  }
}

type NetworkState = NetworkNotAsked | NetworkLoading | NetworkError | NetworkSuccess

const ContactMe: FunctionComponent = () => {
  const [currentName, setName] = useState(null)
  const [currentEmail, setEmail] = useState(null)
  const [currentOption, setOption] = useState(null)
  const [networkState, setNetworkState] = useState<NetworkState>({
    state: 'notAsked',
    data: null,
  })

  // TODO: Error message, maybe have 4 states: not asked, loaded, failure, success
  const optionSelected = (event): void => {
    setOption((_) => event.target.value)
  }

  const doSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (currentOption && currentEmail && currentName) {
      try {
        const response = await fetch(HEROKU_BASEURL, {
          method: 'post',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: currentName,
            email: currentEmail,
            option: currentOption,
          }),
        })

        const data = await response.json()
        if (data.status !== 'ok') {
          throw data
        }
        setNetworkState({ state: 'success', data })
      } catch (error) {
        let message: string
        if (error.status === 'Member Exists') {
          message =
            'Ya te encuentras registrad@, si tienes alguna consulta, no dudes en enviar un correo a gracias@claudiaotarola.com'
        }
        setNetworkState({ state: 'error', code: 400, data: message })
      }
    }
  }

  const CurrentActivity = () => {
    const { state, data: message } = networkState
    switch (state) {
      case 'notAsked':
        return (
          <h3 className="my-4 text-3xl leading-tight">
            Ingresa tus datos, preferencia de sesión y te contactaré
          </h3>
        )

      case 'error':
        return message ? (
          <h3 className="my-4 text-3xl leading-tight">{message}</h3>
        ) : (
          <h3 className="my-4 text-3xl leading-tight">
            Oops, no pudimos enviar el formulario
            <span className="px-2" role="img" aria-label="cry">
              😢
            </span>
            , podrias intentar mas tarde? Gracias
            <span className="px-2" role="img" aria-label="smiley">
              😊
            </span>
          </h3>
        )

      case 'success':
        return (
          <h3 className="my-4 text-3xl leading-tight">
            Información enviada!, Muchas Gracias.
            <span className="px-2" role="img" aria-label="smiley">
              😊
            </span>
          </h3>
        )
      case 'loading':
        return (
          <h3 className="my-4 text-3xl leading-tight">
            Enviando formulario ...
            <span className="px-2" role="img" aria-label="sending">
              🚀
            </span>
          </h3>
        )
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
      <CurrentActivity />
      <form onSubmit={doSubmit}>
        <div className="text-black md:flex md:justify-center mb-6">
          <div className="grid grid-cols gap-6">
            <label htmlFor="Name" className="block">
              <span className="text-gray-700">Nombre</span>
              <input
                type="text"
                name="name"
                id="name"
                required={true}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setName(() => event.target.value)
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label htmlFor="email" className="block">
              <span className="text-gray-700">Dirección de correo</span>
              <input
                type="email"
                name="email"
                id="email"
                required={true}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setEmail(() => event.target.value)
                }}
                className="mt-1 block w-full rounded-md-border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="tu@correo.com"
              />
            </label>
            <label htmlFor="yoga-option" className="text-gray-700">
              <span className="text-gray-700">Clases</span>
              <select
                name="yoga-option"
                id="yoga-option"
                onChange={optionSelected}
                onBlur={optionSelected}
                required={true}
                className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">Selecciona una opción</option>
                <option value="yoga-4-clases">4 clases mensuales</option>
                <option value="yoga-8-clases">8 clases mensuales</option>
                <option value="yoga-12-clases">12 clases mensuales</option>
              </select>
            </label>
          </div>
        </div>
        <input
          type="submit"
          className="mx-auto lg:mx-0 hover:underline bg-white text-button-500 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          value="Enviar"
        />
      </form>
    </section>
  )
}

export default ContactMe
