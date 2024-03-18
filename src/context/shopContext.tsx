import { createContext , useState} from "react"
import { useFetchData } from "../HOOK/useFetchData"
import { Products } from "../pages/shop/shop"


export const ShopContext = createContext({})


export function ShopContextMain (props: any) {
 
 const {data} = useFetchData()
 


 


  const [cartItems , setCartItems] = useState<any>({
     1 : 0, 2 : 0, 3 : 0,  4 :  0, 5: 0 ,  6: 0,  7 : 0, 8: 0, 9 : 0, 10 : 0,
     11 : 0, 12 : 0, 13 : 0, 14 :0, 15 : 0, 16 : 0, 17 : 0 , 18 : 0, 19 : 0, 20 : 0,
     21 : 0, 22 : 0, 23 : 0,24 : 0,  25 : 0, 26 : 0, 27: 0, 28 : 0, 29 : 0, 30 : 0
  })

 

  const cartValueAmount = (id : number , value :number) => {
    setCartItems((prev: number[]) => ({...prev , [id]: value}))
}



const addToCart = (id : number , ) => {
    setCartItems((prev: number[]) => ({...prev , [id]: prev[id] + 1}))
}

const removeFromCart = (id : number) => {
    setCartItems((prev: number[]) => ({...prev , [id]: prev[id] - 1}))
}

const leverageOne =  (id : number) => {
    setCartItems((prev: number[]) => ({...prev , [id] : (prev[id] * 0 ) + 5 }))
 }

 const leverageTwo =  (id : number) => {
    setCartItems((prev: number[]) => ({...prev , [id] : (prev[id] * 0 ) + 10 }))
 }
 const leverageThree =  (id : number) => {
    setCartItems((prev: number[]) => ({...prev , [id] : (prev[id] * 0 ) + 15 }))
 }

 const leverageFour =  (id : number) => {
    setCartItems((prev: number[]) => ({...prev , [id] : (prev[id] * 0 ) + 20 }))
 }

 const getTotalCartAmount = () => {
    let totalAmount = 0
    
    for(const items in cartItems){
        if (cartItems[items] > 0) {
         let amountInfo = data?.products.find((data: Products) => data.id == Number(items) )
         totalAmount += cartItems[items] * amountInfo.price
        }
    }

    return totalAmount ;
 }

 const getItemsNumber = () => {
     let itemsNumber = 0
     for(const items in cartItems) {
         if (cartItems[items] > 0) {
            itemsNumber += cartItems[items] 
         } 
     }
     return itemsNumber
 }


    
 
 



  const contextValue = {
    cartItems , 
    addToCart ,
    removeFromCart , 
    cartValueAmount ,
    leverageOne ,
    leverageTwo , 
    leverageThree , 
    leverageFour,
    getTotalCartAmount, 
    getItemsNumber
    }

   return (
      <ShopContext.Provider value={contextValue} >
        {props.children}
      </ShopContext.Provider>
   )
}