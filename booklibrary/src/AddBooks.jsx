import axios from 'axios'
import React, { useState } from 'react'
import './AddBooks.css'
function AddBooks() {
const[title, setTitle] = useState("")
const[author, setAuthor] = useState("")
const[genre, setGenre] = useState("")
const[summary, setSummary] = useState("")

 const addBook =() =>{
   let formJSON = {
     title: title,
     author: author,
     genre: genre,
     summary: summary
   }
  const url = "http://localhost:3000/books"
  
  axios.post (url, formJSON).then((res) => console.log(res)).catch(err =>err)

 }
  return (
    <div className='addbooks'>
        <h1>AddBooks</h1>
      <form>
         <label className='addBooks-label'>Title: </label>
         <br/>
         <input 
         value={title}
         onChange= {e => setTitle (e.target.value)}
         type="text" 
         className="addBooks-input" />
          <br/>
         <label className='addBooks-label'>Author: </label>
         <br/>
         <input value={author}
         onChange= {e => setAuthor (e.target.value)}
         type="text"
          className="addBooks-input" />
           <br/>
         <label className='addBooks-label'>Genre: </label>
         <br/>
         <input
         value={genre}
         onChange= {e => setGenre (e.target.value)}
        type="text" 
        className="addBooks-input" />
          <br/>
         <label className='addBooks-label'>Summary: </label>
         <br/>
         <input 
         value={summary}
         onChange= {e => setSummary (e.target.value)}
         type="text" 
         className="addBooks-input" />
         <br/>
         <button onClick={addBook} type= 'submit' className='addBook-button '> AddBook</button>
          </form>
    </div>
  )

}

export default AddBooks
