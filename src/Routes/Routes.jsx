import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {

           path:'/',
          element:<Home></Home>,

        },
        {

         path:'categoris/:category',
         element:<Order></Order>




        }
        ,
        {

          path:'login',
          element:<Login></Login>




        }
        ,
        {

         path:'signup',
         element:<SignUp></SignUp>

        }
        ,{

          path:'secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>



        }


      ]
    },
  ]);