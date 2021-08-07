import { FunctionComponent } from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import Pricing from './components/Pricing'
import ContactMe from './components/ContactMe'
import Cronyoser from './components/Cronyoser'
import Footer from './components/Footer'

const Home: FunctionComponent = () => {
  return (
    <div
      className="leading-normal tracking-normal text-white gradient"
      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
    >
      <NavBar />
      <Header />
      <AboutMe />
      <Services />
      <Pricing />
      <Cronyoser />
      <img alt="bottom gradient" src="/grad.svg" />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default Home
