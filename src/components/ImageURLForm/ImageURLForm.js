import React from 'react'
import './ImageURLForm.css'

const ImageURLForm = () => {
  return (
    <div>
      <p className='f3'>
        { 'The monkey will look for faces in your images, give it a shot.' }
      </p>
      <div className='center'>
        <div className='pa4 br3 shadow-3 form center'>
          <input className='f4 pa2 w-70 br2' type='text'/>
          <button className='f4 pa2 w-30 br2 grow link ph3 pv2 pointer bg-light-purple dib white'>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageURLForm
