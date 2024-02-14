import React from 'react'

const Form = () => {
  return (
    <>
    <form action="">
        <label htmlFor="">Enter Your Name</label>
        <input type="text" placeholder="Enter name"/>
        <label htmlFor="">Enter your Email</label>
        <input type="email" placeholder='Enter email'/>
        <button className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}

export default Form
