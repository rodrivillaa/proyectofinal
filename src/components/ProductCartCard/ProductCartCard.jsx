import React from 'react'

const ProductCartCard = ({producto}) => {
  return (
    <div>
    <div className='productocard'>
    
    <h1>{producto.Tituo} </h1>           
    <img src={producto.img} alt="" />
    <h3>{producto.precio}</h3>
    <p>cantidad{producto.quantity}</p>

</div>  

</div>
)
}

export default ProductCartCard