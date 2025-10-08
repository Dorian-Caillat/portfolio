import { useState } from "react"
import { navLinks } from "../constants/navIdex";

// objet qui récupère les intitulés du menu et qui les map selon leur id dans une liste non ordonnée

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(
        ({id, href, name}) => (
          <li key={id} className="nav-li">
            <a href={href} className="nav-li_a" onClick={() => {}}>{name}</a>
          </li>
        ))}
    </ul>
  )
}

// composant de la barre de navigation qui sera géré par un menu burger ou affichera directement la navigation selon les medias queries
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center py-5 mx-auto c-space">
                <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                Dorian Caillat</a>

                <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                aria-label="Toggle menu">
                    <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6" />
                    </button>

                    <nav className="sm:flex hidden">
                      <NavItems />
                    </nav>
            </div>
        </div>
        <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <nav className="p-5">
            <NavItems />
          </nav>
        </div>
    </header>
  )
}

export default Navbar