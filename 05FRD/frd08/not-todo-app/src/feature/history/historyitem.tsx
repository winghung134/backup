import { useDispatch } from "react-redux"
import { deleteRecord } from "./historySlice"

type HistoryItem ={
id:number,
name:string,
time:string
}

export function Historyitem(props:HistoryItem){
   const dispatch = useDispatch()
   const handleDelete = (id:number)=>{
    dispatch(deleteRecord(id))
   }
   return(<div><div>
        <div>Id:{props.id}</div>
        <div>Name:{props.name}</div>
        <div>Created:{props.time}</div>
        </div>
        <button onClick={()=>handleDelete(props.id)}>Delete Record</button>
        </div>)
}