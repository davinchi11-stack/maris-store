import { useParams } from "react-router-dom"
import { Products } from "../shop/shop"
import { useFetchData } from "../../HOOK/useFetchData";
import { Info } from "./info";
import './styleItems.scss'

export function ItemsInfo (){
    const {id}: any = useParams()
    const {data} = useFetchData()
  

    
    return (
        <div className="items-info">
             
             {data?.products.map((data: Products)=> id == data.id  && <Info key={data.id} data={data}/> )}
            
        </div>
    )
}