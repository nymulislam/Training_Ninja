import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'
import Login from './Components/Login/Login'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import Registration from './Components/Registration/Registration'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
    ]
    
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
