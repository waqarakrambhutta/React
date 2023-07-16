import { useState } from 'react'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import styled from 'styled-components'

interface prop{
  onClick:()=>void
}


const Like = ({onClick}:prop) => {
  const [status,setstatus] =useState(false)

  const toggle =()=>{
    setstatus(!status);
    onClick();
  }

  if (status) return <AiFillHeart size={30} color='red' onClick={toggle}/>
  return  <AiOutlineHeart size={30} onClick={toggle}/>
  
}

export default Like