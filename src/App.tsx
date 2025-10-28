import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"


const App = () => {
  return (
    <main className='max-w-9xl mx-auto'>
      <Navbar />
      <Hero />
    </main>
  )
}

export default App