import React from 'react'
import Navbare from './Navbare'

export default function Container(props) {
  return (
    <>  
    <Navbare />
    {props.children}
    </>
  )
}
