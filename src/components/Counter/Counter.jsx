import React, { useState } from 'react'
import "./Counter.css"
import { useCustomContext } from '../../ContextManager/ContextProvider'

const Counter = ({initialValue,stock,id}) => {
    const {addProductCard} = useCustomContext()
    const [quantity,setQuantity]=useState(initialValue)
    const onClickAddProduct = () =>{
        addProductCard(id,quantity)
        Swal.fire(
            'Bien Hecho',
            'Se a Añadido Al Carrito',
            'success'
        )
    }
    
    return (

    <div className='buttondetail-2'>
        <div className='comprar'>

        <button onClick={()=>setQuantity(quantity>1 ? -1:quantity)}>-</button>
        <span>{quantity}</span>
        <button onClick={()=>setQuantity(quantity===stock ? quantity:quantity + 1)}>+</button>

    </div>
    <div className='confirmar'>
        <button  onClick={onClickAddProduct}> CONFIRMAR</button>

    </div>
    </div>

    
    
    
    
    
    
)
}

export default Counter