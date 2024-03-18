import { Link } from "react-router-dom"
import {ShoppingCart} from 'phosphor-react'
import { useContext } from "react"
import { ShopContext } from "../context/shopContext"

export function Header () { 
    const {getItemsNumber}: any = useContext(ShopContext)
    const  items = getItemsNumber()
    return (
        <header className="header">
            <div className="header-container">
            <div className="logo">
                  <h1>Maris Store</h1>
              </div>
              <nav className="nav">
                <ul>
                    <li>
                       <Link to={'/'}>Shop</Link>
                    </li>
                    <li>
                       <Link to={'cart'}> 
                       <ShoppingCart size={26}/>
                         { items > 0 && <span>{items}</span>} 
                       </Link>
                    </li>
                </ul>
              </nav>
            </div>
        </header>
    )
}