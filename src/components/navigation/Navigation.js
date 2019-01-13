import React from 'react'

const Navigation = ({onRouteChange, isSignin}) => {
  if (isSignin) {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signin')} className='f3 pa3 link underline black dim pointer'>Sign Out</p>
      </nav>
    )
  } else {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signin')} className='f3 pa3 link underline black dim pointer'>Signin</p>
        <p onClick={() => onRouteChange('register')} className='f3 pa3 link underline black dim pointer'>Register</p>
      </nav>
    )
  }
}

export default Navigation
