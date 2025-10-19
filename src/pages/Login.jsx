import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [error,setError]=useState('');
  const {login}=use(AuthContext);
  const location = useLocation();
  const navigate =useNavigate();
  // console.log(location);
  
  const handleLogin =(e)=>{
    e.preventDefault();
    const email =e.target.email.value;
    const password =e.target.password.value;
    // console.log(email,password);
    login(email,password)
    .then((result) => {
        const user = result.user;
        // console.log("User created:", user);
        navigate(`${location.state? location.state:'/'}`)
      })
      .catch((error) => setError(error.message));
  }
  return (
    <div className="">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <h1 className="text-center mt-2">Login your account</h1>
        <form onSubmit={handleLogin} className="card-body py-5">
          <fieldset className="fieldset">
            {/* email  */}
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            {/* password  */}
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {
              error && <p className="text-red-400">{error}</p>
            }
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            <p className="text-[20px]">
              Don't have an account?Please{" "}
              <Link
                className="font-bold hover:text-amber-100"
                to="/auth/register"
              >
                Register
              </Link>
            </p>
            
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
