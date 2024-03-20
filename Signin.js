import { useDispatch} from "react-redux";
import { register,myReg } from "./productSlice";
import { useState } from "react";
const Signin=()=>
{
    const dis=useDispatch();
    const [myData,setMydata]=useState({name:"",password:""});
    const [nm,setName]=useState("");
    const [pass,setPass]=useState("");

    const handleName = (e) => {
        const newName = e.target.value;
        setName(newName);
        setMydata(prevData => ({ ...prevData, name: newName }));
      }
      
      const handlePassword = (e) => {
        const newPassword = e.target.value;
        setPass(newPassword);
        setMydata(prevData => ({ ...prevData, password: newPassword }));
      }
      
    const handleLogin=()=>
    {
        if(myData.name=="")
        {
            alert("Please enter username");
        }
        else if(myData.password=="")
        {
            alert("Please enter password");
        }
        else 
        {
           dis(myReg(nm)); 
        }
    }
    return(
        <>
        <div className="main">
            <div className="signin">
            <h1 className="log_in">Login</h1>
            <label for="user_name">Username<br></br><input id="user_name" value={nm} name="name" type="text" placeholder="Type username" onChange={handleName} required></input></label>
            <label for="user_pass">Password<br></br><input id="user_pass" value={pass} name="password" type="password" placeholder="Type password" onChange={handlePassword} required></input></label>
            <button className="login_button" onClick={handleLogin}>Login</button>
            <span className="or">Or</span>
            <div className="dont_have_acc">Do not have account? <p onClick={()=>{dis(register())}}>Register</p></div>
            </div>
        </div>
        </>
    );
}

export default Signin;