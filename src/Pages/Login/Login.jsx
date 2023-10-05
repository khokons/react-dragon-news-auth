import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

  const {logIn} = useContext(AuthContext);
  const location = useLocation();
  console.log("location in the logiin [page", location);
  const navigate = useNavigate()

    const handleLogin = (e) =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);

        logIn(email,password)
        .then(result =>{
          console.log(result.user);

          navigate(location?.state ? location.state : "/");
        })

        .catch(error =>{
          console.error(error);
        })
     
        
    }


  return (
    <div>
      <Navbar></Navbar>

      <div className="mt-10">
        <h1 className="text-5xl font-bold text-center">Login now!</h1>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              name="password"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">Do not have an account? 
          <Link className="text-blue-700" to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
