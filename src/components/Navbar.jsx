import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='header'>
            <NavLink to='/' className='w-40 h-12 rounded-lg bg-white items-center justify-center flex font-mono font-semibold shadow-md'>
                <p className='accent-gradient_text'>Upek Hansaja</p>
            </NavLink>
            <nav className='flex text-lg gap-7 font-medium'>
                <NavLink to='/about' className={({ isActive }) => isActive ? 'text-red-500' : 'text-black-500'}>About</NavLink>
                <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-red-500' : 'text-black-500'}>Projects</NavLink>
                <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-red-500' : 'text-black-500'}>Contact</NavLink>
            </nav>
        </header>
    )
}

export default Navbar