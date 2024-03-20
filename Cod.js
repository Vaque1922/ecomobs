
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cod=()=>
{
    const netAmt=useSelector((state)=>state.addtocart.amt);
    const nav=useNavigate();
      const handleSubmit=()=>
      {
        nav("/paymentdone");
      }
    return(
        <>
        <h1 className="upi_h1">CASH ON DELIVERY</h1>
        <h2 className="amt_h1">AMOUNT:₹{netAmt}</h2>
        <div className="upi_form">
        <button onClick={handleSubmit}>Buy</button>
        </div>
        </>
    );
}

export default Cod;