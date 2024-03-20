import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { emtyItem } from "./productSlice";
const PaymentDone=()=>
{
    const [isLoading,setIsloading]=useState(true);
    const dispatch=useDispatch();
    useEffect(()=>
    {
       setTimeout(()=>{
        setIsloading(false);
        dispatch(emtyItem());
       },1500)
    },[]);
   return(<>

         {isLoading?
         <div className="payment_process">
           <h1>Loading....</h1>
         </div>:
         <div className="payment_done">
              <h1>Thanks for Shopping</h1><br></br>
              <h2>We will deliver your product within 3 to 5 days</h2>
            </div>}
         </>);
}

export default PaymentDone;