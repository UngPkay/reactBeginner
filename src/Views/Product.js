import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loading from '../Components/Loading'

function Product(){
    const { id } = useParams()
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&page=${id}`
    const [product, setProduct] = useState({
        loading: false,
        data: null
    })
    let content = null

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setProduct({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setProduct({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    if(product.loading){
        content = <Loading></Loading>
    }

    if(product.error){
        content = <p>please request and try again</p>
    }

    if(product.data){
        content = 
        <div>
            <h1 className="text-2x1 font-bold mb-3">
                {product.data.results[0].title}
            </h1>
            <div>
                <img
                    src={`${"http://image.tmdb.org/t/p/w300"}${product.data.results[0].poster_path}`}
                    alt={product.data.results[0].title}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                ${product.data.results[0].popularity}
            </div>
            <div>
                {product.data.results[0].release_date}
            </div>
        </div>   
    }
    return(
        <div>
            {content}
        </div>
    )
}
export default Product