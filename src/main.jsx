import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './Utils/AuthContext/AuthProvider'
import MainLayOut from './MainLayOut/MainLayOut'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router'
import UserData from './Utils/UserDataContext/UserData'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserData>
    <AuthProvider>
      
        <RouterProvider router={Router}>
          <MainLayOut></MainLayOut>
        </RouterProvider>
      
    </AuthProvider>
    </UserData>

  </React.StrictMode>,
)
