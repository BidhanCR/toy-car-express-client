import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MYToysTable from "./MYToysTable";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`https://toy-car-express-server.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [user]);
  return (
    <div>
      <h3 className="text-center text-4xl font-bold my-12 text-success">My Toys</h3>
      <div>
      </div>
      <div className="overflow-x-auto ">
        <table className="table table-compact w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Toys Image</th>
              <th>Toys Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Ratings</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, index) => (
              <MYToysTable key={toy._id} index={index} toy={toy}
              toys={toys}
              setToys={setToys}
              ></MYToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
