import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../Hook/useTitle";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  useTitle('register')
  const location = useLocation();
  const navigate = useNavigate();
 const from = location.state?.from || "/"; 

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleRegister = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(name, email, photo, password);
    
    // password validations 

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase letter.");
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("Please add at least two numbers.");
      return;
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setError("Please add at least one special character.");
      return;
    } else if (password.length < 6) {
      setError("Please add at least 6 characters in your password.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setError("");
        form.reset();
        toast.success("User has created successfully");
        updateUserData(result.user, name, photo);
        navigate(from, { replace: true });

      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/weak-password") {
          setError("Please add at least 6 characters in your password");
        } else if (error.code === "auth/email-already-in-use") {
          setError("This email is already registered");
        } else if (error.code === "auth/invalid-email") {
          setError("Please enter a valid email address");
        } else {
          setError(error.message);
        }
      });
  };

  // updating user profile data
  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log("user name updated");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <ToastContainer />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-3">Register here!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    required
                    className="px-4 py-2 rounded-md input input-bordered input-success w-full"
                  />
                </div>
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
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    name="photo"
                    placeholder="photo url"
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
                      className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700"
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
                  <button className="px-4 py-2 w-full btn  btn-success rounded-md text-xl hover:btn-accent">Register</button>
                  <p className="text-error text-center mt-2">{error}</p>
                </div>
              </div>
            </form>
          </div>
          <p className="text-bold text-xl">
            Already have an account?{" "}
            <Link className="btn-link text-success" to="/login">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
