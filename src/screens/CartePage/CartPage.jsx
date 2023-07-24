import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import ProductCard from '../../components/ProductCard/ProductCard'
import "./CartPage.css"
import { NavBar, ProductCartCard,Footer } from '../../components'

const CartPage = () => {
    const{cart,getTotal}=useCustomContext()
    console.log(getTotal())

  return (
    <div>


      <div>
          <NavBar/>
        
        
        <div className='cartpagecontainer'>
        <div
        className='cartcontainer'>
        {cart.map(producto=>(
          <ProductCartCard key={producto.id} producto={producto}/>
        
        ))}
        
        
        </div>
        
        </div>
        <div className='total'>
          TOTAL: ${getTotal()}
        </div>
      </div>
    </div>
      )
    }


export default CartPage