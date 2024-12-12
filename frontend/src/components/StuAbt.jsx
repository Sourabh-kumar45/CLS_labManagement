import React from 'react'
import { useParams } from 'react-router-dom'

const StuAbt = () => {
    const {id} = useParams()
  return (
    <div>
      hello i am abt section of studen id {id}
    </div>
  )
}

export default StuAbt
