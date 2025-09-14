import HeroSection from "../components/HeroSection"
import LandingPageReviews from "../components/LandingPageReviews"
import Header from "../components/Header"

export default function LandingPage() {
  return(
    <>
      <Header inLp={true}/>
      <HeroSection/>
      <LandingPageReviews/>
    </>
  )
}
