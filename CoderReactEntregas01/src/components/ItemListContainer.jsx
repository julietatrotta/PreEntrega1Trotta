import React from 'react'
import './styles.css'




const ItemListContainer = ({greetings}) => {
  return (
    <div className='greeting'>
        <p>{greetings}</p>
    </div>
  )
}

export default ItemListContainer