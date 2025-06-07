import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";

function Header() {
  const [ismodal, setismodal] = useState(false);

  
  return (
    <>
{/* overlay */}

   {ismodal && (
  <div className="overlay w-full h-full fixed" onClick={()=> setismodal(false)} >
    <div
     onClick={(e)=> {
      e.stopPropagation();
     }}
      className="ineroverlay bg-amber-50 h-full w-[30%] absolute duration-700 transition-all"
      style={{ left: ismodal ? "0%" : "-100%" }}
    ></div>
  </div>
)}

   
    <header className='p-4 shadow-xl'>
        <div className='max-w-[1200px] mx-auto flex items-center '>
         <div className='w-[100px]'><img src='Images/swigilogo.jpg'  className='h-16 w-full'/></div>

         <div className='text-orange-600 items-center gap-4 flex ' onClick={()=> setismodal(true)} >India <FaAngleDown /></div>
      
         
          <nav className='flex list-none gap-6 ml-auto font-semibold'>
          <li>Search</li>
          <li>Offers</li>
          <li>Help</li>
          <li>Sing In</li>
          <li>Card</li>
        </nav>
      
      
        </div>

       
    </header>
    </>
  )
}

export default Header