import { useState } from "react";
import { AppDispatch } from "../../store/store";

import { useDispatch } from "react-redux";
import { addItemDB, deleteItemDB, renameItemDB, useFetched } from "./todoAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Item, TodoItem } from "./todoitem";

export function List() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [newname, setNewName] = useState("");
  const [resp, setNewstate] = useState("");
  const fetchlist = useFetched();
  const queryClient = useQueryClient();
  
  const testdeleteitem = useMutation(
    async (data: { id: number }) => 
     {deleteItemDB(data.id);
      console.log("check id",data.id)},
    { 
      onSuccess: () => queryClient.invalidateQueries(["todoItems"]) 
    }
  );
  
  const dispatch = useDispatch<AppDispatch>();

  // let list = useSelector((state: IRootState) => state.todo.todo);
  const testaddItem = useMutation(
    async (data: { name: string; description: string }) =>
      addItemDB(data.name, data.description),
    {
      onSuccess: () => queryClient.invalidateQueries(["todoItems"]),
    }
  );
const renameitem = useMutation(
  async(data:{id:number,name:string})=>
  renameItemDB(data.id,data.name),
  {
    onSuccess:()=>queryClient.invalidateQueries(["todoItems"])
  }
  )
  console.log("hi1", fetchlist);
  // const testrename = useMutation(async(data:{})=>,{onSuccess:()=>queryClient.invalidateQueries(["todoItems"])})

  // const handleformsubmit =(e:FormEvent)=>{
  //   e.preventDefault()
  //   addItem.mutate({name,description})
  // }

  return (
    <>
      <>List Option:</>
      {/* <form onSubmit={(e)=>handleformsubmit(e)}> */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
      />
      <button
        onClick={() => {
          testaddItem.mutate({ name, description });
          console.log("check input", name, description);
        }}
      >
        Add item
      </button>
      {/* </form> */}
      <>{resp}</>

      <p>
        ReName:
        <br />
        <input
          placeholder="rename here"
          onChange={(e) => setNewName(e.target.value)}
        />
      </p>
      <>
        {fetchlist ? (
          fetchlist.map((item: any) => (
            <div key={item.id}>
              <TodoItem
                key={item.id}
                id={item.id}
                name={item.name}
                complete={item.complete}
                count={item.count}
                // description={item.description}
                onComplete={() => {}}
                onRemove={()=>testdeleteitem.mutate({id:item.id})}
                onRename={() =>renameitem.mutate({id:item.id,name:newname})}
                addCount={() => {}}
                reduceCount={() => {}}
              />
            </div>
          ))
        ) : (
          <>loading</>
        )}
      </>
    </>
  );
}
