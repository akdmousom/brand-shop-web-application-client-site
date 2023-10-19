import { Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="my-5">

           

            <div>
            <Outlet></Outlet>
            </div>



        </div>
    );
};

export default DashBoard;