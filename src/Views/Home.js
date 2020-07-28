import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loading from '../Components/Loading'
import ProductCard from '../Components/ProductCard';

function Home(){
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&page=1`
    const [products, setProducts] = useState({
        loading: false,
        data: null
    })
    let content = null

    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setProducts({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setProducts({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    if(products.loading){
        content = <Loading></Loading>
    }

    if(products.error){
        content = <p>please request and try again</p>
    }

    if(products.data){
        content = 
        products.data.results.map((product) =>
            <div key={product.id}>
                <ProductCard product = {product}/>
            </div>
        )
    }

    return(
        <div>
           {content}
        </div>
    )
}
export default Home