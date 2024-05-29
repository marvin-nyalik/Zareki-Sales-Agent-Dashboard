import React from 'react'

const Card = ({ label, number }) => {
  return (
    <div className='p-3 mb-2 flex flex-col justify-center items-center border border-2 p-3 border-teal-300 rounded-xl'>
      <p className='font-bold text-green-500 text-xl mb-2'>92</p>
      <p className='text-base'> Collections </p>
    </div>
  )
}

export default Card;
