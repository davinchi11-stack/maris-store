import { useContext , useState } from "react"
import { ShopContext } from "../../context/shopContext"
import { useFetchData } from "../../HOOK/useFetchData"
import { Products } from "../shop/shop"
import { DisplayCart } from "./Cart-show"
import {Wallet , ShoppingCart} from 'phosphor-react'
import './cart-Style.scss'
import {  useNavigate } from "react-router-dom"


export function Cart () {
    const [toggle , setToggle] = useState(true)
    const {cartItems , getTotalCartAmount}: any = useContext(ShopContext)
    const total = getTotalCartAmount()
    const {data} = useFetchData()
    const  navigate = useNavigate()

    const home = () => {
        navigate("/")
        setToggle(!toggle)
    }
    return (
        <div className="cart">
            <div className="checkout-mobile ">
            <div onClick={()=> setToggle(!toggle)} className="check-mobile">
                <h1>Checkout</h1>
                <span><Wallet size={24} color="white" /></span>
            </div>
            <div className={`mobile-pay ${!toggle ? "show" : ""}`}>
                <div onClick={()=> setToggle(!toggle)} className="cart-icon"> <h1>See in cart</h1> <span><ShoppingCart size={24} weight="fill" color="white"/> </span></div>
                <div className="mobile-amount">
                 <h3>${total} </h3>
                </div>
                <div className="pay-mobile">
                    <button>Pay</button>
                    <button onClick={home}>Continue Shoping</button>
                </div>
            </div>
            </div>
                { total > 0 ?<div className="show-cart">
                        {data?.products.map((data: Products) => cartItems[data.id] !==  0 && <DisplayCart data={data}/> )}
                    </div>   : <h1>Cart is Empty</h1>
                    }
           
            <div className="checkout">
                <div className="check">
                <h1>Checkout</h1>
                <span><Wallet size={30} color="white" /></span>
                </div>
                <div className="amount">
                     <h3>$ {total} </h3>
                </div>
                <div className="pay">
                    <button>Pay</button>
                    <button onClick={()=> navigate("/")}>Continue Shoping</button>
                </div>
            </div>
        </div>
    )
}