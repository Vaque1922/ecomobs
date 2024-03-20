import { useState } from "react";

const Help=()=>{
    const [val,setVal]=useState("");
    return(
        <>
        <div className="main">
            <div className="help_desk">
              <img src="./image/logo.jpg"></img>
              <h1 className="how_help">How can we help you?</h1>
              <label for="user_name">What are you facing?<br></br><input id="issue" value={val} type="text" placeholder="Type your issue" onChange={(e)=>{setVal(e.target.value)}}  required></input></label>
              <div className="problems">
                <div className="your_account">
                    <h2>Your account</h2>
                    <span>Can't access your account?</span>
                    <span>Transaction issue?</span>
                    <span>Server issue?</span>
                </div>
                <div className="help_communities">
                    <h2>Help Communities</h2>
                    <span>Find more about us</span>
                    <span>Ecomob Expert</span>
                </div>
                <div className="status_dashboard">
                    <h2>Status dashboard</h2>
                    <p>If you're having trouble<br></br> accessing a Ecomob product,<br></br> there's a chance we're currently<br></br> experiencing a temporary problem</p>
                </div>
              </div>
            </div>
        </div>
        </>
    );
}
export default Help;