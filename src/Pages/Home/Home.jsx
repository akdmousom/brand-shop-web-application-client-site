import Banner from '../../Components/Header/Banner';
import BrandsCard from '../../Components/Home/BrandsCard';
import { useLoaderData } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Marquee from "react-fast-marquee";
import BrandsSlide from '../../Components/Header/BrandsSlide';
import { Map, Marker } from "pigeon-maps";



const Home = () => {
    const allBrands = useLoaderData();
    
    AOS.init();



    return (
        <div className='mx-auto w-full'>

            <div className=' my-32'>
                <Marquee className='flex px-28'>
                    <BrandsSlide className="h-[5px] px-12" img={'https://i.ibb.co/nbvhL3c/Chanel.webp'} />
                    <BrandsSlide className=" px-28" img={'https://i.ibb.co/QpD6hf3/adore.webp'} />
                    <BrandsSlide className=" px-28" img={'https://i.ibb.co/L6zvqBz/free-avon-2-202460.png'} />
                    <BrandsSlide className=" px-28" img={'https://i.ibb.co/sFZrjwM/Huda-Beauty.webp'} />
                    <BrandsSlide className=" px-28" img={'https://i.ibb.co/txCWFL9/Loreal.png'} />
                    <BrandsSlide className=" px-28" img={'https://i.ibb.co/1TDfkcr/mamaearth-logo.webp'} />
                </Marquee>
            </div>

            <div className='grid my-5 md:justify-center min-w-full'>
                <h1 className='text-secondary font-bold text-center text-xl lg:text-5xl my-8'>Grab This Deal</h1>
                <img className='lg:w-[1200px] lg:h-[400px]' src="https://i.ibb.co/QXwfgz0/Untitled-design.png" alt="" />
            </div>

            <Banner />

            <h1 className='my-4 text-gray-800 text-center font-bold text-xl md:text-2xl'>We Are Affiliated With This Brands</h1>
            <div data-aos="fade-in"
                className=' grid lg:w-[1200px] mx-auto lg:grid-cols-3 grid-cols-1 md:grid-cols-2 md:gap-2 md:px-4 gap-6 px-2'>
                {
                    allBrands?.map(brand => <BrandsCard key={brand._id} brand={brand} />)
                }
            </div>

            <div data-aos="fade-in" className='my-10 px-4 lg:w-[1200px] mx-auto rounded-2xl'>
                <h1 className='text-xl font-bold text-center my-2 lg:text-2xl'>Reach Us On This Point</h1>
                <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                    <Marker width={50} anchor={[50.879, 4.6997]} />
                </Map>
            </div>

        </div>
    );
};

export default Home;