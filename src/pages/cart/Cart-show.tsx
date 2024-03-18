import { Products } from "../shop/shop"
import { useContext  } from "react"
import { ShopContext } from "../../context/shopContext"
import {Minus } from 'phosphor-react'
import {Plus } from 'phosphor-react'
interface Props {
    data : Products
}

export function DisplayCart (props: Props ) {
    // const [cartValue , setCartValue] = useState()
    const {cartItems , addToCart , removeFromCart   , leverageOne , leverageThree , leverageTwo , leverageFour}: any = useContext(ShopContext)
    const {data} = props
    

    return (
        <>
        <div className="cart-card">
            <div className="based">
            <div className="img">
                  <img src={data.images[0] || ''} alt="" />
            </div>
            <div className="des">
                 <h2>{data.title}</h2>
                 <p>${data.price}</p>
            </div>
            </div>
      
            <div className="quantiy">
                <div className="plus-minus">
                <button onClick={()=> removeFromCart(data.id)}> <Minus size={30} /> </button>
                <button onClick={()=> addToCart(data.id)}><Plus size={30} /></button>
                </div>
                 <div className="show-amount">
                   <span>{cartItems[data.id]}</span> 
                 </div>
                 <div className="levrage">
                    <button onClick={()=> leverageOne(data.id)}>5x</button>
                    <button onClick={() => leverageTwo(data.id)}>10x</button>
                    <button onClick={() => leverageThree(data.id)}>15x</button>
                    <button onClick={()=> leverageFour(data.id)}>20x</button>
                 </div>
            </div> 
        </div>
         
        </>
      
    )
}