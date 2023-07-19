import React from 'react'
import Card from './Card'
const Cards = ({person}) => {
  return (
    <div className='cards'>
        {person.map(el=><Card el={el}  />)}
    </div>
  )
}

export default Cards