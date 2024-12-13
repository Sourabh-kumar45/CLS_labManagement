import React from 'react'
import { useParams } from 'react-router-dom'

const StuAbt = () => {
    const {id} = useParams()
  return (
    <div>
      hello i am abt section of studen id {id}
      <br />
      i would containg information about the issued products and other thing about the user 
    </div>
  )
}

export default StuAbt
