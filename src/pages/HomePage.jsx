import React from 'react'
import About from '../component/Hero/About'
import Faciliti from '../component/Hero/Village'
import Gallery from '../component/Hero/Gallery'
import Hero from '../component/Hero/Hero'
import Service from '../component/Hero/Service'
import Village from '../component/Hero/Village'

export default function HomePage() {
  return (
    <div>
        <Hero />
        <About />
        <Village />
        <Service />
        <Gallery />
    </div>
  )
}
