import { useLoaderData } from "react-router-dom";

const BrandsAllProducts = () => {
    const brand = useLoaderData()
    const {brandName} = brand
    return (
        <div>
            <div className="w-full h-9 text-center flex justify-center items-center bg-gray-300 text-gray-800 text-2xl font-bold">
                <h1>{brandName}</h1>
            </div>
        </div>
    );
};

export default BrandsAllProducts;