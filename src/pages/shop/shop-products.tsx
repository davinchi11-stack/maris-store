import { Products } from "./shop"
import { useContext } from "react"
import { ShopContext } from "../../context/shopContext"
import { Link } from "react-router-dom"

interface Props {
    data : Products
}


export function ShopProducts (props: Props) {
    const {data} = props

    const {cartItems , addToCart}: any = useContext(ShopContext)

  const cartShowmount = cartItems[data.id]
    

    
    return (
        <>
        
            <div className="shop-card">
               <Link to={`/${data.id}`}> 
                 <div className="img">
                     <img src={data.images[0]} alt="thumb" />
                 </div>
                 <div className="decs">
                    <h2>{data.title}</h2>
                    <p>${data.price}</p>
                 </div>
                 </Link>
                 <div className="add-to">
                    <button style={{
                    background :  `${cartShowmount > 0  && 'rgb(69, 69, 151)'}`,
                    color  : `${cartShowmount > 0  && '#fff'}`,
                 }}  onClick={()=> addToCart(data.id)}>
                        Add to Cart  {cartShowmount > 0 &&  `(${cartShowmount})`}
                        </button>
                 </div>
            </div>
           
        </>
    )
}