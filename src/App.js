import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react'
import axios from 'axios'
import Add from './components/Add/Add';
import useHandleData from './Hooks/useHandleData/useHandleData';


function App() {
  const [search,setSearch] = useState('')
  const [todo,loading,handleDelete]= useHandleData(search)
  
  return (
    <div className="App">
      <img src='./images/2.jpg'/>
      {/* <img src={`${process.env.PUBLIC_URL}/images/2.jpg}`}/> */}<br />
      <input value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      <Add todo={todo} 
      handleDelete={handleDelete}
      loading={loading}
      />
    </div>
  );
}

export default App;
