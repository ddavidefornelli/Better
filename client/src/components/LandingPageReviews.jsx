const reviews = [
  {
    review: "mo fra ma di che cosa stiamo parlando!",
    person: "fratm carnal",
  },
  {
    review: "nu capovolavor dell' ingegnieria d mow je cuss",
    person: "cosimino",
  },
  {
    review: "amo chess applicazion je nu spettacl",
    person: "antonietta",
  }
]

export default function LandingPageReviews() {
  return (
    <div className="p-16 flex">
      {reviews.map((review, i) => (
      <div 
          key={i}
          className=
          {`${i !== reviews.length - 1 ?  "border-r-2 border-dashed" : null} 
           p-8 w-2xl flex flex-col justify-center text-left`}>
        <h1
            className="italic font-bold text-lg"
          >"{review.review}"</h1>
        <h3
              className="font-medium mt-2"
          > &gt; {review.person}</h3>
      </div>
      ))}
    </div>
  )
}
