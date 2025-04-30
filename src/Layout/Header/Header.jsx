import React from 'react'

function Header({activeSection, toggleMenu,Menu, isMenuOpen,X}) {
  return (
    <>
    {/* Navigation */}
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-40 shadow-sm">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <a href="#home" className="text-xl font-bold text-teal-600">
        <i>DevPortfolio</i>
      </a>
 
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {["Home", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`transition-colors hover:text-teal-600 ${
              activeSection === item.toLowerCase() ? "text-teal-600 font-medium" : ""
            }`}
          >
            {item}
          </a>
        ))}
        
      </nav>
 
      {/* Mobile menu button */}
      <button className="md:hidden text-neutral-800" onClick={toggleMenu}>
        <Menu size={24} />
      </button>
    </div>
  </header>
 
  {/* Mobile Navigation */}
  {isMenuOpen && (
    <div className="fixed inset-0 bg-white z-50 md:hidden">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-teal-600">
         <i>DevPortfolio</i>
        </a>
        <button className="text-neutral-800" onClick={toggleMenu}>
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col items-center mt-20 space-y-8">
        {["Home", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xl transition-colors hover:text-teal-600"
            onClick={toggleMenu}
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  )}
    </>
  )
}

export default Header