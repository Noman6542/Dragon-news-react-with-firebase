import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { creatUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, photo, email, password);
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });

            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => console.log("Error:", error.message));
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <h1 className="text-center mt-2">Login your account</h1>
      <form onSubmit={handleRegister} className="card-body py-5">
        <fieldset className="fieldset">
          {/*Name  */}

          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            required
            className="input"
            placeholder="Name"
          />

          {/* Photo URL  */}

          <label className="label">Photo URL</label>
          <input
            type="Photo URL"
            required
            name="photo"
            className="input"
            placeholder="Photo URL"
          />

          {/* email  */}

          <label className="label">Email</label>
          <input
            type="email"
            required
            name="email"
            className="input"
            placeholder="Email"
          />

          {/* password  */}

          <label className="label">Password</label>
          <input
            type="password"
            required
            name="password"
            className="input"
            placeholder="Password"
          />

          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
          <p className="text-[20px]">
            Already have an account?Please{" "}
            <Link className="font-bold hover:text-amber-100" to="/auth/login">
              Login
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
