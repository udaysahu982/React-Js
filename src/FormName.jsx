import React, { useState } from 'react'

const FormName = () => {

    let [form,setForm]=useState({

        myname:"",
        myage:"",
       
    })
    let handleChange=(e)=>{

        setForm({
            ...form,
            [e.target.name]:e.target.value
        });

    };
   

    

  return (
    <div>
    Name:  <input type="text" name='myname' value={form.myname} className='border' onChange={handleChange}   />
     <br /> <br />
    age:   <input type="text" name='myage' value={form.myage} className='border' onChange={handleChange} />
    <h1>My name is {form.myname}</h1>
    <h1>My age is {form.myage}</h1>
    </div>
  )
}

export default FormName
