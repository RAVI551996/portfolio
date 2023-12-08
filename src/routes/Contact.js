import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import SecondPage from '../components/home/SecondPage'
import ContactMe from '../components/contactMe/ContactMe'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      {/* <SecondPage heading="CONTACT." text="Let's have a chat"/> */}
    <ContactMe/>
      <Footer/>
    </div>
  )
}

export default Contact