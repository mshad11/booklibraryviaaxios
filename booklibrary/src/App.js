
import './App.css';
import List from './List';
import Navbar from './Navbar';
import AddBooks from './AddBooks';
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  const [state, setState] =useState([])
  ;
  useEffect(() => {
    getBooks()
    
  },[])
const getBooks = async () =>{
  const url = "http://localhost:3000/books"
  await axios.get(url).then((result) => setState(result.data))

}






  return (
    <div className="app">
     <Navbar/>
     <div className='app-body'>
     <List state = {state}/>
     <AddBooks/>
       </div>
    






    </div>
  );
}

export default App;
