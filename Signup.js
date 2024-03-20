import { login } from "./productSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { myReg } from "./productSlice";
const Signup=()=>
{
    const dis=useDispatch();
    const [myData,setMydata]=useState({});
    const handleInput=(e)=>
    {
        let name=e.target.name;
        let value=e.target.value;
        setMydata(values=>({...values,[name]:value}));
        console.log(myData);
    }
    return(
        <>
         <div className="main">
            <div className="signin">
            <h1 className="log_in">Register</h1>
            <label for="user_name">Create Username<br></br><input id="user_name" value={myData.name} name="name" type="text" placeholder="Type username" onChange={handleInput} required></input></label>
            <label for="user_pass">Create password<br></br><input id="user_pass" value={myData.password} name="password" type="password" placeholder="Type password" onChange={handleInput} required></input></label>
            <button className="login_button" onClick={()=>{dis(myReg(myData.name))}}>Register</button>
            <span className="or">Or</span>
            <div className="dont_have_acc">Already have account? <p onClick={()=>{dis(login())}}>Login</p></div>
            </div>
        </div>
        </>
    );
}

export default Signup;