import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from 'prop-types';

const SingleProductCard = ({ matchProduct }) => {
    const [productLoading, setProductLoading] = useState(true);
  
    const { _id, productImg, productName, productType, shortDescription, productPrice, productRating

    } = matchProduct;

    
    const rating = productRating;

    const handleProductDetails = (id) => {
        fetch(`http://localhost:5000/product-details/${id}`)
        .then(res => res.json())
        .then(data => {
            if (data) {

                setProductLoading(false)
                
            }
            
        })
       
     
    }  

    const handleProductUpdate = (id) => {

           
        fetch(`http://localhost:5000/products/${id}`)
        
        .then(res => res.json())
        

      
    } 

   
    

   

    return (
        <div className="">

            <div className="card lg:w-96 h-[600px] bg-base-100 shadow-xl">
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
                            placeholderRating={rating
                            }
                            emptySymbol={<AiOutlineStar/>}
                            placeholderSymbol={<AiFillStar color="	#ffa534"/>}
                            fullSymbol={<AiFillStar color="	#ffa534"/>}
                        /></div>
                    </div>
                    <div className="mt-2 flex justify-between">
                        <Link to={`/product-details/${_id}`} onClick={()=>handleProductDetails(_id)} className="btn btn-default">Details</Link>
                        <Link to={`/products/${_id}`}><button onClick={()=>{
                            
                            handleProductUpdate(_id)
                                if (productLoading) {
                                    

                                    return (
                                        <div className="min-h-screen grid justify-center items-center">
                                            <span className="loading loading-spinner text-secondary"></span>
                                        </div>
                                    )
                                    
                                }
                                
                           
                            handleProductUpdate(_id)
                            }} className="btn btn-default">Update</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

SingleProductCard.propTypes ={
    matchProduct: PropTypes.object.isRequired,
}

export default SingleProductCard;