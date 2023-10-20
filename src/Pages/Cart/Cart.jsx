import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { userContext } from "../../Utils/AuthContext/AuthProvider";
import CartItem from "./CartItem";

const Cart = () => {
    const products = useLoaderData();
    const {userInfo} = useContext(userContext)
    // console.log(userInfo);
    const {email} = userInfo;
    const matchItem = products?.filter(product => product?.userEmail === email)
    const [matchProduct, setMatchProduct] = useState(matchItem);
   

    console.log(matchProduct);
    if (matchProduct.length == []) {

        return (
            <div className="grid min-h-screen justify-center items-center">

               <div className="grid justify-center gap-4 items-center">
               <h1 className="text-xl md:text-2xl font-bold text-gray-800">Your Cart Is Empty</h1>
                <Link to={'/'}><button className="btn btn-secondary">Buy Some Product</button></Link>
               </div>

            </div>
        );
        
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">

            {
                matchProduct.map(product => <CartItem product={product} setMatchProduct={setMatchProduct} matchProduct={matchProduct} key={product._id}/>)
            }
            
            
        </div>
    );
};

export default Cart;