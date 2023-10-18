
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Header/Navbar';
import { Toaster } from 'react-hot-toast';

const MainLayOut = () => {
    return (
        <div className=' font-poppins'>
            <Navbar/>
            <Outlet/>
            <Toaster/>
        </div>
    );
};

export default MainLayOut;