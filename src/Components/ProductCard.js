import React from 'react'
import { Link } from "react-router-dom";

function ProductCard(props){
    return(
        <div className="border mb4 rounded overflow-hidden">
            <Link to={`/product/${props.product.id}`}>
            <div
                style={{
                    'backgroundImage': `url("http://image.tmdb.org/t/p/w300${props.product.poster_path}")`
                }}
                className="w-full h-64 bg-blue bg-cover"
            >
            </div>
            </Link>
            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">
                    <Link to={`/product/${props.product.id}`}
                    >
                        {props.product.popularity}
                    </Link>
                </h3>
                <div className="font-bold mb-3">
                    {props.product.overview}
                </div>
                <Link 
                    to={`{/product/${props.product.id}}`}
                    className="bg-blue-500 text-white p-2 flex justify-center"
                    >
                        View
                </Link>
            </div>

        </div>
    )
}

export default ProductCard;