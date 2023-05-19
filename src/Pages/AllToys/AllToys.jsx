import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [isAllLoaded, setIsAllLoaded] = useState(false);
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
  return (
    <div>
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
        <button onClick={handleSeeAll} className="btn btn-primary">See All</button>
      )}
  
    </div>
  );
};

export default AllToys;
