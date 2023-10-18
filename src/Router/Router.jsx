import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../MainLayOut/MainLayOut';
import Home from '../Pages/Home';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])

export default Router;