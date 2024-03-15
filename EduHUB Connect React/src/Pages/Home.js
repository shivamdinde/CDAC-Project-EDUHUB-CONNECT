import React from 'react'
import Carousels from '../components/Carousels'
import VMC from '../components/VMC'
import MainHeading from '../components/MainHeading'
import Card1 from '../components/Card1'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Carousels/>
      <VMC/>
      <MainHeading/>
      <Card1/>
      <Footer/>
      
      

    </div>
  )
}

export default Home
