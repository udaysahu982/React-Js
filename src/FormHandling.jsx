import React from 'react'
import { useState } from 'react'

const FormHandling = () => {

  let [myname,setname]=useState("")
  let [myemail,setemail]=useState("")
  let [mynumber,setnumber]=useState("")

  let handleSubmit=(e)=>{

    e.preventDefault()
    alert(
      `
      my name ${myname}
      my email ${myemail}
      my number ${mynumber}
      `
    )

  }


  return (
   <>

    <h2>Form Handling</h2>
    <form onSubmit={handleSubmit}>

   Enter Name : <input type="text" onChange={(e)=>{setname(e.target.value)}} />  <br />
   Enter Name : <input type="text" onChange={(e)=>{setemail(e.target.value)}} />  <br />
   Enter Name : <input type="text" onChange={(e)=>{setnumber(e.target.value)}} />  <br />
   <button type='submit'>Handle Form</button>
    </form>
   
   </>
  )
}

export default FormHandling