import React from 'react'
import  './List.css'
import Card from './Card'

function List({state}) {
  console.log(state)
  return (
    <div className='list'>
      {state.map((item, index) => (
        <Card 
        item = {item}
          key = {index}
          id = {item .id}
          author = {item .author} 
          title = {item.title}  
          genre = {item.genre}
          summary = {item.summary}     
        
        
        />
      ))}
      
      




    </div>
  )
}

export default List
