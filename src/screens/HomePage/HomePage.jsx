import React, { useEffect, useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Footer, NavBar, ProductCard } from '../../components'
import "./HomePage.css"

const HomePage = () => {

const {products}=useCustomContext()
const [searchProduct, setSearchProduct]=useState("")
const [max,setMax]=useState(60000)
const [min,setMin]=useState(0)


const [currentProducts,setCurrentProducts]=useState(products)


    useEffect(()=>{
        setCurrentProducts(products.filter(
            producto => producto.Tituo.toLowerCase().includes(searchProduct.toLowerCase()) && producto.precio >=min && producto.precio<=max
        ))
    },[searchProduct,max,min])

return (
    <div className='general'>
<NavBar/>



    
<div className='container'>
    <div className='filtrocontainer'>
<h1>LISTA DE PRODUCTOS</h1>
        <div>
        <input placeholder='Nombre Del Producto' value= {searchProduct} onChange={(e)=>setSearchProduct(e.target.value)}/>
        </div>
    <h2>PRECIO</h2>
        <div className='filtro-2'>
           
        <input type="text" value={min} onChange={(e)=>setMin(Number(e.target.value))}/>
       
        <input type="text" value={max}  onChange={(e)=>setMax(Number(e.target.value))}/>
        </div>
    </div>
    

</div>


    <div className='productocontainer'>
    {
    currentProducts.length > 0
    ?
    currentProducts.map(producto => (
    
    <ProductCard producto={producto} key={producto.id}/>
    ))
    :
    <h2>
        No se encuentra ningun producto
    </h2>
    }
    </div>

    <Footer/>
    
    </div>
)}


export default HomePage