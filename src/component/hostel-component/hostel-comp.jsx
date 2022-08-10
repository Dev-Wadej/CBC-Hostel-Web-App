import React from 'react'
import './hostel-comp.scss'

const Hostel = ({hostel}) => {
    const {name, address, imageUrl, spaces} = hostel;

  return (
    <div className='hostel-card'>
        <img className='hostel-image' src={imageUrl} />
        <h3>{name}</h3>
        <div>
            <p className='address'>{address.suite}, {address.street}</p>
        </div>
        <p className='spaces-available'>{spaces} BEDSPACES AVAILABLE</p>
    </div>
  )
}

export default Hostel