import { Link,Outlet } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Layout=()=>{
    useEffect(()=>{
        Aos.init({duration:1000});
    },[])

    // ==============================================================hooks=======================================================//
    const myCart=useSelector((state)=>state.addtocart.cart);

    const product_added=myCart.length;
    return(
        <>
        <div id="navbar">
            <ul>
                <li id="logo"><img src="./image/logo.jpg" alt="not found"></img></li>
                <li><Link className="nav_link" to="home">Home</Link></li>
                <li><Link className="nav_link" to="cart">Shop</Link></li>
                <li><Link className="nav_link" to="search">Search</Link></li>
                <li><Link className="nav_link" to="help">Help</Link></li>
                <li><Link className="nav_link" to="contact">Contact</Link></li>
                <li><Link className="cart" to="cart"><img id="cartimg" src="./image/cart-add-regular-24.png" alt="not found"></img>Cart</Link></li>
                {product_added===0?"":<span className="counter_add">{product_added}</span>}
                <li><Link className="login" to="login">Login or Register</Link></li>
            </ul>
        </div>
        <div id="nav_img">
            <img src="./image/icons8-three-dots-50.png" alt="not found"></img>
        </div>
        <div id="middle"><Outlet/></div>
        <div id="footer">
           <div id="foot1">
            <div className="foot1a">
                <h3>Support</h3>
                <span className="foot1a_span"><Link className="foot1a_link" to="help_support">Help Support</Link></span>
                <span className="foot1a_span"><Link className="foot1a_link" to="ecomob_pvt_ltd">Ecomob Pvt. Ltd.</Link></span>
                <span className="foot1a_span"><Link className="foot1a_link" to="payments">Payments</Link></span>
                <span className="foot1a_span"><Link className="foot1a_link" to="cancellation">Cancellation</Link></span>
                <span className="foot1a_span"><Link className="foot1a_link" to="report">Report</Link></span>
                <span className="foot1a_span"><Link className="foot1a_link" to="order_related">Order Related</Link></span>
            </div>
            <div className="foot1a">
            <h3>Hosting</h3>
                <span><Link className="foot1a_link" to="ecomob_home">Ecomob Home</Link></span><br></br>
                <span><Link className="foot1a_link" to="ecomob_hosts">Ecomob for hosts</Link></span><br></br>
                <span><Link className="foot1a_link" to="community_form">Community Form</Link></span><br></br>
                <span><Link className="foot1a_link" to="hosting_replies">Hosting Replies</Link></span><br></br>
                <span><Link className="foot1a_link" to="comments">Comments</Link></span><br></br>
                <span><Link className="foot1a_link" to="reviews">Reviews</Link></span><br></br> 
            </div>
            <div className="foot1a">
            <h3>Ecomob</h3>
                <span><Link className="foot1a_link" to="new_features">New features</Link></span><br></br>
                <span><Link className="foot1a_link" to="updates">Updates</Link></span><br></br>
                <span><Link className="foot1a_link" to="bugs_glitches">Bugs and glitches</Link></span><br></br>
                <span><Link className="foot1a_link" to="career">Career</Link></span><br></br>
                <span><Link className="foot1a_link" to="invester">Invester</Link></span><br></br>
                <span><Link className="foot1a_link" to="Ecomob_emergency">Ecomob Emergency</Link></span><br></br> 
            </div>
           </div>
           <div id="foot2">
            <ul>
                <li><Link className="foot2_link" to="c_2023ecomob">&copy;2023 Ecomob,Inc.</Link></li>
                <li><Link className="foot2_link" to="footer_privacy">Privacy</Link></li>
                <li><Link className="foot2_link" to="footer_terms">Terms</Link></li>
                <li><Link className="foot2_link" to="footer_sitemap">Sitemap</Link></li>
                <li><Link className="foot2_link" to="footer_company">Company</Link></li>
                <li><Link className="foot2_link_eng" to="eng">ENGLISH(IN)</Link></li>
                <li><Link className="foot2_link_inr" to="inr">₹ INR</Link></li>
            </ul>
           </div>
        </div>
        </> 
    );
}

export default Layout;