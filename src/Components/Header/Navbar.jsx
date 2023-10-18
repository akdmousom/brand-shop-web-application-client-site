import { Link } from "react-router-dom";
import userimg from "../../assets/user.png"
import { useContext } from "react";
import { userContext } from "../../Utils/AuthContext/AuthProvider";
import auth from "../../FirebaseConfig/FirebaseConfig";
import toast from "react-hot-toast";
const Navbar = () => {

  const {signOut, userInfo} = useContext(userContext)
  
    const navigation = [
        
        <>
            <li ><Link to={'/'}>Home</Link></li>
            <li ><Link>About</Link></li>
            <li ><Link to={'/add-product'}>Add-Product</Link></li>
            <li ><Link to={'/my-cart'}>My-Cart</Link></li>
        </>
        
    ]
    
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        
                        {navigation}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navigation}
                </ul>
            </div>
            <div className="navbar-end">
            <div className="flex items-center">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          {userInfo ? <span className="badge badge-sm indicator-item">8</span> : <span className="badge badge-sm indicator-item">0</span>}
        </div>
      </label>
      {
        userInfo ? <><div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div></> : ''
      }
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={userimg} />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
               
        {
          userInfo ? <><li>
          <Link to={'/user-profile'} className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li><button onClick={()=> {
          
          toast.success("Logout Successfully")
          signOut(auth)
          
          }
          
          }>Logout</button ></li></> : <><li><Link to={'/login'}>Login</Link></li>
          <li><Link to={'/register'}>Register</Link></li></>
        }
      </ul>
    </div>
  </div>
            </div>
        </div>
    );
};

export default Navbar;