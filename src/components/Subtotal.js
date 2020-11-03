import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { getCardTotal } from '../reducer';
import { useStateValue } from '../StateProvider';

function Subtotal() {
    const [{ card }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({card.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                        This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getCardTotal(card)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
