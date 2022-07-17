import React from 'react'

const Reset = ({onSignup, onLogin}) => {
  return (
    <div className='reset'>
        <h1>reset!!</h1>
        <button onClick={onLogin}>login</button>
        <button onClick={onSignup}>signup</button>
    </div>
  )
}

export default Reset