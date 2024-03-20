
import All_products from "../database/All_products";
import { useDispatch } from "react-redux";
import { addToCart } from "./productSlice";
import { useState } from "react";
const Search=()=>{
    const [myproduct,setMyproduct]=useState("");
    var myStatus=false;
    const dispatch=useDispatch();
    const myDataAdd=(id,name,detail,img,price,quantity,added)=>{

        const product_obj={id:id,product_name:name,product_detail:detail,img:img,price:price,quantity:quantity,added:added};
        dispatch(addToCart(product_obj));
      
      }

    const proAns=All_products.map((key)=>
    {
        let mystr= key.product_name;
        let status = mystr.toLocaleLowerCase().includes(myproduct.toLocaleLowerCase())
        if(status)
        {
            myStatus=true;
            return(
                <>
                <div className="apple_product_card">
                <div className="product_img">
                  <img src={"/image/"+key.img} />
                </div>
                <h1>{key.product_name}</h1>
                <p className="detail">{key.product_detail}</p>
                <h3>₹{key.price}</h3>
                <div className="buy_add">
                  <div className="buy_now">
                    BUY NOW
                  </div>
                  {key.added?<span className="add_cart">ADDED</span>:<span className="add_cart" 
                                                                               onClick={()=>{myDataAdd(key.id,
                                                                                                       key.product_name,
                                                                                                      key.product_detail,
                                                                                                       key.img,
                                                                                                       key.price,
                                                                                                       key.quantity,
                                                                                                       key.added
                                                                                                        )}}>
                                                                                                      ADD TO CART
                                                                            </span>}
                </div>
           </div>
                </>
            )
        }
    })
    return(
        <>
        <div className="main">
        <div className="added_item">
            <input className="search_inp" type="text" value={myproduct} onChange={(e)=>{setMyproduct(e.target.value)}}></input>
        </div>
        <div id="_products">
             {proAns}
        </div>
        </div>
        </>
    );
}
export default Search;