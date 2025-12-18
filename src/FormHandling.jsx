import React from 'react'
import { useState } from 'react'

const FormHandling = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const numRegex=/^\d+$/;


  // let [myname,setname]=useState("")
  // let [myemail,setemail]=useState("")
  // let [mynumber,setnumber]=useState("")

  let [form,setform]= useState({

    myname:"",
    myemail:"",
    mynumber:""
  })
  let handleChange=(e)=>{
    setform({ ...form,[e.target.name]:e.target.value})
  }

  let handleSubmit=(e)=>{
    let check=true;

    e.preventDefault()
    if(form.myname.trim()==""){
      alert("Name is missing")
      check=false
      return
    }
    if(!form.myemail.trim().match(emailRegex)){
      alert("wrong email")
      check=false
      return
    }
    if(!(form.mynumber.trim().match(numRegex) && form.mynumber.length==10)){
      alert("Enter valid number");
      check=false
      return
    }
    
    if(check){
      alert(  "name is " + form.myname +
              "\nemail is "+ form.myemail+ 
           "\nnumber is " + form.mynumber)
    }

  }


  return (
   <>

    <h2>Form Handling</h2>
    <form onSubmit={handleSubmit}>

   Enter Name : <input type="text" name='myname' value={form.myname} onChange={handleChange} />  <br />
   Enter Email : <input type="text"name='myemail'value={form.myemail} onChange={handleChange} />  <br />
   Enter Number : <input type="text" name='mynumber' value={form.mynumber} onChange={handleChange} />  <br />
   <button type='submit'>Handle Form</button>
    </form>
   
   </>
  )
}

export default FormHandling