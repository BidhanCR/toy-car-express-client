import { useEffect, useState } from "react";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllToys = () => {
  const starStyles = {
    color: "#ffd700",
  };
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <section className="text-center mt-8">
      <h2 className="text-3xl font-bold mb-4">Toy Car Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {toys.map((toy) => (
          <div className="rounded overflow-hidden relative" key={toy._id}>
            <img
              src={toy.image}
              alt=""
              className="w-full border-2  h-[300px] transform hover:scale-105 transition-transform duration-300"
            />
            <div className="flex justify-between absolute inset-x-0 bottom-0 p-2 items-center">
              <div>
                <p className="font-bold">{toy.name}</p>
                <div className="flex items-center">
                  <p>
                    <Rating
                      initialRating={toy.ratings}
                      emptySymbol={<FaRegStar style={starStyles} />}
                      fullSymbol={<FaStar style={starStyles} />}
                      readonly
                    />
                  </p>
                  {toy.reviews && <p className="ml-1 mb-1">({toy.reviews})</p>}
                </div>
              </div>
              <Link to={`/allToys/${toy._id}`}>
              <button className="btn btn-outline bg-[#e1c5ac] hover:bg-[#f85606]">
                Details
              </button>
              </Link>
              
            </div>
            <p className="absolute top-0 right-0 p-2 text-[#f85606]">
              Price: ${toy.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllToys;
