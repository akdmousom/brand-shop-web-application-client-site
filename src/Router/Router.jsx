import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../MainLayOut/MainLayOut';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login_Register/Login';
import Register from '../Pages/Login_Register/Register';
import AddProduct from '../Pages/AddProduct/AddProduct';
import PrivetRouter from './PrivetRouter/PrivetRouter';
import UserProfile from '../Pages/UserProfile/UserProfile';
import DashBoard from '../Pages/DashBoard/DashBoard';
import AddBrand from '../Pages/CURD/AddBrand';
import DashboardLayout from '../MainLayOut/DashboardLayout';
import BrandsAllProducts from '../Pages/BrandsAllProducts/BrandsAllProducts';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';
import Cart from '../Pages/Cart/Cart';

const Router = createBrowserRouter([
   
    {
        path: '/',
        element: <MainLayOut/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('http://localhost:5000/brands')
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },

            {
                path: '/add-product',
                element: <PrivetRouter><AddProduct/></PrivetRouter>,
                
            }, 

            {
                path: '/my-cart',
                element: <PrivetRouter><Cart/></PrivetRouter>,
                loader: () => fetch('http://localhost:5000/cart')
            },
            {
                path: '/user-profile',
                element: <PrivetRouter><UserProfile/></PrivetRouter>
            },
            {
                path: '/brands-all-products/:id',
                element: <PrivetRouter><BrandsAllProducts/></PrivetRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/single-brands/${params.id}`)
            },
            {
                path: '/product-details/:id',
                element:<PrivetRouter><ProductDetails/></PrivetRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/product-details/${params.id}`)
            },
            {
                path: '/dashboard',
                element: <DashboardLayout></DashboardLayout>,
                children:[
                    {
                        path: '/dashboard',
                        element: <PrivetRouter><DashBoard/></PrivetRouter>,
                        children: [
                            {
                                path: '/dashboard/add-brand',
                                element: <PrivetRouter><AddBrand></AddBrand></PrivetRouter>
                            },
                            {
                                path: '/dashboard/add-product',
                                element: <PrivetRouter><AddProduct/></PrivetRouter>
                            },
                        ]
                    },
                    
                ]
            },
            
        ]
    },

  
])

export default Router;