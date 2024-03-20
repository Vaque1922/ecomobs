import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cart:[],
    search_arr:[],
    amt:0,
    inOut:false,
    reg:"",
}

const productSlice=createSlice({
    name:"addtocart",
    initialState:initialState,
    reducers:{
        addToCart:(state,action)=>{
            let myAdd=state.cart.filter(key=>key.id==action.payload.id);
            if(myAdd.length>=1)
            {
                alert("Already Added!!!");
            }
            else
            {
               state.cart.push(action.payload);
               for(var i=0;i<state.cart.length;i++)
               {
                if(state.cart.id==action.id)
                {
                    state.cart[i].added=true;
                    console.log(state.cart[i].added)
                }
               }
               
            }
            
        },
        addQuantity:(state,action)=>{
           
            for(var i=0;i<state.cart.length;i++)
            {
                if(state.cart[i].id==action.payload)
                {
                    state.cart[i].quantity++;
                }
            }
        },
        removeQuantity:(state,action)=>{

            
            for(var i=0;i<state.cart.length;i++)
            {
                if(state.cart[i].id==action.payload)
                {
                    if(state.cart[i].quantity>1)
                    {
                    state.cart[i].quantity--;
                    }
                    else
                    {
                        alert("Can't Remove");
                    }
                }
            }
        
        },
        rmv_addedItem:(state,action)=>
        {
            
             state.cart=state.cart.filter((key)=>key.id!=action.payload);
        },
        netAmt:(state,action)=>
        {
            state.amt=action.payload;
        },
        emtyItem:(state)=>
        {
            state.cart=[];
        },
        register:(state)=>
        {
             state.inOut=true;
        },
        myReg:(state,action)=>
        {
            state.reg=action.payload;
            state.inOut=false;

        },
        login:(state)=>
        {
             state.inOut=false;
        }
    }

});

export const {addToCart,addQuantity,removeQuantity,rmv_addedItem,netAmt,emtyItem,register,myReg,login}=productSlice.actions;
export default productSlice.reducer;