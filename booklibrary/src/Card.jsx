import axios from 'axios'
import React from 'react'
import './Card.css'
function Card({id,author,genre, summary,title}) {
  


const updateBook = () =>{
  const url = `http://localhost:3000/books/${id}`
  axios.put(url, {title:"Adil"}).then((res) => console.log(res))
  window.location.reload()
  
}
const deleteBook = () =>{
  const url = `http://localhost:3000/books/${id}` //here use backticks instead of "" to get particular id
  axios.delete(url).then((res) => console.log(res))
  window.location.reload()
}



  return (
    <div className='card'>
       <h4 className='card-title'>{title}</h4>
       <div className='card-description'>
       <p>{author}</p>
       <p>{genre} </p>
       </div>
        <p className='card-summary'>{summary}</p>
        <div className='card-buttons'>
            <button   onClick={updateBook} className='buttonedit'>Edit</button>
            <button  onClick={deleteBook} className='buttondelete'> Delete</button>
            
            </div>


    </div>
  )
}

export default Card
