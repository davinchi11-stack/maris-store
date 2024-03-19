import './App.scss'
import {createBrowserRouter , createRoutesFromElements , Route , RouterProvider } from 'react-router-dom'
import { Wrapper } from './wrapper'
import { Shop } from './pages/shop/shop'
import { Cart } from './pages/cart/cart'
import {QueryClient , QueryClientProvider} from '@tanstack/react-query'
import {  ShopContextMain } from './context/shopContext'
import { ItemsInfo } from './pages/itemsInfo/itemsInfo'


 const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' element={<Wrapper/>}>
        <Route index element={<Shop/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='/:id' element={<ItemsInfo/>}/>
       </Route>
    )
 )



 const client = new QueryClient()

  function App() {
    
        return (
          <>
         
       
           <QueryClientProvider client={client}> 
           <ShopContextMain> 
           <RouterProvider router={router}/>
           </ShopContextMain>
           </QueryClientProvider>
        
          </>
        )
  }

export default App
