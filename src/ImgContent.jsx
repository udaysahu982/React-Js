import React from "react";
import ImageCard from "./ImageCard";



const ImgContent=()=>{
    let data=[
        {
        name:"laptop",
         p1: "./vite.svg"   
        },
        {
        name:"Apple",
         p1 :'./photo3.jpg'   
        },
        {
        name:"Apple",
         p1 :'./photo3.jpg'   
        },{
        name:"Apple",
         p1 :'./photo3.jpg'   
        }
        
       ]

    return (
       data.map((e)=>(
        <ImageCard my={e}/>
       ))
      
       
    )
}
export default ImgContent