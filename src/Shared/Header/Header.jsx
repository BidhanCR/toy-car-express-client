import { Link } from "react-router-dom";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  // user logout
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">All Toys</Link>
            </li>
            {user && (
              <li>
                <Link to="/myToys">My Toys</Link>
              </li>
            )}
            {user && (
              <li>
                <Link to="/addToys">Add A Toy</Link>
              </li>
            )}
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              {user ? (
                <button
                  className="btn btn-success text-white hover:btn-accent"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn btn-success text-white hover:btn-accent">
                    Login
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
        
        <p className="normal-case text-xl">ToyCarExpress</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allToys">All Toys</Link>
          </li>
          {user && (
            <li>
              <Link to="/myToys">My Toys</Link>
            </li>
          )}
          {user && (
            <li>
              <Link to="/addToys">Add A Toy</Link>
            </li>
          )}
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            {user ? (
              <button
                className="btn btn-success text-white hover:btn-accent"
                onClick={handleLogOut}
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-success text-white hover:btn-accent">
                  Login
                </button>
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <p>{moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
      </div>
    </div>
  );
};

export default Header;
