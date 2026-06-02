import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Credentials from './components/Credentials'
import Sectors from './components/Sectors'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Credentials />
        <Sectors />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
