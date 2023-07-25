import React, { createContext, useContext, useState } from 'react'



const Context = createContext()



const ContextProvider = ({ children }) => {

    const products = [

        {
            img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7899da81/products/UBU07FB088-327/UBU07FB088-327-1.JPG",

            Tituo: "Botines Umbro Campo Cosmic",
            precio: 19500,
            descripcion: "Demuestra tu talento en el campo con el Umbro Cosmic Jr. La parte superior está hecha de material laminado y texturizado. Tiene aplicación de gráficos tipo degradado con superposición de tres colores serigrafiados. Suela FG con 14 tapones, fabricada en material PVC.",
            id: 1,
            stock:50

        },
        {
            img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw0ca9f964/products/NI_DA1331-176/NI_DA1331-176-1.JPG",
            Tituo: "Botines Nike Tiempo ",
            precio:  22000,
            descripcion: "El Nike Tiempo Legend 9 Club MG, uno de nuestros Tiempo más ligeros hasta la fecha, te permite ir a la ofensiva con un diseño de perfil bajo que se reinventa para los atacantes. La parte superior presenta texturas en relieve con suaves almohadillas de espuma que brindan precisión para los regates, pases y tiros, mientras que los tachones en la base aportan tracción para los cortes rápidos y las frenadas repentinas.",
            
            id: 2,
            stock:50
    
            },
{
    img: "https://sporting.vtexassets.com/arquivos/ids/842405-800-800?v=638235733927770000&width=800&height=800&aspect=true",
        Tituo: "Botines adidas Predator Accuracy ",
            precio:  49500,
            descripcion:"Control + precisión = confianza. Cuando el arco está en tus ojos, apuntá a la perfección con adidas Predator Accuracy. El exterior textil revestido de estos botines incorpora textura de alta definición en la zona de impacto. Una mezcla de elementos y el estampado en relieve te ayudan a lograr cada pase y cada tiro. La suela de caucho ranurada te permite tener el liderazgo sobre pasto sintético",
            id: 3,
            stock:24
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
            descripcion:"Bate todos los récords con los zapatos de fútbol ULTRA Match. Tienen un empeine hecho de malla liviana reforzada con un revestimiento fino GripControl para que tengas un dominio decisivo del balón. Además, cuentan con un borde bajo de tejido de punto que se ajusta cómodamente al tobillo y una suela exterior para entrenamiento en pasto artificial que te garantiza una tracción y propulsión óptimas. Ni tú sabías que podías correr tan rápido.",
                id: 5,
                stock:50

},
{
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw25ca99b6/products/NIDA1174-146/NIDA1174-146-1.JPG",

        Tituo: "Botines Fútbol Nike Legend 9",
            precio:  42550,
            descripcion:"Los Botines Fútbol Nike Tiempo Legend 9 Club Mg Unisex son un calzado deportivo de alta calidad diseñado para ofrecer un excelente rendimiento en campos de fútbol de césped natural y artificial. Confeccionados en cuero sintético, proporcionan una gran durabilidad y un ajuste cómodo y seguro. Su suela de goma con tacos múltiples ofrece una excelente tracción en superficies de césped natural y artificial, mientras que su plantilla acolchada brinda una cómoda amortiguación. ",
                id: 6, 
                stock:50

},
{
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw24614b76/products/NIDJ5625-146/NIDJ5625-146-1.JPG",
        Tituo: "Botines Fútbol Nike Zoom Mercurial",
            precio:  54550,
            descripcion:"Juega con el campo a tu favor con el diseño audaz del Superfly 9 Academy MG. Cuenta con una unidad Zoom Air y con una NikeSkin flexible en la parte superior para brindar un toque excepcional, de modo que puedas dominar los últimos minutos de un partido, cuando más importa. La velocidad del Air.",
                id: 7,
                stock:50

},
{
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw766b1be2/products/LONC2164648SK/LONC2164648SK-1.JPG",
        Tituo: "Botines Fútbol Lotto Solista",
            precio: 20450,
            descripcion:"Corre detrás de la pelota con estilo con los Botines Lotto Solista 700 lV. La capellada de sintético es perfecta para mejorar tus golpes y el material textil envuelve el tobillo para asegurar un agarre superior que te permitirá deslizarte por la cancha como lo campeones del mundo. La suela te permite deslizarte mejor en canchas sintéticas y de interior para mostrar todo tu potencial.",
                id: 8,
                stock:50

},
{
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc63e31e5/products/UB_U01FB002019-243/UB_U01FB002019-243-1.JPG",

        Tituo: "Botines Umbro Sala Z Club",
            precio: 19950,
            descripcion:"Los botines UMBRO Sala Z Club están desarrollados con capellada en sintético con serigrafía y alta frecuencia, entresuela de EVA y suela diseñada para canchas de césped sintético.",
                id: 9,
                stock:50
},
{
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2b076e97/products/NI_AT5732-104/NI_AT5732-104-1.JPG",
        Tituo: "Botines Nike Legend 8 Academy",
            precio:  29950,
            descripcion:"Disfrutá de una velocidad única con los Botines Nike Tiempo Legend 8 Academy Fg/Mg, confeccionados en cuero sintético para darte mayor durabilidad con el tiempo y brindar el mejor agarre durante todo el partido permitiéndote juagadas más precisas y que finalicen con tu grito de gol.",
                id: 10,
                stock:50

},
{
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa84d90d4/products/ADGZ5142/ADGZ5142-1.JPG",
        Tituo: "Botines Fútbol adidas X Speedportal",
            precio:  44450,
            descripcion:"Mente. Cuerpo. Botines. Conectados en un abrir y cerrar de ojos. Ponete estos botines adidas X Speedportal para desbloquear la velocidad en todas sus dimensiones. El exterior textil revestido de estos botines luce un estampado de Messi. La suela de caucho con tapones te permite moverte con fluidez en canchas de pasto sintético.",
                id: 11,
                stock:50

},
{
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwcc520cc5/products/ADGW8507/ADGW8507-1.JPG",
        Tituo: "Botines Fútbol adidas X Speedportal.4",
            precio: 27950,
            descripcion:"Tiempo y espacio. Todo es relativo cuando jugás en una dimensión diferente. Abrí el portal a la velocidad multidimensional con adidas X Speedportal. Estos botines fueron creados para realizar movimientos rápidos y cambios de velocidad en superficies de césped artificial. Suave y resistente, su exterior textil revestido te ayuda a mantener el balón bajo control cuando la acción en la cancha se intensifica.",
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
