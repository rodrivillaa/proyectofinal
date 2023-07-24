import React from 'react'
import './App.css'
import { useCustomContext } from './ContextManager/ContextProvider'
import { ProductCard } from './components'

import { Route, Routes } from 'react-router-dom'
import DetailPages from './screens/DetailPage/DetailPages'
import HomePage from './screens/HomePage/HomePage'
import CartPage from './screens/CartePage/CartPage'
import { NavLink } from 'react-router-dom'
import Formulario from './screens/Formulario/Formulario'




function App() {


  return (
    <>
      
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/detail/:id" element={<DetailPages/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path='/contacto' element={<Formulario/>}/>
        

      </Routes>
    </div>    
    </>
  )
}

export default App