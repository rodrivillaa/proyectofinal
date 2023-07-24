import React, { createContext, useContext, useState } from 'react'



const Context = createContext()



const ContextProvider = ({ children }) => {

    const products = [

        {
            img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7899da81/products/UBU07FB088-327/UBU07FB088-327-1.JPG",

            Tituo: "Botines Umbro Campo Cosmic",
            precio: 19500,
            descripcion: "Tienes las habilidades , tienes el juego. Ahora presumítelos con los zapatos de fútbol Nike Jr. Diseñadas para la velocidad y la agilidad, las unidades Zoom Air ayudan a absorber el impacto y te brindan una amortiguación ágil. Las lengüetas para jalar y las correas dobles se combinan para crear un diseño fácil de poner que elimina la necesidad de cordones y te ayuda a estar en la cancha rápidamente Zoom, Zoom Enérgico y receptivo, la amortiguación Zoom Air ayuda a brindar una sensación rápida de despegue del suelo.",
            id: 1,
            stock:50

        },
        {
            img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw0ca9f964/products/NI_DA1331-176/NI_DA1331-176-1.JPG",
            Tituo: "Botines Nike Tiempo ",
            precio:  22000,
            descripcion: "Tienes las habilidades , tienes el juego. Ahora presumítelos con los zapatos de fútbol Nike Jr. Diseñadas para la velocidad y la agilidad, las unidades Zoom Air ayudan a absorber el impacto y te brindan una amortiguación ágil. Las lengüetas para jalar y las correas dobles se combinan para crear un diseño fácil de poner que elimina la necesidad de cordones y te ayuda a estar en la cancha rápidamente Zoom, Zoom Enérgico y receptivo, la amortiguación Zoom Air ayuda a brindar una sensación rápida de despegue del suelo.",
            
            id: 2,
            stock:50
    
            },
{
    img: "https://sporting.vtexassets.com/arquivos/ids/842405-800-800?v=638235733927770000&width=800&height=800&aspect=true",
        Tituo: "Botines adidas Predator Accuracy ",
            precio:  49500,
            descripcion:"Tienes las habilidades , tienes el juego. Ahora presumítelos con los zapatos de fútbol Nike Jr. Diseñadas para la velocidad y la agilidad, las unidades Zoom Air ayudan a absorber el impacto y te brindan una amortiguación ágil. Las lengüetas para jalar y las correas dobles se combinan para crear un diseño fácil de poner que elimina la necesidad de cordones y te ayuda a estar en la cancha rápidamente Zoom, Zoom Enérgico y receptivo, la amortiguación Zoom Air ayuda a brindar una sensación rápida de despegue del suelo.",
            id: 3,
            stock:50
},
{
    img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw3d5ffd73/products/NIDD9465-446/NIDD9465-446-1.JPG",
        Tituo: "Botines Fútbol Nike Phantom Gx Pro",
            precio:  80000,
            descripcion:"Tienes las habilidades , tienes el juego. Ahora presumítelos con los zapatos de fútbol Nike Jr. Diseñadas para la velocidad y la agilidad, las unidades Zoom Air ayudan a absorber el impacto y te brindan una amortiguación ágil. Las lengüetas para jalar y las correas dobles se combinan para crear un diseño fácil de poner que elimina la necesidad de cordones y te ayuda a estar en la cancha rápidamente Zoom, Zoom Enérgico y receptivo, la amortiguación Zoom Air ayuda a brindar una sensación rápida de despegue del suelo.",
                id: 4,
                stock:50

},
{
    img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf591e234/products/PU107439-01/PU107439-01-1.JPG",
        Tituo: "Botines Fútbol Puma Ultra Match ",
            precio:  33750,
                id: 5,
                stock:50

},
{
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw25ca99b6/products/NIDA1174-146/NIDA1174-146-1.JPG",

        Tituo: "Botines Fútbol Nike Legend 9",
            precio:  42550,
                id: 6, 
                stock:50

},
{
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw24614b76/products/NIDJ5625-146/NIDJ5625-146-1.JPG",
        Tituo: "Botines Fútbol Nike Zoom Mercurial",
            precio:  54550,
                id: 7,
                stock:50

},
{
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw766b1be2/products/LONC2164648SK/LONC2164648SK-1.JPG",
        Tituo: "Botines Fútbol Lotto Solista",
            precio: 20450,
                id: 8,
                stock:50

},
{
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc63e31e5/products/UB_U01FB002019-243/UB_U01FB002019-243-1.JPG",

        Tituo: "Botines Umbro Sala Z Club",
            precio: 19950,
                id: 9,
                stock:50
},
{
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2b076e97/products/NI_AT5732-104/NI_AT5732-104-1.JPG",
        Tituo: "Botines Nike Legend 8 Academy",
            precio:  29950,
                id: 10,
                stock:50

},
{
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa84d90d4/products/ADGZ5142/ADGZ5142-1.JPG",
        Tituo: "Botines Fútbol adidas X Speedportal",
            precio:  44450,
                id: 11,
                stock:50

},
{
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwcc520cc5/products/ADGW8507/ADGW8507-1.JPG",
        Tituo: "Botines Fútbol adidas X Speedportal.4",
            precio: 27950,
                id: 12,
                stock:50
}
    
        ]

const getProductById = (id) => {
    return products.find(producto => producto.id == id)
}
const getProductCartById=(id) =>{
return cart.find(producto => producto.id == id)
}

const [cart, setCart] = useState([])

const isInCart = (id)=> cart.some(producto=>producto.id==id)

const addProductCard = (id, quantity) => {
    if(isInCart(id)){
        setCart(cart.map(product =>{
            if(product.id==id){
                product.quantity=quantity
            }
            return product
        }))


    }else{
        setCart([...cart,{...getProductById(id),quantity:quantity}])

    }

}


const getTotal=() => {
    let total = 0
    cart.forEach(product=>total += product.precio * product.quantity)
    return total
}

return (

    <Context.Provider value={{ products, getProductById, cart, addProductCard, isInCart, getProductCartById, getTotal }}>

        {children}

    </Context.Provider>

)

}

export const useCustomContext = () => useContext(Context)

export default ContextProvider
