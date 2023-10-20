import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleProductCard from "../../Components/SingleProductCard/SingleProductCard";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Offer from "../../Components/Offer/Offer";

const BrandsAllProducts = () => {
    const brand = useLoaderData()
    const { brandName } = brand
    const [productLoading, setProductLoading] = useState(true);

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://brand-shop-backend-ejo139ky4-arijit-kumar-das-projects.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProductLoading(false)
                setProducts(data)
            })
    }, [])



    const matchProduct = products.filter(product => product?.brandName?.toLowerCase() === brandName?.toLowerCase());

    if (productLoading) {

        return (
            <div className="min-h-screen grid justify-center items-center">
                <span className="loading loading-spinner text-secondary"></span>
            </div>
        )

    }

    if (matchProduct?.length === 0) {

        return (
            <div className="h-[80vh] grid justify-center items-center">
                <h1 className="lg:text-2xl text-xl font-bold ">Product Will Be Coming Soon</h1>
            </div>
        )

    }

    return (
        <div>
            <div className="w-full h-9 text-center flex justify-center items-center bg-gray-300 text-gray-800 text-2xl font-bold">
                <h1>{brandName}</h1>

            </div>
            <div className=" my-24">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    autoplay = {true}
                    slidesPerView={2}
                    navigation
                  
                   
                >
                    <SwiperSlide><Offer img={'https://i.ibb.co/7t1Yn00/Shop-now.jpg'}/></SwiperSlide>
                    <SwiperSlide><Offer img={'https://i.ibb.co/bJTzX6b/Untitled-design-2.png'}/></SwiperSlide>
                    <SwiperSlide><Offer img={'https://i.ibb.co/QXwfgz0/Untitled-design.png'}/></SwiperSlide>
                    <SwiperSlide><Offer img={'https://i.ibb.co/YQ3d6cG/Shop-now.png'}/></SwiperSlide>
                    ...
                </Swiper>
            </div>
            <div className="grid lg:w-[1200px] mx-auto grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* {
                    matchProduct?.map(matchProduct => <SingleProductCard key={matchProduct?._id} matchProduct={matchProduct} />)
                } */}
                {
                    matchProduct?.map(matchProduct => <SingleProductCard key={matchProduct?._id} matchProduct={matchProduct} />)
                }
            </div>
        </div>
    );
};

export default BrandsAllProducts;