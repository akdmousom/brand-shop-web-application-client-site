import { useContext } from 'react';
import { userContext } from '../../Utils/AuthContext/AuthProvider';
import { UserDataContext } from '../../Utils/UserDataContext/UserData';
import Banner from '../../Components/Header/Banner';
import BrandsCard from '../../Components/Home/BrandsCard';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const allBrands = useLoaderData();
    const {userInfo} = useContext(userContext)
    const {userData} = useContext(UserDataContext)


   
    return (
        <div>
            <Banner/>

            <h1 className='my-4 text-gray-800 text-center font-bold text-xl md:text-2xl'>We Are Affiliated With This Brands</h1>
            <div className='lg:w-[1200px] lg:mx-auto grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 md:gap-2 md:px-4 gap-6 px-2'>
            {
                allBrands?.map(brand => <BrandsCard key={brand._id} brand={brand}/>)
            }
            </div>
           
        </div>
    );
};

export default Home;