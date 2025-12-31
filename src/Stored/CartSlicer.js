import {createSlice } from "@reduxjs/toolkit"

const cart=createSlice (
    {
        name:'cartslice',
        initialState:{
            items:[],//store multiple object in array form
            count:0,
        },  
        reducers:{
            additems:(state,action)=>{
              state.items.push({...action.payload,quantity:1})
              state.count++  
            },
            IncrementItems:(state,action)=>{
              const element=  state.items.find(item=>item.id===action.payload.id) ; 
              element.quantity+=1;
              state.count++ 
            },
            DecrementItems:(state,action)=>{
                const element=  state.items.find(item=>item.id===action.payload.id) ;
                if (element.quantity>1){
                    element.quantity-=1;
                    
                } 
                else{
                    state.items=state.items.filter(item=> item.id!=action.payload.id);
                }
               state.count--
            }
        }
    }
)
export const{additems,IncrementItems,DecrementItems}=cart.actions
export default cart.reducer