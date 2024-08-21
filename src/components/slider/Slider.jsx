import React, { useState } from 'react'
import './slider.scss'

function Slider({images}) {
    const [imageIndex , setImageIndex]= useState(null)

    const clickArrow = (direction) =>{
        if(direction === 'Left'){
            if(imageIndex === 0){
                setImageIndex(images.length-1)
            }
            else{
                setImageIndex(prev => prev-1)
            }
        }
        else if(direction === 'Right'){
            if(imageIndex === images.length-1){
                setImageIndex(0)
            }
            else{
                setImageIndex(prev => prev+1)
            }
        }
    }

  return (
    <div className='slider'>
      
      {
            imageIndex !== null &&
            
            
            <div className="full_image_slider">
            <div className="arrow">
              <img src="/images/arrow.png" alt="the arrow image" onClick={()=>clickArrow('Left')}/>
            </div>
    
            <div className="full_image">
                <img src={`https://django-ten-sable.vercel.app${images[imageIndex].images}`}  alt="the full image screen" />
            </div>
            
            <div className="arrow">
            <img src="/images/arrow.png" alt="the arrow image" className='right_arrow' onClick={()=>clickArrow('Right')} />
            </div>
    
            <div className="close" onClick={()=>setImageIndex(null)}>
                <span>X</span>
            </div>
          </div>
    
        }
      
     
        <div className="big_image" onClick={()=>setImageIndex(0)}>
            <img src={`https://django-ten-sable.vercel.app${images[0].images}`}  alt="the big image for the slider"  />
        </div>
        <div className="small_images">
            {
                images.slice(1).map((image,index) =>(
                    <img src={`https://django-ten-sable.vercel.app${image.images}`}  alt="the small image"  key={index} onClick={()=>setImageIndex(index+1)} />
                ))
            }
        </div>
    </div>
  )
}

export default Slider