import React from 'react'
import './homePage.scss'
import SearchBar from '../../components/searchBar/SearchBar'

function HomePage() {
  return (
    <div className='homePage'>
        <div className="homePage_textContainer">
          <div className="wrapper">
            <h1 className="title">The Real Estate website to find the best real offer here in our website</h1>
            <p>Our website , is the best website in the world here you can find what you want beginenig from
              renting to the buying finshing with anything else than that 
            </p>
            <SearchBar/>
            
            <div className="boxes">
              <div className="box">
                <span className='mainTxt_box'>16+</span>
                <span className='subTxt_box'>Years of Experience</span>
              </div>

              <div className="box">
                <span className='mainTxt_box'>200</span>
                <span className='subTxt_box'>Awards to our products</span>
              </div>

              <div className="box">
                <span className='mainTxt_box'>2000+</span>
                <span className='subTxt_box'>Employees in our company</span>
              </div>
            </div>
          </div>
        </div>
        <div className="homePage_imageContainer">
          <img src="/images/bg.png" alt="the image for the home page" />
        </div>
    </div>
  )
}

export default HomePage