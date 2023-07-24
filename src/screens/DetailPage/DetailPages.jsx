import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import "./DetailPages.css"
import { NavBar,Footer } from '../../components'
import Counter from '../../components/Counter/Counter'


const DetailPages = () => {
  const{id} = useParams()
  const {getProductById, addProductCard, isInCart,getProductCartById} = useCustomContext()
  const [productDetail,setProductDetail]= useState(isInCart(id) ? getProductCartById (id) : getProductById(id))
  

  return (
    <div>





  <div className='containerdetail'>
      <NavBar/>
    
    <div className='botin'>
      <img src={productDetail.img} />
    </div> 
    
    <div className='productdetail'> 
      <h3>{productDetail.Tituo}</h3>
      <h2>{productDetail.precio}</h2>
      <h4>Descripcion</h4>
      <p>{productDetail.descripcion}</p>
    </div> 
      
      {isInCart(id)
      ? 
      <Counter initialValue={productDetail.quantity} stock={productDetail.stock} id={productDetail.id}/>
      :
      <Counter initialValue={1} stock={productDetail.stock} id={productDetail.id}/>
    }
      
    
    </div>
    <Footer/>
    </div>
  

  )
}


export default DetailPages