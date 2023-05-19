import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const {signIn, googleSignIn, githubSignIn} = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true } );
      })
      .catch((error) => {
        console.log(error)
      });
  };

  // sign in With google
  const signInWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true } );
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const signInWithGithub = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true } );
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="input input-bordered pr-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-2 flex items-center px-2 text-gray-700"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? (
                        <FaEye className="w-5 h-5" />
                      ) : (
                        <FaEyeSlash className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
            {/* <p>{error}</p> */}
          </div>
          <p className="text-bold text-xl">
            New to here please{" "}
            <Link state={{from}} className="btn-link" to="/register">
              Register
            </Link>
          </p>
          <div className="divider bg-lime-600 rounded-md"></div>
          <div className="text-2xl font-bold">Login With Social Networks</div>
          <div>
            <button onClick={signInWithGoogle} className=" btn btn-outline btn-primary">
              {" "}
              <FaGoogle className="mr-4 text-2xl" /> google
            </button>
            <button onClick={signInWithGithub} className=" btn btn-outline btn-primary ml-4 ">
              <FaGithub  className="mr-4 text-2xl" /> Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
