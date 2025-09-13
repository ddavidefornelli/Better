export default function LandingPage() {

    return(
    <LandingPageHeader/>
    )
}

function LandingPageHeader() {
    return(
        <div className="mt-8 w-full max-w-2xl mx-auto">
            <div className="flex justify-between items-center">
                <h3 className="text-orange-500 mr-10">better</h3>
                <h3 className="mr-10">accedi</h3>
                <h3>contatti</h3>
            </div>
        </div>
    )
}
