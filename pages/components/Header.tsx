import { FunctionComponent, Fragment } from 'react'

const Header: FunctionComponent = () => {
  return (
    <Fragment>
      <div
        className="pt-10 h-screen bg-local bg-cover"
        style={{ backgroundImage: 'url(/playa.jpg)', backgroundPosition: '83% 10%' }}
      >
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full justify-center items-center sm:items-start text-center md:text-left">
            <h1 className="font-belleza my-4 text-6xl font-bold leading-tight text-primary-title-500 uppercase">
              Claudia Otárola
            </h1>
            <p className="font-dancingscript text-5xl text-primary-title-400">
              Mentora en autosanación espiritual
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Header
