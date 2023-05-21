import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TopRatedToy = () => {
  const [topRatedToy, setTopRatedToy] = useState([]);
  useEffect(() => {
    fetch("https://toy-car-express-server.vercel.app/topRated")
      .then((res) => res.json())
      .then((data) => setTopRatedToy(data));
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto">
      <h4 data-aos="flip-left" className=" text-3xl my-8 font-bold">Recommended For You</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {topRatedToy.map((toy, index) => (
          <div data-aos="flip-up" className="rounded overflow-hidden relative" key={index}>
            <img
              src={toy.picture}
              alt={toy.name}
              className="w-full border-2  h-[200px] transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 right-0 p-1">
              <Link to={`/toy/${toy._id}`}>
                <button className="btn btn-outline btn-success">Buy Now</button>
              </Link>
            </div>
            <p className="absolute inset-x-0 top-0 p-1 font-bold">{toy.name}</p>
            <p className="absolute top-0 right-0 p-1 text-[#f85606]">
              Price: {toy.price}
            </p>
            <p className="absolute bottom-0 left-0 p-1 text-[#f85606] inline-block">
              Top Rated: {toy.rating} <FaStar className="inline-block mb-1"></FaStar>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedToy;
