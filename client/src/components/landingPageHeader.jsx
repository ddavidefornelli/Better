export default function LandingPageHeader() {
  return (
    <nav 
      className="w-full mx-auto p-4 mb-8 mt-4 sticky top-0 bg-white">
      <div 
        className="flex justify-between items-center w-full">
        <button onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
          className="text-2xl font-semibold cursor-pointer"
          to="/"
        >
          BETTER
        </button>
        <div 
          className="flex items-center">
          <h3
            className="mr-8 text-lg text-white p-2 transition ease-linear
                       bg-orange-500 w-full h-full hover:bg-white hover:text-orange-500 hover:border">
            accedi
          </h3>
          <button 
            onClick={document.getElementById("contatti")}
            className="text-lg hover:text-orange-500 transition ease-in">
            contatti
          </button>
        </div>
      </div>
    </nav>
  )
}
