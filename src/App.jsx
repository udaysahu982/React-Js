import React from 'react';
import Navbar from './Navbar';
import { Footer } from './Footer';
const App=()=>{

  let myname="uday";
  let age=18;
  
  return(
    <> 
     <Navbar/>
    {/* this is called react fragments to return multiple tags */}
    <h1>Hello From React</h1>
    <p style={
      {color:"red",backgroundColor:"green"}}>My name is {myname}</p>
    {age>=18?"you can vote":"No you can't"}



    <Footer></Footer>
    </>
  )
}


export default App