import { configureStore } from "@reduxjs/toolkit";

export type ItemType = {
  id: number;
  name: string;
  count: number;
};

export interface IRootState {
  todoItems: Array<ItemType>;
  username: string;
  isAuth: boolean|undefined;
  login:string,
}


export function addItemAction(item: string) {
  return { type: "TODO/ADD"as const, item };
}

export function loginAction(username:string){
return {type:"AUTH/LOGIN"as const ,username,
}
}

export function loginupdateAction(input:string){
  return {type:"AUTH/UPDATE" as const ,input}
}

type IRootAction = ReturnType<typeof addItemAction> |ReturnType<typeof loginAction> |ReturnType<typeof loginupdateAction>
const initState: IRootState = {
  todoItems: [
    { id: 1, name: "Buy milk", count: 0 },
    { id: 2, name: "Buy banana", count: 0 },
    { id: 3, name: "Buy cherry", count: 0 },
  ],
  username: "user1",
  isAuth: false,
  login:""
};
// Step 2: Reducer
const rootReducer = (
  state: IRootState = initState,
  action: IRootAction
): IRootState => {
  switch (action.type) {
    case "TODO/ADD":
      const item = action.item;
      const newitem = state.todoItems.slice();
      newitem.push({ id: 1, name: item, count: 0 });
      return { ...state, todoItems: newitem };

    case "AUTH/LOGIN":
          return{
            ...state,isAuth:true,username:action.username
          }
    case"AUTH/UPDATE":
    return{
      ...state,login:action.input
    }
      default:
        return state;      

      }
  };

// Step 3: createStore
export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
