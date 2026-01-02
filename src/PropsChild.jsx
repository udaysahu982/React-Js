import React from 'react'


const PropsChild = (props) => {

   let {mydata}=props;
   let {name,image,id}=mydata;
   
  return (
    <div className='border w-2xl h-200 flex flex-col' >
    <img src={image} alt="" className='h-100' />      <h1 className='border h-20  text-2xl flex justify-center items-center bg-black text-white font-black'>Hello my name {name}</h1>
      <h1 className='border h-20 text-2xl flex justify-center items-center'> {id}</h1>
    </div>
  )
}

export default PropsChild

