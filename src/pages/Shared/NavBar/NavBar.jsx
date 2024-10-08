import { useContext,  } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../Hooks/useCart";
import Search from "../../../Components/Search";
import useAdmin from "../../../Hooks/useAdmin";


const NavBar = () => {
  const {
    user,loading,logout } = useContext(AuthContext);

  const [cart]=useCart();
  const [isAdmin]=useAdmin();

  console.log('cart name',cart);



  const handleLogOut = () => {
    logout()
 
      .then(() => {})
      .catch(error => console.log(error));
  };



  







const navOptions = <>

     <li style={{ marginTop: '-1px' }}>
    
    <Link className="btn btn-ghost  hover:bg-blue-600" to="/">Home</Link>

</li>
<li style={{ marginTop: '-1px' }}>

    <Link className=" btn btn-ghost  hover:bg-blue-600" to="/categoris/Cooking">Categories</Link>
</li>
{
  
  user &&isAdmin && <li style={{ marginTop: '-1px' }}>

  <Link className=" btn btn-ghost  hover:bg-blue-600" to="/dashboard/adminHome">Dashboard</Link>
</li>

}

{
  
  user && !isAdmin && <li style={{ marginTop: '-1px' }}>

  <Link className=" btn btn-ghost  hover:bg-blue-600" to="/dashboard/userHome">Dashboard</Link>
</li>



}


<li style={{ marginTop: '-1px' }}>
 
    <Link className=" btn btn-ghost  hover:bg-blue-600" to="/dashboard/cart">
      <div style={{ display: 'flex', alignItems: 'center' , gap:'6px' }}>
        <div>
          <FaShoppingCart style={{ width: '20px', height: '20px' }} />
        </div> 
        <div className="badge badge-secondary">+{cart.length}</div>
      </div>
    </Link>
 
</li>
   
         
      {loading  ? (
      <li style={{ marginTop: '1/2px' }}>
      <Link onClick={handleLogOut} className="btn btn-ghost  hover:bg-blue-600">Logout</Link>
    </li>
      ) : user ? (
       
        <>
       
        <li style={{ marginTop: '1/2px' }}>
          <Link onClick={handleLogOut} className="btn btn-ghost  hover:bg-blue-600">Logout</Link>
        </li>
      </>
      ): (
        
  <li style={{marginTop: '-1px' }}>
<Link className="btn btn-ghost hover:bg-blue-600 " to="/login">

    Login
 
  </Link>
</li>
      )}
    </>



    return (
        <>
        <div className="navbar fixed max-w-screen-xl z-10 bg-opacity-40 bg-black text-white">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

        {navOptions}
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl mb-2">Grocery Shop</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navOptions}
    
    </ul>
  </div>
  <div className="navbar-end mb-1">
      <Search></Search>
  </div> 
  
 
  
  
</div>

            
        </>
    );
    };
  

export default NavBar;