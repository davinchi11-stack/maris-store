import { Outlet } from "react-router-dom"
import { Header } from "./header"
import './style.scss'


export function Wrapper () {
    return (
        <div className="wrapper">
          <Header/>
           <main className="main">
             <div className="main-outlet">
               <Outlet/>
             </div>
           </main>
        </div>
    )
}