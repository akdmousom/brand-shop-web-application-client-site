
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div>
            <h1>Hello Bangladesh</h1>
            <Outlet/>
        </div>
    );
};

export default MainLayOut;