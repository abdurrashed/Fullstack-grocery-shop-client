
import {  FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser} from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';


const Dashboard = () => {
   const [cart]=useCart();
 
    const [isAdmin]= useAdmin();

    
    
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-blue-600'>
                <ul className='menu p-4'>
                      {

                         isAdmin?<>



<li>
                        

                        
                        <NavLink to="/dashboard/adminHome">
                         <FaHome></FaHome>
                            Admin Home</NavLink></li>


                            <li>
                        

                        
                      
                        <NavLink to="/dashboard/addItems">
                        <FaCalendar></FaCalendar>
                            Add Items</NavLink></li>


                            <li>
                        

                        
                        <NavLink to="/dashboard/manageItems">
                        <FaList></FaList>
                            Manage Items</NavLink></li>
                            <li>
                        

                        
                        <NavLink to="/dashboard/cart">
                        <FaShoppingCart></FaShoppingCart>
                            My Cart({cart.length})</NavLink></li>

                            <li>
                        

                        
                        <NavLink to="/dashboard/users">
                        <FaUser></FaUser>
                            All Users</NavLink></li>

                         
                         


                         </>
                         :
                         <>

<li>
                        

                        
                        <NavLink to="/dashboard/userHome">
                         <FaHome></FaHome>
                            User Home</NavLink></li>


                            <li>
                        

                        
                        <NavLink to="/dashboard/cart">
                        <FaShoppingCart></FaShoppingCart>
                            My Cart({cart.length})</NavLink></li>

                           


                            <li>
                        

                        
                        <NavLink to="/dashboard/paymenthistory">
                        <FaList></FaList>
                            Payment History</NavLink></li>
                         
                         </>

                      }





                  
                    

                            <div className="divider"></div>

                <li>
                        
                        <NavLink  to="/">
                         <FaHome></FaHome>
                             Home</NavLink></li>


                             <li>
                        
                        <NavLink  to="/categoris/Cooking">
                         <FaSearch></FaSearch>
                             Order</NavLink></li>

                             <li>
                        
                        <NavLink  to="/categoris/contact">
                         <FaEnvelope></FaEnvelope>
                             Contact</NavLink></li>

                </ul>
                
                


            </div>
            <div className='flex-1 p-8'>
                <Outlet></Outlet>

            </div>
            
        </div>
    );
};

export default Dashboard;