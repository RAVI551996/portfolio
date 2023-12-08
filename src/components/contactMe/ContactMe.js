import React from 'react'
import "./ContactMe.css"
const ContactMe = () => {
  return (
    <div className='Form'>
   


      <form>
      <h1 style={{textAlign:'center'}}>Contact Me</h1>
        <label>Your Name</label>
        <input type='text'></input>
        <label>Email</label>
        <input type='email'></input>
         <label>Subject</label>
        <input type='text'></input>
        <label>Massage</label>
       <textarea rows={6} placeholder='Please drop your message'/>
       <button className='btn' >Submit</button>
      </form>
    </div>
  )
}

export default ContactMe