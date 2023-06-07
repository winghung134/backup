import React, { useState } from "react";
import  DeleteModal from "./DeleteModal";
import "bootstrap/dist/css/bootstrap.min.css"; // Add this line
import 'bootstrap-icons/font/bootstrap-icons.css';

export type Itemtype = {
  id:number
  item:string
}

type ItemProps = {
  i: Itemtype;
  delete:()=>void;
  complete:()=>void
};

export default function TodoItem(props:ItemProps) {
  const [count, setCount] = useState<number>(0);
  const onComplete = () => {
    setCount(count + 1);
  };
  const [deletE,setDelete] = useState(false)

  const showModal = ()=>{
    setDelete(true)
  }
  const hideModal = ()=>{
    setDelete(false)
  }
  return (
    <div>
      <span className="btn">Id :{props.i.id}</span>
      <span className="btn">String :{props.i.item}</span>
      <span className="btn">Count :({count})</span>
      <></>
      <button className="btn btn-primary" onClick={()=>{onComplete() ;props.complete()}}><i className="bi bi-check-circle deleted"></i>Complete</button>
    <button className="btn btn-danger" onClick={()=>props.delete()}>Delete</button>
    <button className="btn btn-warning" onClick={showModal}><i className="bi bi-trash3"></i>Safe Delete</button>
    <DeleteModal name={props.i.item} isShown={deletE} onDelete={()=> { props.delete()
    hideModal()
    }} onHide={hideModal}/>
    </div>
  );
}