import React from 'react'
import Button from './Button'

interface prop {
    cartItems: string[],
    onClose: ()=> void
}

const Cart = ({cartItems,onClose}: prop) => {
  return (
    <>
    <div>Cart:</div>
    <ul>
        {cartItems.map(item=> <li key={item}>{item}</li>)}
    </ul>
    <Button onClick={onClose} children='Format' color='primary'></Button>
    </>
  )
}

export default Cart