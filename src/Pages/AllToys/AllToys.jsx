import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [isAllLoaded, setIsAllLoaded] = useState(false);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/toys?limit=20`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setIsAllLoaded(false);
      });
  }, []);
  
  const handleSeeAll = () => {
    fetch(`http://localhost:5000/toys`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setIsAllLoaded(true);
      });
  };

  const handleSearch = () => {
    fetch(`http://localhost:5000/toys/search/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };
  return (
    <div>
      <div className="flex justify-center my-6">
        <div className="form-control">
          <div className="input-group">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
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
          <tbody>
            {toys.map((toy, index) => (
              <tr key={toy._id} className="hover">
                <th>{index + 1}</th>
                <td>{toy.sellerName}</td>
                <td>{toy.name}</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                  <Link to={`/toy/${toy._id}`}>
                    <button className="btn btn-primary">Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!isAllLoaded && (
        <button onClick={handleSeeAll} className="btn btn-primary">
          See All
        </button>
      )}
    </div>
  );
};

export default AllToys;
