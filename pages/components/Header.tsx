import { FunctionComponent, Fragment } from 'react'

const Header: FunctionComponent = () => {
  return (
    <Fragment>
      <div
        className="pt-10 h-screen bg-local bg-cover bg-right-bottom md:pt-24"
        style={{ backgroundImage: 'url(/playa.jpg)' }}
      >
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full justify-center items-center sm:items-start text-center md:text-left">
            <h1 className="font-belleza my-4 text-6xl font-bold leading-tight text-primary-title uppercase">
              Claudia Otárola
            </h1>
            <p className="font-dancingscript text-5xl text-primary-title">
              Mentora en autosanación espiritual
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Header
