import React, { useState } from 'react'
import './searchBar.scss'


function SearchBar() {
  const types  = ['Rent' , 'Buy']
  const [querySearch , setQuerySearch] = useState({
    type:'Rent',
    location:'',
    max_price:0,
    min_price:0,
  })

  const [buttonClick , setButtonClick]  = useState('Rent')

  const chagetheQuery  = (e) =>{
    e.preventDefault();
    console.log('the button',buttonClick)
    setQuerySearch(prev => ({
      ...prev ,
      type:buttonClick,
        
    }))
    console.log('the query:',querySearch)
  }
  return (
    <div className='searchBar'>
      <div className="type">
      {
        types.map(type => (
          <button key={type}  onClick={()=>setButtonClick(type)}  className={ type===buttonClick ? "button active" : "button" }  >{type}</button>
        ))
      }
    </div>
      <form className='the_form'>
        <input type="text" name='location' placeholder='location' onChange={(e)=>setQuerySearch(prev => ( {...prev,location:e.target.value}))} />
        <input type="text" name='max_price' placeholder='max_price' onChange={(e)=>setQuerySearch(prev => ( {...prev,max_price:e.target.value}))}/>
        <input type="text" name='min_price' placeholder='min_price' onChange={(e)=>setQuerySearch(prev => ( {...prev,min_price:e.target.value}))}/>
        <button onClick={(e)=>chagetheQuery(e)}>
          <img src="/images/search.png" alt="the search image for the searchBar" />
        </button>
      </form>
    </div>
  )
}

export default SearchBar