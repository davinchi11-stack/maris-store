import { useNavigate } from "react-router-dom"
import { Products } from "../shop/shop"
import {StarFour} from 'phosphor-react'
import { useContext } from "react"
import { ShopContext } from "../../context/shopContext"



interface Props {
    data : Products
}

 
export function Info (props : Props) {
    const {data} = props
    const navigate = useNavigate() 
    const {cartItems , addToCart}: any = useContext(ShopContext)
    const cartAmount = cartItems[data.id]
    
    
    return (
        <div className="info">
          <div className="des">
             <h1>{data.title}</h1>
          </div>
          <div className="des-info">
            <h3>{data.brand}</h3>
            <p>{data.description}</p>
            <span className="rate"> <span><StarFour color="gold" size={24} weight="fill" /></span> <p>{data.rating}</p> </span>
            <h2>$ {data.price}</h2>
          </div>
          <div className="add">
          <button style={{
            background :  `${cartAmount > 0  && 'rgb(69, 69, 151)'}`,
            color  : `${cartAmount > 0  && '#fff'}`,
            }}   onClick={()=> addToCart(data.id)}>Add To Cart {cartAmount > 0 && `(${cartAmount})`}</button>
           <button onClick={()=> navigate("/")}>Continue Shoping</button>
          </div>
        </div>
    ) 
}