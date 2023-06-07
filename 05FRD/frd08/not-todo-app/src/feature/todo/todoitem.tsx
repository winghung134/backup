import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { deleteItemDB } from "./todoAPI";

export type Item = {
  id: number;
  name: string;
  count: number;
  complete: boolean;
  // description: string;
  onRemove: () => void;
  addCount: () => void;
  reduceCount: () => void;
  onRename:()=>void;
  onComplete: () => void;
};

export function TodoItem(props: Item) {
  
const navigate = useNavigate();
  return (
    <div>
      <div>
        <p>Id: {props.id}</p>
        <p>Name: {props.name}</p>
        <p>Count: {props.count}</p>
        <p>Complete:{props.complete ? <>true</> : <>false</>}</p>
        {/* <p>Description: {props.description}</p> */}
      </div>
      <p>
        <button onClick={()=>{props.onRename();console.log("test")}}>rename</button>
        <button onClick={props.onRemove}>remove</button>
        <button onClick={() => props.onComplete()}>complete</button>
        <button onClick={() => props.addCount()}>add item count</button>
        <button onClick={() => props.reduceCount()}>reduce item count</button>
        <button onClick={() => navigate(`/item/${props.id}`)}>
          Item Detail
        </button>
      </p>
    </div>
  );
}
