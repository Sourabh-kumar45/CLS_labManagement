import React from 'react'
import { useParams } from 'react-router-dom'

const StuPrj = () => {
    const {id} = useParams()
  return (
    <div>
      i am project section for student id {id}
    </div>
  )
}

export default StuPrj
