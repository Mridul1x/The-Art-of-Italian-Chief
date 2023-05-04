import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { userSignIn, loading, user, googleAuth, gitHubAuth } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [check, setCheck] = useState(false);
  const from = location.state?.from?.pathname || "/home";

  const handleButton = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    form.reset();
    setSuccess("");
    setError("");
    userSignIn(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        setSuccess("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  const handleAuth = () => {
    googleAuth()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleGitHubAuth = () => {
    gitHubAuth()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="hero mt-12">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Login!</h1>
        </div>
        <div className="card w-96 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleButton} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div></div>
              <input
                type={check ? "text" : "password"}
                name="password"
                required
                placeholder="password"
                className="input input-bordered"
              />
              <input
                onChange={() => setCheck(!check)}
                type="checkbox"
                className="toggle mt-2"
              />

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p>
              New to this website? Please
              <Link
                className="link link-hover text-cyan-800 font-bold"
                to="/register"
              >
                Register
              </Link>
            </p>
            <div className="form-control mt-4">
              <button className="btn btn-primary mb-2">Login</button>
              <hr className="my-2" />
              <>
                <button onClick={handleAuth} className="btn btn-outline my-2  ">
                  <FaGoogle className="me-2"></FaGoogle>Login with Google
                </button>
                <button onClick={handleGitHubAuth} className=" btn btn-outline">
                  <FaGithub className="me-2"></FaGithub>Login with Github
                </button>
              </>
            </div>
            <p className="text-red-500">{error}</p>
            <p className="text-green-500">{success}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
