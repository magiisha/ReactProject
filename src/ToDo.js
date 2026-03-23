import {useState} from 'react'
import { FaTrashAlt } from "react-icons/fa";

function ToDo() {
    const [data,setData]=useState([
        {
            id:1,
            topic:"html",
            status:true
        },
        {
            id:2,
            topic:"CSS",
            status:true
        },
        {
            id:3,
            topic:"JS",
            status:false
        },
        {
            id:4,
            topic:"REACT",
            status:true
        },
        {
            id:5,
            topic:"MONGO DB",
            status:false
        }
    ]);
    function handlechange(id){
        let list=data.map((obj) => 
            obj.id===id
        ?{...obj,status:!obj.status}
        :obj
        );
        setData(list);
    }
    function handleDelete(id){
        let list=data.filter((obj)=> obj.id!==id);
        setData(list);
    }
  return (
    <div>
        <h1>ToDo</h1>
        <ul>
            {
                data.map((obj)=>(
                <li key={obj.id}>
                    <h1>{obj.topic}</h1>
                    <input type='checkbox'
                    checked={obj.status}
                    onChange={()=>handlechange(obj.id)}
                    />
                    <button onClick={()=> handleDelete(obj.id)} >DELETE</button>
                    <FaTrashAlt />
                </li>
                )
                )
            }
        </ul>
    </div>
  );
}

export default ToDo;