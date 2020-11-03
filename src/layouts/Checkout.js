import React from 'react'
import CheckoutProduct from '../components/CheckoutProduct';
import Subtotal from '../components/Subtotal';
import { useStateValue } from '../StateProvider';
function Checkout() {
    const [{ card }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_jpg"
                    alt=""
                />
                <div>
                    <h2 className="checkout__title">Your shopping Card</h2>
                    {card.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                        />
                    )
                    )}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
                <h2>The subtotal will go here</h2>

            </div>
        </div>
    )
}

export default Checkout
