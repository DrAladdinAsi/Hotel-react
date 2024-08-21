import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './pin.scss'
import { Link } from 'react-router-dom'

function Pin({item}) {
    const position = [item.latitude,item.longitude]
   
  return (
    <Marker position={position}  >
      <Popup className='popup_container'>
        <div className="pin_container">
          <div className='imgContainer_in_pinContainer'>
            <img src={`https://django-ten-sable.vercel.app${item.H_photo}`} alt="the image for the pin" className="img_in_pinContainer" />
            </div>
           <div className="textContainer_in_pinContainer">
              <Link to={`/hotel/${item.id}`}>{item.name}</Link>
              <span>{item.bed_num}bedroom</span>
              <span>${item.price}</span>
            </div>
        </div>
      </Popup>
    </Marker>
  )
}

export default Pin