import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../MainLayOut/MainLayOut';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login_Register/Login';
import Register from '../Pages/Login_Register/Register';
import AddProduct from '../Pages/AddProduct/AddProduct';
import PrivetRouter from './PrivetRouter/PrivetRouter';
import MyCart from '../Pages/Cart/MyCart';
import UserProfile from '../Pages/UserProfile/UserProfile';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut/>,
        children: [
            {
                path: '/',
                element: <Home/>
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
                element: <PrivetRouter><AddProduct/></PrivetRouter>
            }, 

            {
                path: '/my-cart',
                element: <PrivetRouter><MyCart/></PrivetRouter>
            },
            {
                path: '/user-profile',
                element: <PrivetRouter><UserProfile/></PrivetRouter>
            }
        ]
    }
])

export default Router;