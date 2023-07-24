import React from 'react'
import './Footer.css'
import { BsWhatsapp, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";



const Footer = () => {



return (

    <div className='Footer-Container'>

        <div className='Contenedor1'>
            <h2>Seguinos</h2>
            <div className='ContenedorHijo1'>
                <span> <BsWhatsapp/> </span>
                <span> <BsInstagram/> </span>
                <span> <BsFacebook/> </span>
                <span> <BsTwitter/> </span>
            </div>
        </div>

        <div className='Contenedor2'>
            <img src="https://us.123rf.com/450wm/zlava74/zlava741801/zlava74180100084/94400090-zapatos-de-f%C3%BAtbol-rojo-y-bal%C3%B3n-de-f%C3%BAtbol-dibujos-animados-sobre-fondo-blanco-vector-.jpg" alt="" />
        </div>

        <div className='Contenedor3'>
        <h2>Metodos de Pagos</h2>
            <div className='ContenedorLogo'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/MasterCard_early_1990s_logo.svg/200px-MasterCard_early_1990s_logo.svg.png" alt="" />
                <img src="https://w7.pngwing.com/pngs/49/82/png-transparent-credit-card-visa-logo-mastercard-bank-mastercard-blue-text-rectangle.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Logo_Naranja.png" alt="" />
                <img src="https://www.sitepro.com.ar/web/wp-content/uploads/2022/08/Mercado-pago-1024x267.png" alt="" />
            </div>
        </div>
    </div>

)
}

export default Footer