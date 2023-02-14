import React,{useState,useEffect} from 'react'
import './Home.css'
import Axios from "axios"
const Home = () => {
    const [products,setProducts] = useState([])
    const[term,setTerm] = useState()
 useEffect(()=>{
  Axios.get("https://fakestoreapi.com/products").then((res) =>{
    const sortedProducts = res.data.sort((a, b) => b.rating.rate - a.rating.rate);
    setProducts(sortedProducts)
})

 },[])

 const filterdata = products.filter(({title}) =>{
    return title.indexOf(term) >=0
 })

  return (
    <>
    <div className='Home'>
        <div>
            <input type="text" value={term} onChange={(e) => setTerm(e.target.value)}/>
            </div>
        <div>
        <table>
            <thead>
                <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
                <th>Image</th>
                <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {filterdata.map(product => (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>${product.price}</td>
                    <td>{product.description}</td>
                    <td>{product.category}</td>
                    <td>{product.image}</td>
                    <td>{product.rating.rate}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
     </div>
    </>
  )
}

export default Home