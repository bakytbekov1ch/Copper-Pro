import React from 'react'
import Testimonial from '../components/Testimonial/Testimonial'
import Service from "../components/Service/Service"
import About from "../components/About/About"

function Home() {
  return (
    <div>
      <About/>
      <Service/>
      <Testimonial/>
    </div>
  )
}

export default Home