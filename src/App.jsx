
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
