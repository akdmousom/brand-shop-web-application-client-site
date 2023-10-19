import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleProductCard from "../../Components/SingleProductCard/SingleProductCard";

const BrandsAllProducts = () => {
    const brand = useLoaderData()
    const { brandName } = brand

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
             
                setProducts(...products, data)
            })
    }, [])

 
    const matchProduct = products?.filter(product => product?.brandName?.toLowerCase() === brandName?.toLowerCase());
  


    return (
        <div>
            <div className="w-full h-9 text-center flex justify-center items-center bg-gray-300 text-gray-800 text-2xl font-bold">
                <h1>{brandName}</h1>

            </div>
            <div className="grid lg:w-[1200px] mx-auto grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    matchProduct?.map(matchProduct => <SingleProductCard key={matchProduct?._id} matchProduct={matchProduct} />)
                }
            </div>
        </div>
    );
};

export default BrandsAllProducts;