import { Axios } from 'axios';
import React, { useState } from 'react'

export default function PostForm() {
    const url = ""
    const [data,setData] = useState({
        name:"",
        date:"",
        iduser:""
    })
    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            name:data.name,
            date:data.date,
            iduser:data.iduser
        }).then(res=>{
            console.log(res.data)
        })
    }
    function handel(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input onChange={(e) => handel(e)} id="name" value={data.name} placeholder='name' type="text" />
        <input onChange={(e) => handel(e)} id="date" value={data.date} placeholder='date' type="date" />
        <input onChange={(e) => handel(e)} id="iduser" value={data.iduser} placeholder='number' type="iduser" />
        <button>Submit</button>
      </form>
    </div>
  )
}
