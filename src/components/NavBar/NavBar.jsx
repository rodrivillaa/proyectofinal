import React from 'react'
import './NavBar.css'
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { NavLink, Route, Routes } from 'react-router-dom'
import { BiFootball} from "react-icons/bi"
import {TiMail} from "react-icons/ti";

const NavBar = () => {


return (

    <div className='ContenedorDelNavbar'>

        <div className='Contenedor-1'>
        
            <h3>TODO SUELA</h3>
        </div>

        <div className='Contenedor-2'>
            { <span><AiOutlineSearch/></span> }
            <input type="search" placeholder='¿Que estas buscando?'/>
        </div>

        <div className='Contenedor-3'>
            <NavLink className={ ({isActive}) => isActive ? 'active' : 'black' } to={'/'}> <AiFillHome/> </NavLink>
            <NavLink className={ ({isActive}) => isActive ? 'active' : 'black' } to={'/cart'}> <BsFillCartFill/> </NavLink>
            <NavLink className={ ({isActive}) => isActive ? 'active' : 'black' } to={'/contacto'}> <TiMail/> </NavLink>
        </div>
        
    </div>
)

}

export default NavBar