import { useParams } from "react-router-dom";
import All_products from "../database/All_products";
import { addQuantity } from "./productSlice";
import { removeQuantity } from "./productSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "./productSlice";
import { Link } from "react-router-dom";

const Productdetail=()=>
{
    const {id}=useParams();
    const dispatch=useDispatch();
    const myDataAdd=(id,name,detail,img,price,quantity,added)=>{
    
    
        const product_obj={"id":id,"product_name":name,"product_detail":detail,"img":img,"price":price,"quantity":quantity,"added":added};
        dispatch(addToCart(product_obj));
      
      }

      const add_productQnt=(myid)=>{

        dispatch(addQuantity(myid));
        }
        
        const remove_productQnt=(myid)=>{
            dispatch(removeQuantity(myid));
            }
        
        

      
    const myProDuct=All_products.map((key)=>{

        if(key.id===id)
        {
            return(
                <>
                <div className="product_main_pd">
             <div className="product_img_pd">
               <img src={"/image/"+key.img} alt="not found"></img>
             </div>
             <div className="product_details_pd">
                    <h1>{key.product_name}</h1>
                    <div className="highlights">
                        <span>{key.product_detail}</span>
                        <span>₹{key.price}</span>
                        <span>{key.ram}</span>
                        <span>{key.battery}</span>
                        <span>{key.processor}</span>
                        <span>{key.camera}</span>
                    </div>
                    <div className="quantity_pd">
                        <h2>Quantity:
                        <img className="minus_icon" 
                            src="/image/icons8-minus-50.png"
                           onClick={()=>{remove_productQnt(key.id)}}
                           alt="not found"
                          ></img>
                          <span>{key.quantity}</span>
                        <img className="plus_icon" 
                             src="/image/icons8-plus-50.png"
                             onClick={()=>{add_productQnt(key.id)}} alt="not found"></img>
                        </h2>

                        <h2>Total Amount:₹{key.quantity*key.price}</h2>
                    </div>
             </div>
           </div>
             <div className="button_pd">
             <Link to={"/buynow"} className="buy_pd"><div className="buynow_pd">BUY NOW</div></Link>
                <div className="addtocart_pd"  onClick={()=>{myDataAdd(key.id,
                                                                        key.product_name,
                                                                        key.product_detail,
                                                                       key.img,
                                                                       key.price,
                                                                        key.quantity,
                                                                        key.added
                                                                         )}}>ADD TO CART</div>
             </div>
                </>
            )
        };
    });
    return(
        <>
        <div className="main">
           {myProDuct}
        </div>
        </>
    );
}

export default Productdetail;