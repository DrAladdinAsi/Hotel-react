import React from 'react'
import './list.scss'
import Card from '../card/Card'
import {listData} from '../../lib/dummydata'


function List() {
  return (
    <div className='list_Hotel'>
      
        {
            listData.map(item => (  <Card item={item}/>))
        }
    
    </div>
  )
}

export default List