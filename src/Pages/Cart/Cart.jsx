import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { userContext } from "../../Utils/AuthContext/AuthProvider";
import CartItem from "./CartItem";

const Cart = () => {
    const products = useLoaderData();
    const {userInfo} = useContext(userContext)
    // console.log(userInfo);
    const {email} = userInfo;
    const matchProducts = products?.filter(product => product?.userEmail === email)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">

            {
                matchProducts.map(product => <CartItem product={product} key={product._id}/>)
            }
            
            
        </div>
    );
};

export default Cart;