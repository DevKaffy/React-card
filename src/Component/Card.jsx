import React from 'react'

const Card = ({ name, number, email, img}) => {
  return (
    <div className = "card">
      <div className = 'details-container'>
        <div className='name-container'>
        <h1 className='name'>{name}</h1>
        </div>
      <div className= 'paragraph-container'>
      <p className='paragraph'>{number}</p>
      <p className='paragraph'>{email}</p>
      </div>
      </div>

      <div className = 'white-circle'>
        <img src={img} alt="" />
      </div>
    </div>
  )
}


export default Card;



