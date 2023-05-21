import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://toy-car-express-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  
  return (
    <section className="text-center mt-8">
      <div className="flex">
        {toys.map((toy, index) => (
          <div className="rounded overflow-hidden relative" key={index}>
            <img
              src={toy.picture}
              alt={toy.name}
              className="w-full border-2  h-[300px] transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 right-0">
              <Link to={`/toy/${toy._id}`}>
                <button className="btn btn-outline btn-success">Details</button>
              </Link>
            </div>
            <p className="absolute bottom-0 left-0 p-2 font-bold">{toy.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
