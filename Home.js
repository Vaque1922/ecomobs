import Product_Apple from "../database/product";
import Sam_product from "../database/Sam_product";
import Xia_product from "../database/Xia_product";
import One_product from "../database/One_product";
import { Link} from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect} from "react";


import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "./productSlice";

const Home=()=>{
    useEffect(()=>{
        Aos.init({duration:1000});
    },[])

// =================================================Instances of hooks===============================================

      const dispatch=useDispatch();
      const myCart=useSelector((state)=>state.addtocart.cart);
      console.log(myCart);
// ==============================================================myDataAdd function==============================================

const myDataAdd=(id,name,detail,img,price,quantity,added)=>{

  const product_obj={"id":id,"product_name":name,"product_detail":detail,"img":img,"price":price,"quantity":quantity,"added":added};
  dispatch(addToCart(product_obj));

}


// =============================================================map_apple_products============================================
     const product_ans=Product_Apple.map((key)=>{
      
      return(
        <>
       
        <div className="apple_product_card">
        <Link to={"/productdetail/"+key.id} className="Link_productCard"> <div className="product_img">
                  <img src={"/image/"+key.img} alt="not found"></img>
                </div>
                <h1 className="product_title">{key.product_name}</h1>
                <p className="detail">{key.product_detail}</p>
                <h3>₹{key.price}</h3></Link>
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
     });



// =============================================================map_samsung_products============================================


     
     const product_sam=Sam_product.map((key)=>{

      return(
        <>
        <div className="samsung_product_card">
        <Link to={"/productdetail/"+key.id} className="Link_productCard"><div className="product_img">
                  <img src={"/image/"+key.img} alt="not found"></img>
                </div>
                <h1>{key.product_name}</h1>
                <p className="detail">{key.product_detail}</p>
                <h3>{key.price}</h3></Link>
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
                                                                                                       key.quantity
                                                                                                        )}}>
                                                                                                      ADD TO CART
                                                                            </span>}
                </div>
           </div>
        </>
      )
     });


// =============================================================map_xiaomi_products============================================



     const product_xia=Xia_product.map((key)=>{

      return(
        <>
        <div className="xiaomi_product_card">
        <Link to={"/productdetail/"+key.id} className="Link_productCard"><div className="product_img">
                  <img src={"/image/"+key.img} alt="not found"></img>
                </div>
                <h1>{key.product_name}</h1>
                <p className="detail">{key.product_detail}</p>
                <h3>₹{key.price}</h3></Link>
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
                                                                                                       key.quantity
                                                                                                        )}}>
                                                                                                      ADD TO CART
                                                                            </span>}
                </div>
           </div>
        </>
      )
     });


// =============================================================map_oneplus_products============================================



     
     const product_one=One_product.map((key)=>{

      return(
        <>
        <div className="oneplus_product_card">
        <Link to={"/productdetail/"+key.id} className="Link_productCard"><div className="product_img">
                  <img src={"/image/"+key.img} alt="not found"></img>
                </div>
                <h1>{key.product_name}</h1>
                <p className="detail">{key.product_detail}</p>
                <h3>₹{key.price}</h3></Link>
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
                                                                                                       key.quantity
                                                                                                        )}}>
                                                                                                      ADD TO CART
                                                                            </span>}
                </div>
           </div>
        </>
      )
     });


// =============================================================RETURN--==================================================

    return(
        <>
        <div className="main">
        <div id="big_img">
        </div>
        <div id="welcome" data-aos="fade-up">
            <span id="welcome_to">Welcome to</span>
            <span id="to_ecomob">ECOMOB</span>
        </div>
        {/* -===================================================Apple================================================== */}
        <div id="apple" data-aos="fade-right">
            <div className="apple_img_part">
              <img data-aos="fade-right"  data-aos-duration="6000" src="/image/apple-iphone-15-pro-max-2.jpg" alt="not found"></img>
            </div>
            <div className="apple_description_part">
                <h1 data-aos="fade-right">iPhone 15 pro max</h1>
            </div>
            <div className="apple_price_part">
            <span data-aos="fade-right">₹ 1,80,000</span>
            </div>
        </div>
        {/* -------------------------Apple products-------------------- */}
        <div id="apple_products">
             {product_ans}
        </div>
        {/* =====================================================Samsung================================================ */}
           
           <div id="samsung" data-aos="fade-left">
            <div className="samsung_price_part">
            <span data-aos="fade-left"  data-aos-duration="6000">₹ 1,64,999</span>
            </div>
            <div className="samsung_description_part">
              <h1>Galaxy Z Fold 5</h1>
            </div>
            <div className="samsung_img_part">
              <img data-aos="fade-right"  data-aos-duration="6000" src="/image/samZF5.webp" alt="not found"></img>
            </div>
           </div>
           {/* -------------------------Samsung products---------------- */}
           <div id="samsung_products">
             {product_sam}
           </div>

             {/* =====================================================Xiaomi================================================ */}
           
             <div id="xiaomi" data-aos="fade-right">
            <div className="xia_img_part">
             <img data-aos="fade-right"  data-aos-duration="6000" src="/image/xiaomi13pro.jpg" alt="not found"></img>
            </div>
            <div className="xia_description_part">
              <h1>Xiaomi 13 Pro Ceramic</h1>
            </div>
            <div className="xia_price_part">
            <span data-aos="fade-right"  data-aos-duration="6000">₹ 67,499</span>
            </div>
           </div>
           {/* -------------------------Xiaomi products---------------- */}
           <div id="xiaomi_products">
              {product_xia}
           </div>

            {/* =====================================================Oneplus================================================ */}
           
            <div id="oneplus" data-aos="fade-left">
            <div className="oneplus_price_part">
            <span data-aos="fade-left"  data-aos-duration="6000">₹ 1,39,900</span>
            </div>
            <div className="oneplus_description_part">
              <h1>OnePlus Open</h1>
            </div>
            <div className="oneplus_img_part">
             <img data-aos="fade-right"  data-aos-duration="6000" src="/image/oneplusOpen.webp" alt="not found"></img>

            </div>
           </div>
           {/* -------------------------oneplus products---------------- */}
           <div id="oneplus_products">
            {product_one}
           </div>
           </div>
        </>
    );
}
export default Home;