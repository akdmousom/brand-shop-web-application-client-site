import Banner from '../../Components/Header/Banner';
import BrandsCard from '../../Components/Home/BrandsCard';
import { useLoaderData, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Marquee from "react-fast-marquee";
import BrandsSlide from '../../Components/Header/BrandsSlide';
import { Map, Marker } from "pigeon-maps";
import { useEffect } from 'react';



const Home = () => {
    const allBrands = useLoaderData()
    const navigate = useNavigate()




    console.log(Array.isArray(allBrands));
    const isArray = Array.isArray(allBrands);

    useEffect(() => {

        document.title = "Home"

        setInterval(() => {
            if (!isArray) {
                location.reload()

                return navigate('/')

            }
        }, 1000)



    }, [])


    if (!isArray) {

        return (
            <div className='min-h-screen bg-dark grid justify-center items-center'>

                <div className='text-center justify-center items-center flex flex-col gap-4'>
                    <h1 className='text-center font-bold '>Wating For Server Response</h1>
                    <span className="loading grid loading-spinner text-secondary"></span>
                </div>

            </div>
        )

    }





    AOS.init();



    return (
        <div className='mx-auto'>

            <div className=' my-32'>
                <Marquee className='flex px-28'>
                    <BrandsSlide className="h-[5px] px-12" img={'https://i.ibb.co/PGqmtjr/chanel-logo.png'} />
                    <BrandsSlide className=" " img={'https://i.ibb.co/QpD6hf3/adore.webp'} />
                    <BrandsSlide className="" img={'https://i.ibb.co/qNJ5LLJ/avon-5-logo-png-transparent.png'} />
                    <BrandsSlide className="" img={'https://i.ibb.co/sFZrjwM/Huda-Beauty.webp'} />
                    <BrandsSlide className=" " img={'https://i.ibb.co/txCWFL9/Loreal.png'} />
                    <BrandsSlide className="" img={'https://i.ibb.co/PcS1wcM/mamearth.png'} />
                </Marquee>
            </div>

            <div className='grid my-5 md:justify-center min-w-full'>
                <h1 className='text-secondary font-bold text-center text-xl lg:text-5xl my-8'>Grab This Deal</h1>
                <img className='lg:w-[1200px] lg:h-[400px]' src="https://i.ibb.co/QXwfgz0/Untitled-design.png" alt="" />
            </div>

            <Banner />

            <h1 className='my-4 text-secondary text-center font-bold text-xl md:text-2xl'>We Are Affiliated With This Brands</h1>
            <div data-aos="fade-in"
                className=' grid  mx-auto lg:grid-cols-3 grid-cols-1 md:grid-cols-2 md:gap-2 md:px-4 gap-6 px-2'>
                {
                    allBrands?.map(brand => <BrandsCard key={brand._id} brand={brand} />)
                }
            </div>

            <div data-aos="fade-in" className='my-10 px-4  mx-auto rounded-2xl'>
                <h1 className='text-xl font-bold text-center my-2 lg:text-2xl'>Reach Us On This Point</h1>
                <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                    <Marker width={50} anchor={[50.879, 4.6997]} />
                </Map>
            </div>

        </div>
    );
};

export default Home;