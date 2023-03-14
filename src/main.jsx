// We are using 4 functional components for the main page(including App)
//The 4 functional components for the main page are App, Header, Product and Quote genrator
// We are using an additional functional component fo the New Products page.In total we are using 5 functional components
//useState is being used in QuoteGenerator and useEffect is being used in New Pruducts component for the counter
// We are passing data via props in QuoteGenerator
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UniInfo from './UniInfo'
import './index.css'
import SOP from './SOP'
import Home from './Home'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/UniInfo",
    element: <UniInfo/>,
  },
  {
    path: "/SOP",
    element: <SOP/>,
  },
  {
    path: "/Home",
    element: <Home/>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
