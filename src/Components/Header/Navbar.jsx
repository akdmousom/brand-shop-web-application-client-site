import { Link } from "react-router-dom";
import userimg from "../../assets/user.png"
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../Utils/AuthContext/AuthProvider";
import auth from "../../FirebaseConfig/FirebaseConfig";
import toast from "react-hot-toast";
import { UserDataContext } from "../../Utils/UserDataContext/UserData";
import logo from '../../assets/react.svg';
const Navbar = () => {

  const { signOut, userInfo } = useContext(userContext)
  const { userData, cartLength } = useContext(UserDataContext)

  const [profileData, setProfileData] = useState()

  useEffect(() => {
    if (userInfo == null) {

      setProfileData(null)

    } else {
      const email = userInfo?.email
      const userDataProfile = userData?.find(user => user?.email == email)

      setProfileData(userDataProfile)
    }
  }, [userInfo])





  const navigation = [

    <>
      <li className="text-base font-medium" ><Link to={'/'}>Home</Link></li>
      <li className="text-base font-medium" ><Link>About</Link></li>

      {
              userInfo ? <><li className="text-base font-medium" ><Link to={'/add-product'}>Add-Product</Link></li>
              <li className="text-base font-medium" ><Link to={'/my-cart'}>My-Cart</Link></li></> : ''
            }

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
        <div className="flex gap-2 items-center">
          <div><img src={logo} alt="" /></div>
          <div><h1 className="text-2xl font-bold text-secondary">beautify</h1></div>
        </div>
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
                {userInfo ? <span className="badge badge-sm indicator-item">{cartLength ? cartLength : "0"}</span> : <span className="badge badge-sm indicator-item">0</span>}
              </div>
            </label>
            {
              userInfo ? <><div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                  <span className="font-bold text-lg">{cartLength ? cartLength : "0"} Items</span>
                          <div className="card-actions">
                    <Link to={'/my-cart'}><button className="btn btn-primary btn-block">View cart</button></Link>
                  </div>
                </div>
              </div></> : ''
            }
          </div>
          
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              
              <div className="w-10 rounded-full">
                {
                  userInfo ? <img src={profileData?.profileimg} /> : <img src={userimg} />
                }
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

              {
                userInfo ? <><li>
                  <Link to={'/user-profile'} className="justify-between">
                  <div>
                <h1>{profileData?.name}</h1>
              </div>
                    <span className="badge">New</span>
                  </Link>
                </li>
                  <li><Link to={'/dashboard'}>Dashboard</Link></li>
                  <li><button onClick={() => {

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