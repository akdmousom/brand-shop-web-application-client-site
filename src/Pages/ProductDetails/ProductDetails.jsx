import { useLoaderData, useNavigate } from "react-router-dom";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import toast from "react-hot-toast";
import { useContext } from "react";
import { userContext } from "../../Utils/AuthContext/AuthProvider";

const ProductDetails = () => {
    const { userInfo } = useContext(userContext)
    const userEmail = userInfo?.email
    const product = useLoaderData()
    const navigate = useNavigate();

    
    const { productName, productPrice, productRating, productType, shortDescription, productImg } = product;

    const productCartDetails = { productName, productPrice, productRating, productType, shortDescription, productImg, userEmail}

    const rating = productRating
    
    const addToCart = () => {
        fetch('http://localhost:5000/add-to-cart', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productCartDetails)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {

                    toast.success('This Product Is Added To Your Cart')
                    navigate('/my-cart')
                    
                }
        
                
            })
    }

    return (
        <div className="lg:w-[1200px] lg:mx-auto lg:justify-normal px-2 grid justify-center">

            <div className="grid justify-center">
                <img src={productImg} alt="" />
            </div>
            <div className="my-10">
                <h1 className="md:text-2xl texl-xl font-bold">{productName}</h1>
                <div className="badge badge-secondary"><p className="text-white">{productType}</p></div>
                <div className="flex items-center justify-between">
                    <h1 className="md:text-2xl texl-xl font-bold py-2 ">Price: ${productPrice}</h1>
                    <Rating
                        placeholderRating={rating
                        }
                        emptySymbol={<AiOutlineStar />}
                        placeholderSymbol={<AiFillStar color="	#ffa534" />}
                        fullSymbol={<AiFillStar color="	#ffa534" />}
                    />
                </div>
            </div>

            <div>
                <p>{shortDescription}</p>
            </div>

            <div className="my-2">
                <button onClick={addToCart} className="btn btn-default bg-secondary text-white">Add To Cart</button>
            </div>


        </div>
    );
};

export default ProductDetails;