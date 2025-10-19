import React, { use } from "react";
import { Link, NavLink } from "react-router";
import image from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user,logout } = use(AuthContext);

  const handleLogout =()=>{
  logout()
   .then(() => {
        alert('You logout successfully');
      })
      .catch((error) => console.log("Error:", error.message));

  }
  return (
    <div className="flex justify-between items-center mt-5">
      <div className="">{user && user.email}</div>
      <div className="flex gap-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-2">
        <img className="w-12 rounded-full" src={`${user? user.photoURL:image}`} alt="" srcset="" />
        {user ? (
          <button onClick={handleLogout}  className="btn bg-[#403f3f] text-white">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn bg-[#403f3f] text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
