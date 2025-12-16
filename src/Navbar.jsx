import './Tailwind.css'
import { Link } from 'react-router-dom';

let Navbar=()=>{

    return(
        <>
      <div className='w-full h-20 flex justify-evenly items-center bg-gray-950 border-b border-amber-50 '>
            <h1 className=' flex text-white text-4xl font-semibold cursor-pointer'>LOGO</h1>
            <ul className='flex gap-8 text-xl font-medium text-blue-500'>
                <Link to="/home"><li>HOME</li></Link>
                <Link to="/about"><li>About</li></Link>
                
                
            </ul>
            <button className='bg-blue-600 rounded-xl w-35 h-10 text-amber-50 font-semibold cursor-pointer'>DOWNLOAD</button>
        </div>
        </>
    )
}
export default Navbar;