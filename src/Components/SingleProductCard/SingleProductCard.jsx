import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

const SingleProductCard = ({ matchProduct }) => {
    const { productImg, productName, brandName, productType, shortDescription, productPrice, productRating

    } = matchProduct;
    return (
        <div className="w-[1200px] mx-auto">

            <div className="card lg:w-96 bg-base-100 shadow-xl">
                <figure><img src={productImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {productName}
                        
                    </h2>
                    <div className="badge badge-secondary"><p className="text-white">{productType}</p></div>
                    <p>{shortDescription}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">${productPrice
                        }</div>
                        <div className="badge badge-outline"><Rating
                            placeholderRating={productRating
                            }
                            emptySymbol={<AiOutlineStar/>}
                            placeholderSymbol={<AiFillStar color="	#ffa534"/>}
                            fullSymbol={<AiFillStar color="	#ffa534"/>}
                        /></div>
                    </div>
                    <div className="mt-2 flex justify-between">
                        <button className="btn btn-default">Details</button>
                        <button className="btn btn-default">Update</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleProductCard;