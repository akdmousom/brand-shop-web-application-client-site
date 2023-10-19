
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Header/Navbar';
import { Toaster } from 'react-hot-toast';

const MainLayOut = () => {
    return (
        <div className=' font-poppins'>
            <Navbar/>
            <Outlet/>
            <Toaster/>
            <footer className="footer mt-2  footer-center p-4 bg-gray-600 text-white">
                <aside>
                    <p className="text-center">Copyright © 2023 - All right reserved by beautify Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default MainLayOut;