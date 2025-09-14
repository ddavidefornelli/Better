import { Link } from "react-router-dom"

export default function HeroSection() {
  return (
    <>
      <div 
        className="p-4 mt-8 flex items-center justify-between"
        id="hero"
      >
        <div className="mr-16">
          <h1 
            className="text-4xl font-extrabold ">
            Migliora grazie a della sana competizione!
          </h1>
          <h3 className="mt-2 mb-4">
            lo utilizzano tutti, addman a sort!
          </h3>
          <Link to="/Login"
            className="mr-8 text-lg text-white p-2 transition ease-linear w-fit
            bg-orange-500 hover:bg-white hover:text-orange-500 hover:border">

            VOGLIO COMPETERE
          </Link>
        </div>

        <img 
          src="../../public/hero.jpg" 
          alt="immagine di persone che corrono" 
          className="border-2 h-80"
        />
      </div>
    </>
  )
}
