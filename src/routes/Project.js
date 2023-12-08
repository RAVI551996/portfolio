import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import SecondPage from '../components/home/SecondPage'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <SecondPage heading="PROJECT." text="Some of my project"/>
      <Footer/>
    </div>
  )
}

export default Project