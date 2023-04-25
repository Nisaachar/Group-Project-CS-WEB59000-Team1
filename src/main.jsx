import React from 'react'
import ReactDOM from 'react-dom/client'
import Visa from './Visa'
import App from './App'
import UniInfo from './UniInfo'
import Login from './Login'
import Register from './Register'
import './index.css'
import SOP from './SOP'
import Progress from './Progress'
import Home from './Home'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
   path:"/",
   element:<App/>,
  },
  {
    path: "/Visa",
    element: <Visa/>,
  },
  {
    path: "/UniInfo",
    element: <UniInfo/>,
  },
  {
    path: "/Login",
    element:<Login/>,
  },{
    path: "/SOP",
    element:<SOP/>,
  },
  {
    path: "/Progress",
    element:<Progress/>,
  },
  {
    path: "/Home",
    element:<Home/>,
  },
  {
    path: "/Register",
    element:<Register/>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
