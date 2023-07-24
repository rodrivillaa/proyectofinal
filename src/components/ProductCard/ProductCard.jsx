import React from 'react'
import { Link } from 'react-router-dom'
import "./ProductCard.css"

const ProductCard = ({producto}) => {
return (
<div >
  <div className='productocard'>
    <h1>{producto.Tituo}</h1>           
    <img src={producto.img} alt="" />
    <h3>{producto.precio}</h3>
    <Link className='btn-boton' to={"/detail/" + producto.id}>Detalles</Link>

</div>  

</div>
)
}

export default ProductCard