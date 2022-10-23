import {useEffect,useState} from 'react'
import axios from 'axios'

export default function useHandleData(search){
    const API_URL = 'https://6354df91da523ceadcf562bd.mockapi.io'
    const [todo,setTodo]=useState([])
    const [loading,setLoading]=useState(true)

    const handleAPI = async ()=>{
        setLoading(true)
        const queryParams = new URLSearchParams({
          search: search
        })
    
        const todoData = await axios.get(`${API_URL}/todo`, {
          params: queryParams
        })
    
        setTodo(todoData.data)
        setLoading(false)
      }
    
      useEffect(()=>{
       const handleTimeCallApi = setTimeout(handleAPI,600)
       return ()=>{
        clearTimeout(handleTimeCallApi)
       }
    
      },[API_URL, search])
    
      const handleDelete = async (element)=>{
        await axios.delete(`${API_URL}/todo/${element.id}`)
        handleAPI()
      }

    return [
        todo,
        loading,
        handleDelete
    ]
}