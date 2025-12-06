let Navbar=()=>{

    return(
        <>
       <div style={{ width:"100vw",display:"flex",border:"2px solid black",justifyContent:"space-between",alignItems:"center"}}>
        <span style={{width:"20vw", display:"flex", justifyContent:"center",alignItems:"center" }}>logo</span>
        <ul style={{display:"flex", listStyle:"none", gap:"20px" }}>
            <li>Home</li>
            <li>View</li>
            <li>Contact us</li>
            <li>Social</li>
        </ul>

       </div>

        </>
    )
}
export default Navbar;