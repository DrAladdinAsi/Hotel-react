import React, { useEffect, useState } from 'react'
import './listPage.scss'
import './filter.scss'
import Card from '../../components/card/Card'

import Map from '../../components/map/Map'
import axios from 'axios'
import { IoSearchOutline } from 'react-icons/io5'


function ListPage() {
  
  const [hotels, setHotels] = useState([]);
  const [inputValue,setInputValue] = useState('')
  const [result,setResult]=useState([])
  const [filter,setFilter]=useState({
    H_type:"",
    stations_dest:"",
    price:"",
    bed_num:""
  })

  const [searchButtonColored,setSearchButtonColored] = useState(false)

useEffect(()=>{
  const handelCheckFilter = ()=>{
    if(filter.H_type === "" && filter.stations_dest === "" 
      && filter.price === "" && filter.bed_num === "" ){
      console.log("they all are empty");
      setSearchButtonColored(false);
    }
      else{
        console.log("they  are not empty");
        setSearchButtonColored(true);
      }
   }

   handelCheckFilter()
},[filter])




  useEffect(() => {
       const getData =async ()=>{


        try{
            const response = await axios.get('https://django-ten-sable.vercel.app/hotels/')
            setHotels(response.data)
            console.log("the fsdfsf",hotels)
          }
          catch(error){   

               }
    }

    getData()
  }, []);

  useEffect(() => {
    const getSearch =async ()=>{


     try{
         const response = await axios.get(`https://django-ten-sable.vercel.app/hotel_search/?q=${inputValue}`)
         setHotels(response.data)
         console.log("the fsdfsf",result)
       }
       catch(error){   
            }
 }
  getSearch()
  }, [inputValue]);


  // useEffect(()=>{
  //   console.log("the fetched data :",data)
  //   console.log("the searched data :",result)


  // },[hotels,inputValue,filter])

  const data = hotels 
 const handelFilter=async()=>{
  try{
    const response = await axios.post('https://django-ten-sable.vercel.app/filter_hotel_search/',filter)
    setHotels(response.data)
    console.log("the fsdfsf",hotels)
  }
  catch(error){   

       }
  }
 
  return (
    <>
  <div className='listPage_Hotel'>
      <div className="theTextPart_listPage">
        <div className="wrapper">
        <div className='filter_Hotel'>
          <h1 className="filterTitle">Search Results for <b>{inputValue}</b></h1>

          <div className="topOfFilter">
          <div className="item">
           <label htmlFor="city">Location</label>
           <input type='text' name='city' id='city' 
            placeholder='the city' 
            value={inputValue}
            onChange={e=>setInputValue(e.target.value)}
            />
          </div>
        </div>
        <div className="bottomOfFilter">
        <div className="item">
     <label htmlFor="type">Type</label>
     <select name="type" id="type" onChange={(e)=>setFilter(prev => ({...prev,
      H_type:e.target.value
     }))}>
       <option value="">any</option>
       <option value="By Beach">By Beach</option>
       <option value="In The City">In The City</option>
       <option value="CountrySide">CountrySide</option>

     </select>
   </div>

   

   <div className="item">
     <label htmlFor="min_price">Station destance</label>
     <input type='number' name='Station destance' id='Station destance' placeholder='max destance'
     onChange={(e)=>setFilter(prev => ({...prev,
      stations_dest:Number(e.target.value)
     }))}/>
   </div>

   <div className="item">
     <label htmlFor="max_price">Max price</label>
     <input type='number' name='max_price' id='max_price' placeholder='any'
     onChange={(e)=>setFilter(prev => ({...prev,
      price:Number(e.target.value)
     }))}/>
   </div>

   <div className="item">
     <label htmlFor="bedroom">Bedroom</label>
     <input type='text' name='bedroom' id='bedroom' placeholder='any'
     onChange={(e)=>setFilter(prev => ({...prev,
      bed_num:Number(e.target.value)
     }))}/>
   </div>

   <button onClick={handelFilter} className={ searchButtonColored ? 'search_icon12 filter_button_search button_colored_active' : 'search_icon12 filter_button_search'}>
     <IoSearchOutline className='filter_button_search_icon' />
   </button>
 </div>
</div>

          {
            hotels.map((item,index) => (
                <Card item={item} key={index} />
            ))
          }
        
        </div>
      </div>
      <div className="theMapPart_listPage">
     <Map className='map' items={hotels} position={[51.505, -0.09]} />
      </div>
    </div>
    </>
    
  )
}

export default ListPage

