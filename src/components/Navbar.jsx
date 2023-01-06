import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constant";


const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo}/>
    </nav>
  )
}

export default Navbar