import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

const ProductDetails = () => {
    const product = useLoaderData()
    console.log(product);
    const { productName, productPrice, productRating, productType, shortDescription, productImg } = product

    return (
        <div className="lg:w-[1200px] lg:mx-auto lg:justify-normal px-2 grid justify-center">

            <div className="grid justify-center">
            <img  src={productImg} alt="" />
            </div>
            <div className="my-10">
                <h1 className="md:text-2xl texl-xl font-bold">{productName}</h1>
                <div className="badge badge-secondary"><p className="text-white">{productType}</p></div>
                <div className="flex items-center justify-between">
                    <h1 className="md:text-2xl texl-xl font-bold py-2 ">Price: ${productPrice}</h1>
                    <Rating
                            placeholderRating={productRating
                            }
                            emptySymbol={<AiOutlineStar/>}
                            placeholderSymbol={<AiFillStar color="	#ffa534"/>}
                            fullSymbol={<AiFillStar color="	#ffa534"/>}
                        />
                </div>
            </div>

            <div>
                <p>{shortDescription}</p>
            </div>

            <div className="my-2">
            <button className="btn btn-default bg-secondary text-white">Add To Cart</button>
            </div>


        </div>
    );
};

export default ProductDetails;