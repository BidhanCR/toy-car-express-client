import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTitle from "../../Hook/useTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [isAllLoaded, setIsAllLoaded] = useState(false);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    AOS.init();
  }, []);
  useTitle('All Toys')
  useEffect(() => {
    fetch(`https://toy-car-express-server.vercel.app/toys?limit=20`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setIsAllLoaded(false);
      });
  }, []);

  const handleSeeAll = () => {
    fetch(`https://toy-car-express-server.vercel.app/toys`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setIsAllLoaded(true);
      });
  };

  const handleSearch = () => {
    fetch(`https://toy-car-express-server.vercel.app/toys/search/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
        setSearchText("");
      });
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div>
      <h2 className="text-center text-4xl my-8 text-success font-bold">
        All Toys
      </h2>
      <div className="flex justify-center my-6">
        <div className="form-control">
          <div className="input-group">
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              onKeyDown={handleKeyDown}
              placeholder="Search…"
              className="input input-bordered"
            />
            <button
              onClick={handleSearch}
              className="btn btn-square btn-success"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody  >
            {toys.map((toy, index) => (
              <tr data-aos="flip-up" key={toy._id} >
                <th>{index + 1}</th>
                <td>{toy.sellerName}</td>
                <td>{toy.name}</td>
                <td>${toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                  <Link to={`/toy/${toy._id}`}>
                    <button className="btn btn-outline btn-success">
                      Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!isAllLoaded && (
        <div className="flex justify-center">
          <button
            onClick={handleSeeAll}
            className="btn btn-outline btn-success text-xl w-1/2 my-12"
          >
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default AllToys;
