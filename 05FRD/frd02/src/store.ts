import { configureStore } from "@reduxjs/toolkit";


export interface IRootState{
  username:string,
  todoItems:Array<string>
    Itemtype:{id:number,item:string}
    ItemProps:{i:{id:number,item:string},delete:()=>void}
    ListProps:{name:string,item:Array<{id:number,item:string}>}

}

const initState:IRootState={
    username: "user1",
    todoItems: ['test1','test2','test3'],
    Itemtype: {
        id: 0,
        item: ""
    },
    ItemProps: {
        i: {
            id: 0,
            item: ""
        },
        delete: function (): void {
            throw new Error("Function not implemented.");
        }
    },
    ListProps: {
        name: "user1",
        item: []
    }
}

const rootReducer =(state:IRootState = initState)=>
{return state}


export const store = configureStore({reducer:rootReducer})