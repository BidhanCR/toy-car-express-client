import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetail from "../Pages/ToyDetail/ToyDetail";
import AddToys from "../Pages/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'blogs',
            element: <Blogs></Blogs>
        },
        {
           path: 'register',
           element: <Register></Register> 
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
          path: 'allToys',
          element: <AllToys></AllToys>
        },
        {
          path: 'toy/:id',
          element: <PrivateRoute><ToyDetail></ToyDetail></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
          
        },
        {
          path: 'addToys',
          element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
        },
        {
          path: 'myToys',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        }
        
      ]
    },
  ]);

export default router;