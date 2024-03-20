import { useState} from "react";
import Upi from "./Upi";
import Cod from "./Cod";
import Debit from "./Debit";
import Credit from "./Credit";

const Buynow=()=>{

    const [formData,setformData]=useState({
        fname:'',
        lname:'',
        number:'',
        email:'',
        address:''
    });

    const handleInput=(e)=>
    {
        let name=e.target.name;
        let value=e.target.value;

        setformData(values=>({...values,[name]:value}));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        setformData({
            fname:'',
        lname:'',
        number:'',
        email:'',
        address:''
        })
    }
 
    var myans="";

    const [ptm,setPtm]=useState("");

    const payment_methods_click=(e)=>
    {
       let myval=e.target.value;
       setPtm(myval);
    }
    
     switch(ptm)
     {
        case "cod":
            {
                myans=<Cod/>
                break;
            }
            case "upi":
            {
                myans=<Upi/>
                break;
            }
            case "debit":
            {
                myans=<Debit/>
                break;
            }
            case "credit":
            {
                myans=<Credit/>
                break;
            }
            default:
                {
                    alert("not found");
                }
     }



    return(
        <>
        <div className="main">
        <div className="added_item">
            <h1 data-aos="zoom-out">PAYMENT METHODS</h1>
        </div>
        <div className="form_payment">
          <div className="form">
            <input id="first_name" type="text" value={formData.fname} onChange={handleInput} name="fname" placeholder="First Name" required></input>
            <input id="last_name" type="text" value={formData.lname} onChange={handleInput} name="lname" placeholder="Last Name" required></input><br></br>
            <input id="num_form" type="text" value={formData.number} onChange={handleInput} name="number" placeholder="Number" required></input><br></br>
            <input id="email_form" type="text" value={formData.email} onChange={handleInput} name="email" placeholder="E-mail" required></input><br></br>
            <input id="add_form" type="text" value={formData.address} onChange={handleInput} name="address" placeholder="Address" required></input><br></br>
            <button id="submit_form" onClick={handleSubmit} >Submit</button>
          </div>
          <div className="payment">
            <div className="payment_methods">
            <label for="cod"> <input id="cod" type="radio" name="nm" value="cod" onChange={payment_methods_click}></input>COD</label>
            <label for="upi"> <input id="upi" type="radio" name="nm" value="upi" onChange={payment_methods_click}></input>UPI</label>
            <label for="debit"> <input id="debit" type="radio" name="nm" value="debit" onChange={payment_methods_click}></input>DEBIT CARD</label>
            <label for="credit"> <input id="credit" type="radio" name="nm" value="credit" onChange={payment_methods_click}></input>CREDIT CARD</label>
            {myans}
            </div>
          </div>
        </div>
        </div>
        </>
    );
};

export default Buynow;