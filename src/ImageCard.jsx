import React from 'react'
// import photo from "./assets/photo3.jpg";

 const ImageCard = (imgCon) => {
  console.log(imgCon);
  
  return (
   <>
    <div style={{height:"80vh",width:"30vw",display:"flex",flexDirection:"column",alignItems:"center",border:"2px solid black"}}>
    <img style={{width:"300px",height:"250px",paddingTop:"20px",borderRadius:"5%"}} src={imgCon.my.p1} alt="" />
    <div style={{border:"2px solid black", height:"38vh",width:"95%",marginTop:"10px"}}>
        <h1 >This is an image of {imgCon.my.name} </h1>
        <button>Purchese Now</button>
    </div>
    </div>
   </>
  )
}

export default ImageCard