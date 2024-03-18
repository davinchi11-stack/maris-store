import {useQuery} from '@tanstack/react-query'
import Axios from 'axios'


const handleData = () => {
    return Axios.get("https://dummyjson.com/products").then((res)=> res.data)
}

export const useFetchData = () => {

     const {data , isLoading} = useQuery({
        queryKey : ["data"],
        queryFn :  handleData
     })

     
     

    return {data , isLoading}
}