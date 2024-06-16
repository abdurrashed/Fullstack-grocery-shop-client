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
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers";
import AddItems from "../pages/Dashboard/Additems/AddItems";
import AdminRoute from "./AdminRoute";
import Manageitems from "../pages/Dashboard/Manageitems/Manageitems";
import Updateitem from "../pages/Dashboard/UpdateItem/Updateitem";
import Pay from "../pages/Dashboard/Pay/Pay";

import Success from "../pages/Paymentsuccess/Success";
import Fail from "../pages/Paymentsuccess/Fail";
import PaymentHistory from "../pages/Payment/PaymentHistory";
import UserHome from "../pages/UserHome/UserHome";
import AdminHome from "../pages/AdminHome/AdminHome";


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
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard> </PrivateRoute>,
      children:[
        {
          path:'userHome',
          element:<UserHome></UserHome>


        },
        {
          path:'adminHome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>


        },
        {
          path:'cart',
          element : <Cart></Cart>
        },
        {
          path:'payment',
          element:<Pay></Pay>


        },
        {
          path:'payment/success/:tranId',
          element:<Success></Success>


        },
        {
          path:'payment/fail/:tranId',
          element:<Fail></Fail>


        },
        {
          path:'paymenthistory',
          element:<PaymentHistory></PaymentHistory>



        },


        {
          path:'addItems',
          element: <AdminRoute> <AddItems></AddItems></AdminRoute>


        },
        {
          path:'updateItem/:id',
          element:<AdminRoute><Updateitem></Updateitem></AdminRoute>,

          loader: ({params })=>fetch(`http://localhost:5000/items/${params.id}`)


        },
       
        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },

        {
          path:'manageItems',
          element:<AdminRoute><Manageitems></Manageitems></AdminRoute>
        },




      ]


    }
  ]);