import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {id:1, title:"buy milk", description:"description", status:false},
    {id:2, title:"study book", description:"description", status:false},
    {id:3, title:"back mite", description:"description", status:false},
    {id:4, title:"progamming react", description:"description", status:false},
]

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        AddItem:(state , action)=>{
            state.push(action.payload)
        },
        DeleteItem:(state, action)=>{
            const index = state.findIndex(todo => todo.id === action.payload);
            state.splice(index,1)
        },
        EditItem:(state ,action)=>{
            const index = state.findIndex(todo=>todo.id===action.payload.id)
            state[index]= action.payload
        },
        CheckItem:(state, action)=>{
            const index = state.findIndex(todo => todo.id===action.payload)
            state[index].status = !state[index].status
        }

    }
});

export  const { AddItem, DeleteItem, EditItem, CheckItem, } = todoSlice.actions;
export default todoSlice.reducer;