import { FunctionComponent, Fragment } from "react";

const Header: FunctionComponent = () => {
  return (
    <Fragment>
      <div className="pt-24 bg-overlay bg-custom bg-fixed ">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Claudia Otárola
            </h1>
            <p className="font-veryberry leading-normal text-4xl mb-8">
              Mentor en autosanación espiritual
            </p>
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            <img alt="logo" className="w-full md:w-4/5 z-50" src="/logo.svg" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
