import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <Heading title='Features we provide'/>
        <div className='container'>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
