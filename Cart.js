
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addQuantity } from "./productSlice";
import { removeQuantity } from "./productSlice";
import { rmv_addedItem } from "./productSlice";
import { netAmt} from "./productSlice";
import { Link } from "react-router-dom";



const Cart=()=>{

        useEffect(()=>{
        Aos.init({duration:1000});
    },[])

// =====================================================hooks===============================================================

const addedItem=useSelector((state)=>state.addtocart.cart);
const dispatch=useDispatch();
// ===============================================================productQnt==================================

const add_productQnt=(myid)=>{

dispatch(addQuantity(myid));
}

const remove_productQnt=(myid)=>{

    dispatch(removeQuantity(myid));
    }


// =====================================================added_items_return function===========================================
var netAmount=0;


const myAddedItem=addedItem.map((key)=>{

 netAmount+=key.quantity*key.price;
 
 
    return(
        <>
        <tr>
            <td><img className="addedItem_img" src={"/image/"+key.img} /></td>
            <td className="addedItem_td">{key.product_name}</td>
            <td className="addedItem_td">{key.product_detail}</td>
            <td className="addedItem_td">₹{key.price}</td>
            <td className="addedItem_td">
                <img className="minus_icon" 
                 src="/image/icons8-minus-50.png"
                 onClick={()=>{remove_productQnt(key.id)}}
                 ></img>
                <span className="qnt_val">
                {key.quantity}
                </span>
                <img className="plus_icon" 
                src="/image/icons8-plus-50.png"
                onClick={()=>{add_productQnt(key.id)}}></img>
                </td>
            <td className="addedItem_td">₹{key.quantity*key.price}</td>
            <td>
                <img onClick={()=>{dispatch(rmv_addedItem(key.id))}} className="rmv_icon" src="/image/icons8-remove-64.png"></img>
            </td>
        </tr>
        </>
    )
});


useEffect(()=>
{
 dispatch(netAmt(netAmount));   
},[netAmount]);

// =======================================================RETURN==================================================================
    return(
        <>
        <div className="main">
          {netAmount==0?<div className="added_item">
            <h1 data-aos="zoom-out">NO ITEMS ADDED</h1>
          </div>:<div>
          <div className="added_item">
            <h1 data-aos="zoom-out">ADDED ITEMS</h1>
          </div>
          <div className="addedItem_table">
          <table>
            <tr>
                <th></th>
                <th className="addedItem_th">Name</th>
                <th className="addedItem_th">Detail</th>
                <th className="addedItem_th">Price</th>
                <th className="addedItem_th">Quantity</th>
                <th className="addedItem_th">Total Amount</th>
                <th></th>
            </tr>
            {myAddedItem}
          </table>
          </div>
          <div className="netAmount">
            <h1>Total amount: ₹{netAmount}</h1> 
           <Link to="/buynow"><button className="buy_now_btn">Buy Now</button></Link>
          </div>
          </div>}
        </div>
        </>
    );
}

export default Cart;