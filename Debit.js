
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Debit=()=>
{
    const netAmt=useSelector((state)=>state.addtocart.amt);
    const nav=useNavigate();
    const [inpData,setInp]=useState({
        card_nm:'',
        cvv:''
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
        <h1 className="upi_h1">DEBIT CARD</h1>
        <h2 className="amt_h1">AMOUNT:₹{netAmt}</h2>
        <div className="upi_form">
        <input type="text" placeholder="CARD NUMBER" value={inpData.card_nm} name="card_nm" onChange={handleInput} required></input><br></br>
        <input type="text" placeholder="CVV"  value={inpData.cvv} name="cvv" onChange={handleInput} required></input>
        <button onClick={handleSubmit}>Buy</button>
        </div>
        </>
    );
}

export default Debit;