import axios from "axios"
import { useState, useEffect } from "react"

export default function Card() {
    const [product, setProduct] = useState('sas') 
    const [loading, setLoading] = useState(false)


    const pName = async (params) => {
        try {
            setLoading(true)
            let res = await axios.get("https://fakestoreapi.com/products");
            setProduct(res)
            console.log(res.data);
            
            
        } catch (error) {
            <p>There is somthing wrong</p>
        }
        finally{
            setLoading(false)
        }
        
        
    }
    useEffect(() => {
        pName()
    }, [])
    return [product]
}