import React, { Fragment } from 'react';
import CartItem from './CartItem'

const CartList = ({value}) => {
    const {cart} = value;
    return (
        <Fragment>
            {cart.map(item => {
                return(
                    <CartItem key={item.id} item={item} value={value}/>
                )
            })}
        </Fragment>
    )
}

export default CartList