import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <>
            <div className="navbar bg-neutral text-neutral-content">
                <a className="btn btn-ghost normal-case text-xl">Dashboard</a>
            </div>

            <div className="grid lg:grid-cols-4" >

                <div className="lg:col-span-1 lg:grid min-h-screen hidden ">

                    <div className="drawer  lg:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content  flex flex-col items-center justify-center">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                        </div>
                        <div className="drawer-side bg-warning">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-transparent p-4 w-80 min-h-full  text-base-content">
                                {/* Sidebar content here */}
                                <li><NavLink to={'/dashboard/add-brand'}>Add Brands</NavLink></li>
                                <li><NavLink to={'/add-product'}>Add Products</NavLink></li>
                            </ul>

                        </div>
                    </div>



                </div>

                <div className="lg:col-span-3 bg-gray mt-5 md:col-span-4 col-span-4 min-w-fit min-h-screen mx-auto">
                    

                    <div className="py-5 lg:hidden">
                    <ul className="flex gap-4 justify-center items-center">
                            <li  className="btn bg-pink-400 text-white font-bold"><NavLink to={'/dashboard/add-brand'}>Add Brands</NavLink></li>
                            <li className="btn bg-pink-400 text-white font-bold">  <NavLink to={'/add-product'}>Add Products</NavLink></li>

                        </ul>
                    </div>

                    
                    <div>
                    <Outlet />
                    </div>
                </div>
            </div>
            
        </>


    );
};

export default DashboardLayout;