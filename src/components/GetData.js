import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './../css/style.css'
import './../less/style.less'


 function GetData() {
    const [data,setData] = useState([]);

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res.data)
            setData(res.data)
        }).catch(err => console.log(err))
    },[]);

    const array = data.map((data,index) =>{
        return(
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.email}</td>
    </tr>
 
        )
    })

  return (
    <div class="container">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
  {array}
  </tbody>
</table>
</div>
  )
}
export default GetData;