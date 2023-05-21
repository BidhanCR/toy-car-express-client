import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  
  // user logout
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  
  // for nav item active color
  const isActive = (path) => {
    return location.pathname === path ? "text-success" : "";
  };
  
  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-50 shadow">
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
            <li className={`mx-2 ${isActive("/")}`}>
              <Link to="/">Home</Link>
            </li>
            <li className={`mx-2 ${isActive("/allToys")}`}>
              <Link to="/allToys">All Toys</Link>
            </li>
            {user && (
              <li className={`mx-2 ${isActive("/myToys")}`}>
                <Link to="/myToys">My Toys</Link>
              </li>
            )}
            {user && (
              <li className={`mx-2 ${isActive("/addToys")}`}>
                <Link to="/addToys">Add A Toy</Link>
              </li>
            )}
            <li className={`mx-2 ${isActive("/blogs")}`}>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
         <img className="w-12 h-12" src="https://i.ibb.co/Kb6VQK1/logo.png" alt="" />
        <p className="normal-case text-2xl text-success">ToyCarExpress</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li className={`mx-2 ${isActive("/")}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`mx-2 ${isActive("/allToys")}`}>
            <Link to="/allToys">All Toys</Link>
          </li>
          {user && (
            <li className={`mx-2 ${isActive("/myToys")}`}>
              <Link to="/myToys">My Toys</Link>
            </li>
          )}
          {user && (
            <li className={`mx-2 ${isActive("/addToys")}`}>
              <Link to="/addToys">Add A Toy</Link>
            </li>
          )}
          <li className={`mx-2 ${isActive("/blogs")}`}>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <>
          {user && (
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={user.photoURL}
              alt="User"
              title={user.displayName}
            />
          )}
        </>

        {user ? (
          <button
            className="btn btn-success text-white hover:btn-accent ml-4"
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
      </div>
    </div>
  );
};

export default Header;
