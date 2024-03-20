import { useSelector } from "react-redux";
import Signup from "./Signup";
import Signin from "./Signin";
import Lgwelcome from "./lgwelcome";

const Login=()=>
{
    
    const lgInOut=useSelector((state)=>state.addtocart.inOut);
    const reg_l=useSelector((state)=>state.addtocart.reg);
    return(
        <>
        <div className="main">
            <div className="login_container">
                {lgInOut?<Signup/>:reg_l==""?<Signin/>:<Lgwelcome nm={reg_l}/>}
            </div>
        </div>
        </>
    );
}

export default Login;