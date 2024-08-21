import React, { useEffect, useState } from 'react'

import './singlePage.scss'
import Slider from '../../components/slider/Slider'
import Map from '../../components/map/Map'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function SinglePage() {
 
 

  const { id } = useParams();

  console.log('the id=',id)
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const getData =async()=>{
      try{
      const response= await axios.get(`https://django-ten-sable.vercel.app/hotels/${id}`)
      setHotel(response.data)
    }
    catch(error){

    }
    }
    getData()
  }, [id]);
 

  if (!hotel) {
    return <div>Loading...</div>;
 }

  return (
    <>

    <div className='singlePage'>
        <div className="article">
          <div className="wrapper">
            <Slider images= {hotel.H_photos}/>
            <div className="info">
              <div className="post">
                <span className="title_post">{hotel.name}</span>
                <div className="location_post">
                  <img src="/images/pin.png" alt="the pin for the location" />
                 <span className="thePlace_post">{hotel.address}</span>
                </div>
                <span className='price_singlePage'>${hotel.price}</span>
              </div>
            </div>
            <div className="desc">
              <p className='para_singlePage'>{hotel.description}</p>
            </div>
        
          </div>
        </div>
        <div className="features_singlePage">
        <div className="wrapper">
    <div className="sizes">
    <p className="title">Sizes</p>
    <div className="sizeItems">
      <div className="size_item">
          <img src="/images/size.png" alt="the image for the size item" />
          <span>{hotel.size} sqft</span>
      </div>
      <div className="size_item">
          <img src="/images/bed.png" alt="the image for the size item" />
          <span>{hotel.bed_num} beds</span>
      </div>
     <div className="size_item">
        <img src="/images/bath.png" alt="the image for the size item" />
       <span>{hotel.bathroom} bathroom</span>
     </div>
     </div>
    </div>


          <div className="Nearby_places">
            <p className="title">Nearby Places</p>
            <div className="listHersiontal">
              <div className="listItem">
                <img src="/images/school.png" alt="the image for the list item" />
                <div className="text">
                <span className='item_name'>Museums</span>
                <span className='item_desc'>{hotel.musuem_dest}m Away</span>
                  </div>
              </div>

              <div className="listItem">
                <img src="/images/bus.png" alt="the image for the list item" />
                <div className="text">
                <span className='item_name'>Bus Stop</span>
                <span className='item_desc'>{hotel.stations_dest}m Away</span>
                </div>
              </div>

              
              <div className="listItem">
                <img src="/images/restaurant.png" alt="the image for the list item" />
                <div className="text">
                <span className='item_name'>Restaurant</span>
                <span className='item_desc'>{hotel.resturant_dest}m Away</span>
                  </div>
              </div>
            </div>
          </div>

          <div className="location">
            <Map className='map_location'  items={[hotel]}  position ={[hotel.latitude , hotel.longitude]}/>
           
          </div>

          <div className="buttons">
            <div className="button_sp">
              <img src="/images/chat.png" alt="the chat image for the buttons" />
              <span>Send a message</span>
            </div>
            <div className="button_sp">
            <img src="/images/save.png" alt="the chat image for the buttons" />
              <span>Save the place</span>
            </div>
          </div>

        </div>
        </div>
    </div></>
  )
}

export default SinglePage