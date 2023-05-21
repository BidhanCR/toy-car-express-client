import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../Hook/useTitle";

const Login = () => {
  const {signIn, googleSignIn, githubSignIn} = useContext(AuthContext);
  useTitle('login')
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("user logged in successfully");
        navigate(from, { replace: true } );
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/wrong-password") {
          setError("Your password is incorrect");
        } else if (error.code === "auth/user-not-found") {
          setError("user not found, please try again");
        }
        
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
      <ToastContainer />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold  my-4">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                    className="px-4 py-2 rounded-md input input-bordered input-success w-full"
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
                      className="px-4 py-2 rounded-md input input-bordered input-success w-full"
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
                  <button className="px-4 py-2 w-full btn  btn-success rounded-md text-xl hover:btn-accent">Login</button>
                  <p className="text-error text-center mt-2">{error}</p>
                </div>
              </div>
            </form>
          </div>
          <p className="text-bold text-xl ">
            New to here please{" "}
            <Link state={{from}} className="btn-link text-success" to="/register">
              Register
            </Link>
          </p>
          <div className="divider bg-gray-500 rounded-md"></div>
          <div className="text-2xl font-bold">Login With Social Networks</div>
          <div>
            <button onClick={signInWithGoogle} className=" btn btn-outline text-success hover:btn-accent">
              {" "}
              <FaGoogle className="mr-4 text-2xl" /> google
            </button>
            <button onClick={signInWithGithub} className=" btn btn-outline text-success ml-4 hover:btn-accent">
              <FaGithub  className="mr-4 text-2xl" /> Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
