import { FunctionComponent } from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Services from './components/Services'
import Pricing from './components/Pricing'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

const Home: FunctionComponent = () => {
  return (
    <div
      className="leading-normal tracking-normal text-white gradient"
      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
    >
      <NavBar />
      <Header />
      <Services />
      <Pricing />
      <img alt="bottom gradient" src="/grad.svg" />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default Home
