import React from 'react'
import PropsChild from './PropsChild'

const Props = () => {

    let data={
        name:":Laptop",
       image:"photo3.jpg",
        id:"I used as a type writer"
    }
    let data2={
        name:"react",
        image:"vite.svg",
        id:"React vite"
    }

       
   


  return (
    <div className='flex'>
       
      <PropsChild mydata={data}/>
      <PropsChild mydata={data2}/>
    </div>
  )
}

export default Props
