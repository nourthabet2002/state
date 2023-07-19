import React from 'react'
import Modal from './Modal'
import {useState} from "react"

const Card = ({el}) => {
  const [showModal, setshowModal] = useState(false)
  return (
    <div className='card'>
      {showModal?<Modal el={el} setshowModal={setshowModal} />:null}
        
      <h1>{el.fullname}</h1>
      <h1>{el.profession}</h1>
      <h1><img src={el.imgsrc} alt={el.fullname} /></h1>
      <button onClick={()=>setshowModal(true)} >show me</button>
    </div>
  )
}

export default Card