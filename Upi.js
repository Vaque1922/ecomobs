
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Upi=()=>
{
  const netAmt=useSelector((state)=>state.addtocart.amt);
  const nav=useNavigate();
  const [inpData,setInp]=useState({
    upi_id:'',
    otp:''
  });

  const handleInput=(e)=>
  {
    let name=e.target.name;
    let value=e.target.value;
    setInp(values=>({...values,[name]:value}));
  }

  const handleSubmit=()=>
  {
    console.log(inpData);
    nav("/paymentdone");
  }

    return(
        <>
        <h1 className="upi_h1">UPI</h1>
        <h2 className="amt_h1">AMOUNT:₹{netAmt}</h2>
        <div className="upi_form">
        <input type="text" placeholder="UPI ID" value={inpData.upi_id} name="upi_id" onChange={handleInput}></input><br></br>
        <input type="text" placeholder="OTP" value={inpData.otp} name="otp" onChange={handleInput}></input>
        <button onClick={handleSubmit}>Buy</button>
        </div>
        </>
    );
}

export default Upi;