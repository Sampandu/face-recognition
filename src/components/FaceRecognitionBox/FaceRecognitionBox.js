import React from 'react'
import './FaceRecognitionBox.css'

const FaceRecognitionBox = ({imageUrl, faceBox}) => {
  console.log('faceRecognition', faceBox.topRow, faceBox.rightCol, faceBox.bottomRow, faceBox.leftCol)
  return (
    <div className='center'>
      <div className='absolute mt3'>
        <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto' />
        <div className='bounding-box' style={{top: faceBox.topRow, right: faceBox.rightCol, bottom: faceBox.bottomRow, left: faceBox.leftCol}}></div>
      </div>
    </div>
  )
}

export default FaceRecognitionBox

