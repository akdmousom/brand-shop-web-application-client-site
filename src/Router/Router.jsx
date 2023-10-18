import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../MainLayOut/MainLayOut';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login_Register/Login';
import Register from '../Pages/Login_Register/Register';
import AddProduct from '../Pages/AddProduct/AddProduct';
import PrivetRouter from './PrivetRouter/PrivetRouter';

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
            }
        ]
    }
])

export default Router;