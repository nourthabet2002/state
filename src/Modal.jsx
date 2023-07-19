import React from 'react'

const Modal = ({el,setshowModal}) => {
  return (
    <div className='modal'>
      <div className="box_modal">
        <button onClick={()=>setshowModal(false)} >X</button>
        <h1>Name: {el.fullname} </h1>
        <h1>Profession: {el.profession} </h1>
      </div>
    </div>
  )
}

export default Modal
