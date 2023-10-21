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
import UpdateProduct from '../Pages/CURD/UpdateProduct';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import About from '../Pages/About/About';

const Router = createBrowserRouter([

    {
        path: '/',
        element: <MainLayOut />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://brand-shop-backend-hia9widhl-arijit-kumar-das-projects.vercel.app/brands')
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },

            {
                path: '/add-product',
                element: <PrivetRouter><AddProduct /></PrivetRouter>,

            },

            {
                path: '/my-cart',
                element: <PrivetRouter><Cart /></PrivetRouter>,
                loader: () => fetch('https://brand-shop-backend-hia9widhl-arijit-kumar-das-projects.vercel.app/cart')
            },
            {
                path: '/user-profile',
                element: <PrivetRouter><UserProfile /></PrivetRouter>
            },
            {
                path: '/brands-all-products/:id',
                element: <PrivetRouter><BrandsAllProducts /></PrivetRouter>,
                loader: ({ params }) => fetch(`https://brand-shop-backend-hia9widhl-arijit-kumar-das-projects.vercel.app/single-brands/${params.id}`)

            },
            {
                path: '/product-details/:id',
                element: <PrivetRouter><ProductDetails /></PrivetRouter>,
                loader: ({ params }) => fetch(`https://brand-shop-backend-hia9widhl-arijit-kumar-das-projects.vercel.app/product-details/${params.id}`)
            },
            {
                path: '/products/:id',
                element: <PrivetRouter><UpdateProduct /></PrivetRouter>,
                loader: ({ params }) => fetch(`https://brand-shop-backend-hia9widhl-arijit-kumar-das-projects.vercel.app/products/${params.id}`)
            },
            {
                path: '/dashboard',
                element: <DashboardLayout></DashboardLayout>,
                children: [
                    {
                        path: '/dashboard',
                        element: <PrivetRouter><DashBoard /></PrivetRouter>,
                        children: [
                            {
                                path: '/dashboard/add-brand',
                                element: <PrivetRouter><AddBrand></AddBrand></PrivetRouter>
                            },
                            {
                                path: '/dashboard/add-product',
                                element: <PrivetRouter><AddProduct /></PrivetRouter>
                            },
                        ]
                    },

                ]
            },

        ]
    },


])

export default Router;