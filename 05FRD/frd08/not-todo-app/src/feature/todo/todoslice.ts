import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TodoState = {
  todo: Array<item>;
  id: number;
};

type item = {
  id: number;
  name: string;
  count: number;
  complete:boolean;
  description: string;
};
let local = localStorage.getItem("todoitem");
let initialState: TodoState;
if (!local) {
  initialState = {
    todo: [
      { id: 1, name: "test1",complete:true, count: 0, description: "test" },
      { id: 2, name: "test1",complete:false, count: 0, description: "test" },
    ],
    id: 2,
  };
} else {
  console.log("hi1")
  initialState = JSON.parse(local);
  console.log("hi2")

}

export const todoslice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    Add_item: (
      state,
      action: PayloadAction<{ name: string; description: string }>
    ) => {
      let maxid = 0;
      for (let item of state.todo) {
        if (item.id > maxid) maxid = item.id;
      }
      let newitem: item = {
        id: maxid + 1,
        name: action.payload.name,
        count: 0,
        complete:false,
        description: action.payload.description,
      };
      state.todo.push(newitem);
      window.localStorage.setItem("todoitem", JSON.stringify(state));
      
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload);
      window.localStorage.setItem("todoitem", JSON.stringify(state));
    },
    renameItem: (
      state,
      action: PayloadAction<{ id: number; name: string }>
    ) => {
      let newitem = state.todo.find((item) => item.id === action.payload.id);
      newitem!.name = action.payload.name;
      window.localStorage.setItem("todoitem", JSON.stringify(state));
    },
    addItemCountOne: (state, action: PayloadAction<number>) => {
      for (let item of state.todo) {
        if (item.id === action.payload) {
          item.count += 1;
        }
      }
    },
    reduceItemCount: (state, action: PayloadAction<number>) => {
      for (let item of state.todo) {
        if (item.id === action.payload) {
          item.count -= 1;
        }
      }
    },
    CompleteItem:(state,action:PayloadAction<number>)=>{
for(let item of state.todo){
  if(item.id === action.payload){
    item.complete = true
  }
}
    }
  },
}

);

export const {
  Add_item,
  removeItem,
  renameItem,
  addItemCountOne,
  reduceItemCount,
  CompleteItem
} = todoslice.actions;
export default todoslice.reducer;
