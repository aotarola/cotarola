import { FunctionComponent, Fragment } from 'react'

const Header: FunctionComponent = () => {
  return (
    <Fragment>
      <div className="pt-24 bg-overlay bg-custom bg-fixed py-20">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="my-4 text-5xl font-bold leading-tight">Claudia Otárola</h1>
            <p className="font-italianno leading-normal text-6xl mb-8">
              Mentora en autosanación espiritual
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Header
