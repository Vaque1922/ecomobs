

const Lgwelcome=(props)=>
{
   return(
   <>

<div className="main">
            <div className="signin">
            <h1 className="lgwelcome">
        Welcome 
     </h1>
     <h1 className="lgusername">
         {props.nm}
     </h1>
            </div>
        </div>
   </>
   );
}

export default Lgwelcome;