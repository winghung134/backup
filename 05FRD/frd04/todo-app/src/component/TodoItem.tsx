import React, { useState } from "react";
import styles from "./Todo.module.scss";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import {  ItemType } from "../store";

type ItemProps = {
  item: ItemType;
  onRemove: () => void;
};

export default function TodoItem(props: ItemProps) {
  const [count,setcount] = useState(0)
  const [showModal, setShowModal] = useState(false);
  
const oncomplete = ()=>{
  setcount(count+1)
}

  return (
    <div>
      <div className={styles.todoItem}>
        <button className="btn btn-primary" onClick={oncomplete}>
          Complete
        </button>
        <button className="btn btn-danger" onClick={() => setShowModal(true)}>
          Remove
        </button>
        <span className={styles.label}>
          {props.item.id} {props.item.name}
        </span>
        <span className={styles.count}>{count}</span>
        <div>Last Render Time is: {new Date().toLocaleTimeString()}</div>
      </div>
      <DeleteConfirmationModal
        name={props.item.name}
        isShow={showModal}
        onHide={() => setShowModal(false)}
        onDelete={props.onRemove}
      />
    </div>
  );
}
