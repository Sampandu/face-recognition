import React from 'react'
import './FaceRecognitionBox.css'

const FaceRecognitionBox = ({imageUrl, faceBoxes}) => {
  console.log('faceBoxes', faceBoxes)
  return (
    <div className='center'>
      <div className='absolute mt3'>
        <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto' />
        {
          faceBoxes.map( (faceBox, idx) => {
            return (
              <div key={idx} className='bounding-box' style={{top: faceBox.topRow, right: faceBox.rightCol, bottom: faceBox.bottomRow, left: faceBox.leftCol}}></div>
            )
          })
        }
      </div>
    </div>
  )
}

export default FaceRecognitionBox

