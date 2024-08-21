import React from 'react'
import './card.scss'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Card({item}) {


  const navigate = useNavigate();

  const handelCardClicked = (id)=>{
       navigate(`hotel/${id}`);
  }

  return (

    <div className='card_Hotel'>
    <Link to={`hotel/${item.id}`} className='the_image_container_card'>
      <img src={`https://django-ten-sable.vercel.app${item.H_photo}`} alt="the image for the card" />
    </Link>
    <div className="text_container_card" onClick={()=>{handelCardClicked(item.id)}}>
      <h2 className="title_for_card">{item.name}</h2>
      <p className="location_sec">
        <img src="/images/pin.png" alt="the location image" />
        <span>{item.address}</span>
      </p>

      <p className='pricing_card'>
        ${item.price}
      </p>

      <div className="bottom_card">
       
       <div className="features">
        <div className="feature">
          <img src="images/bed.png" alt="the bedroom image" />
          <span>{item.bed_num} bedroom</span>
        </div>

        <div className="feature">
          <img src="images/bath.png" alt="the bathroom image" />
          <span>{item.bathroom} bathroom</span>
        </div>
       </div>
        
        <div className="icons">
          <div className="icon">
          <img src="images/save.png" alt="the save image for the icon"  />
          </div>
        
          <div className="icon">
             <img src="images/chat.png" alt="the chat image for the icon"  />
          </div>
         
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card
