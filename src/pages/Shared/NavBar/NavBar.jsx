import { useContext,  } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user,loading,logout } = useContext(AuthContext);



  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch(error => console.log(error));
  };








const navOptions = <>

     <li style={{ marginTop: '-1px' }}><Link to="/">Home</Link></li>
      <li style={{ marginTop: '-1px' }}><Link to="/categoris/Cooking">Categories</Link></li>
      <li style={{ marginTop: '-1px' }}><Link to="/secret">Secret</Link></li>
   
         
      {loading  ? (
        <li style={{ marginTop: '-6px' }}><button style={{ fontWeight: 'normal', marginBottom: '2px', padding: '4px 8px', fontSize: '14px' }} onClick={handleLogOut} className="btn btn-ghost">Logout</button></li>
      ) : user ? (
        <li style={{ marginTop: '-6px' }}>
          <button style={{ fontWeight: 'normal', marginBottom: '2px', padding: '4px 8px', fontSize: '14px' }} onClick={handleLogOut} className="btn btn-ghost">Logout</button>
        </li>
      ) : (
        <li><Link to="/login">Login</Link></li>
      )}
    </>
  



    return (
        <>
        <div className="navbar fixed max-w-screen-xl z-10 bg-opacity-30  bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

        {navOptions}
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Grocery Shop</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
            
        </>
    );
};

export default NavBar;