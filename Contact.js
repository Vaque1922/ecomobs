import { useState } from "react";

const Contact=()=>{

    const [val,setVal]=useState("");
    return(
        <>
        <div className="main">
            <div className="main_contact">
                <div className="contact">
                    <h1>Contact Us</h1>
                    <p>Need to get in touch with us?Either fill out the form with your inquiry or e-mail us:</p>
                    <h3>E-mail: ecomob@email.com Contact: +91 9131XXXXXX</h3>
                </div>
                <div className="contact_form">
                    <form>
                        <label for="first_nm">First Name<br></br><input id="first_nm" value={val} type="text" placeholder="First Name" onChange={(e)=>{setVal(e.target.value)}} required></input></label>
                        <label for="last_nm">Last Name<br></br><input id="last_nm" value={val} type="text" placeholder="Last Name" onChange={(e)=>{setVal(e.target.value)}}  required></input></label>
                        <label for="contact_email">E-mail<br></br><input id="contact_email" value={val} type="text" placeholder="E-mail" onChange={(e)=>{setVal(e.target.value)}}  required></input></label>
                        <label for="contact_msg">Message<br></br><input id="contact_msg" value={val} type="text" placeholder="Message" onChange={(e)=>{setVal(e.target.value)}}  required></input></label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}
export default Contact;