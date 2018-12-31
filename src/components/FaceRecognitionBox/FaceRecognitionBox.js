import React from 'react'

const FaceRecognitionBox = ({imageUrl}) => {
  return (
    <div className='center'>
      <div className='absolute mt3'>
        <img alt='' src={imageUrl} width='500px' height='auto' />
      </div>
    </div>
  )
}

export default FaceRecognitionBox

