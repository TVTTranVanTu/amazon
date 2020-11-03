import React from 'react'
import { useStateValue } from '../StateProvider'

function Product({ id, title, image, price, rating }) {
    const [{ card }, dispatch] = useStateValue();

    console.log("this is list products", card);
    const addToCard = () => {
        dispatch({
            type: "ADD_TO_CARD",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        })
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_, i) => (
                            <p key={i}>⭐</p>

                        ))
                    }
                </div>
            </div>
            <img src={`${image}`}
                alt=""
            />
            <button onClick={addToCard}>Add to Card</button>
        </div>
    )
}

export default Product
