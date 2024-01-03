import axios from "axios";
import React, { useEffect,useState } from "react";
import "./Dashboard.css"
const Dashboard=()=>{
    const [data,setData] = useState([])
    useEffect(()=>{
     
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res)=>{setData(res.data);
              console.log(res.data)    
          })
            .catch((err)=>console.log(err))
      
      },[])
  
    return(
        <div className="container" >
            <h1>Dashboard</h1>
                        <table className="tableContainer">
                           <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>UserName</th>
                                    <th>Email</th>
                                    <th>City</th>
                                    <th>street</th>
                                    <th>Phone</th>
                                    <th>website</th>
                                    <th>CompanyName</th>
                                </tr>
                           </thead>
                           <tbody>
                           {data.map((item,index)=>{
                            return(
                                <>
                                  <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>     
                                    <td>{item.address.city}</td> 
                                    <td>{item.address.street}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.website}</td>
                                    <td>{item.company.name}</td>
                                </tr>  
                                </>
                            )})}
                           </tbody>
                        </table>
                
              

        </div>
    )
}
export default Dashboard