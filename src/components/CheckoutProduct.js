import React from 'react'
import { useStateValue } from '../StateProvider'

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ card }, dispatch] = useStateValue();

    const removeFromCard = () => {
        dispatch({
            type: "REMOVE_FROM_CARD",
            id: id
        })
    };
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image"
                src={image}
                alt=""
            />
            <div className="checkoutProduct__infor">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>⭐</p>
                    )
                    )}
                </div>
                <button onClick={removeFromCard}>Remove from Card</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
