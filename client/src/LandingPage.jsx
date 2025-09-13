import { Link } from "react-router-dom"
export default function LandingPage() {

  return(
    <>
    <LandingPageHeader/>
    <HeroSection/>
      <BlockReviews/>
    </>
  )
}

function LandingPageHeader() {
  return (
    <nav 
      className="w-full mx-auto p-4 mb-8 mt-4">
      <div 
        className="flex justify-between items-center w-full">
        <h3 
          className="text-2xl font-semibold">
          BETTER
        </h3>
        <div 
          className="flex items-center">
          <h3
            className="mr-8 text-lg text-white p-2 transition ease-linear
                       bg-orange-500 w-full h-full hover:bg-white hover:text-orange-500 hover:border">
            accedi
          </h3>
          <Link to="/contatti" 
            className="mr-8 text-lg hover:text-orange-500 transition ease-in">
            contatti
          </Link>
        </div>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <>
  <div 
      className="p-4 mt-8 flex items-center">
      <div>
        <h1 
          className="text-4xl font-extrabold">
          Migliora <br/>con un po' di sana competizione eh che cazzo!
        </h1>
        <h3 className="mt-2 mb-4">
          lo utilizzano tutti, addman a sort!
        </h3>
          <Link 
          className="mr-8 text-lg text-white p-2 transition ease-linear w-fit
          bg-orange-500 hover:bg-white hover:text-orange-500 hover:border">

            VOGLIO COMPETERE!
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

const reviews = [
  {
    review: "mo fra di che cosa stiamo parlando!",
    person: "fratm carnal",
  },
  {
    review: "il top del top fra",
    person: "cosimino",
  },
  {
    review: "amo chess applicazion je nu spettacl",
    person: "antonietta",
  }
]

function BlockReviews() {
  return (
    <div className="p-16 flex">
      {reviews.map((review, i) => (
      <div 
          key={i}
          className=
          {`${i !== reviews.length - 1 ?  "border-r" : null} 
           p-8 w-2xl flex flex-col justify-center text-center`}>
        <h1
            className="italic font-semibold text-lg"
          >"{review.review}"</h1>
        <h3
              className="font-semibold mt-2"
          >- {review.person}</h3>
      </div>
      ))}
    </div>
  )
}
