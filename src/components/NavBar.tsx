import React from 'react'

interface prop {
    cartItemCount:number
}

const NavBar = ({cartItemCount}: prop) => {
  return (
    <div>NavBar: {cartItemCount}</div>
  )
}

export default NavBar