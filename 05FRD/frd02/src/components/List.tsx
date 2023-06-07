// full code of TodoList.tsx
import React, { useState } from "react";
import TodoItem from "./Todoitem";
import { Itemtype } from "./Todoitem";
import "bootstrap/dist/css/bootstrap.min.css"; // Add this line
import 'bootstrap-icons/font/bootstrap-icons.css';
import { IRootState } from "../store";
import { useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "react-bootstrap";

type ListProps = {
  name: string;
  items: Array<Itemtype>;
};

export default function TodoList() {
  const todoItems = useSelector((state: IRootState) => state.ListProps);
    const [itemList, setItemList] = useState(todoItems.item);
  const [input, setInput] = useState<string>("");
  const [newtaskcount,setnewtaskcount] = useState<number>(0)
  const[completetasks,setcomplete] = useState(0)
  const addItem = () => {
    const id =Math.max(0,...itemList.map((item)=>{return item.id}));
    const neitem = {
      id:id+1,
      item:input,
    }
    setnewtaskcount(newtaskcount+1)
    setItemList([...itemList, neitem]
      );
  };
  const setText = (value: string) => {
    setInput(value);
  };
  const removeItem = (target: number) => {
    setnewtaskcount(newtaskcount-1)
    setItemList(itemList.filter((item) => item.id !== target));
  };

  return (
      <div>
      --------Start of list -------
      <h2>Todo List</h2>
      <p>by {todoItems.name}</p>

      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={addItem}>Add</button>
     {/* // different page */}
     <div>
         <ListGroup><ListGroupItem>{itemList.map((item) => (
        <TodoItem i={item} delete={()=>{
          removeItem(item.id)}
          }
          complete={()=>setcomplete(completetasks+1)}
          />))}
          </ListGroupItem>
   
          <ListGroupItem><div>New task:{newtaskcount}</div><div>Total task completed:{completetasks}</div></ListGroupItem>
    -----End of list ------</ListGroup>
    </div>   
    </div>
  );
}