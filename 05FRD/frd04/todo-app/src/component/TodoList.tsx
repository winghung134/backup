import React, { useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./Todo.module.scss";
import Button from "react-bootstrap/Button";
import { IRootState, addItemAction } from "../store";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { AppDispatch} from "../store";
import { useDispatch, useSelector } from "react-redux";


export default function TodoList() {
  const itemlist = useSelector((state:IRootState)=>state.todoItems)
  const owner = useSelector((state:IRootState)=>state.username)

  const [input, setInput] = useState<string>("");
 
  const dispatch = useDispatch<AppDispatch>()
 
  // const [newTCount, setNewTCount] = useState(0);

  // event handler
  const setText = (value: string) => {
    setInput(value);
  };

  const addItem = () => {
   console.log(input);   
dispatch(addItemAction(input))
    };


  const deleteItem = (target: number) => {
  };
  return (
    <div className={styles.todoList}>
      <h1>TodoList</h1>
      <p>by {owner}</p>

      <input onChange={(e) => setText(e.target.value)}></input>
      <Button variant="success" onClick={addItem}>
        Add
      </Button>

      {/* return each todo items if items length is greater than 0 ,else should display No Todo Items */}

      {/*  condition ? true:false */}
      {itemlist.length ? (
        <>
          <ListGroup>
            {itemlist.map((item) => (
              <ListGroupItem key={item.id}>
                <TodoItem
                  item={item}
                  onRemove={() => deleteItem(item.id)}
                />
              </ListGroupItem>
            ))}
          </ListGroup>
          {/* <h2>New Task Count {newTCount}</h2> */}
          <h2>
            Completed Count{" "}
            {itemlist.reduce((acc, elem) => {
              if (elem.count > 0) return acc + 1;
              else return acc;
            }, 0)}
          </h2>
        </>
      ) : (
        <h1>No Todo Items</h1>
      )}
    </div>
  );
}
