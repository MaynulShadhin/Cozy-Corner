import axios from "axios"

export const getProducts = async () => {
    const res = await axios.get('http://localhost:3000/products/api/get-all')
    return res.data
}
export const getProductDetails = async (id) => {
    const res = await axios.get(`http://localhost:3000/products/api/${id}`)
    return res.data
}

export const getUser  = async()=>{
    const res = await axios.get('')
    return res.data
}