import { useFetchData } from "../../HOOK/useFetchData"
import { ShopProducts } from "./shop-products"
import Masonry from 'react-masonry-css'
import './style.scss'



export interface Products {
    id : number ;
    images : string;
    price : string;
    thumbnail : string
    title : string;
    brand : string


}

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

export function Shop () {
    const {data, isLoading } = useFetchData()

  
   if (isLoading) {
      return <div>Loading</div>
   }
    
    return (
        <div className="shop">
          <div className="shop-products">
          <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
                 {data?.products.map((products : Products)=>   <ShopProducts data={products}/>
           
           )}
            </Masonry>   
          </div>
        </div>
    )
}