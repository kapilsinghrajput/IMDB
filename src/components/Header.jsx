
import React from 'react'
import{ FaHome, FaInfo, } from 'react-icons/fa'
import MenuItem from './MenuItem'
import Link from 'next/link'
import DarkmodeSwich from './DarkmodeSwich'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-3 px-5 lg:max-w-[90%] mx-auto rounded-b-md '>

       <div className='flex  gap-4 '>
        <MenuItem title="Home" Path="/"  Icon={FaHome} />
        <MenuItem title="About" Path="/about"  Icon={FaInfo} />
       </div>


        <div className='flex items-center gap-4'>
          <DarkmodeSwich/>
        <Link href={"/"} className='flex'>
          <span className='bg-yellow-400 p-1 rounded-md font-extrabold text-black text-2xl '>Next-JS</span>
        </Link>
        </div>

  
    </div>
  )
}

export default Header;