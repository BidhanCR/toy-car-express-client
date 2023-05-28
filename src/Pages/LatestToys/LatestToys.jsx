import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const LatestToys = () => {
    const [latestToys, setLatestToys] = useState([])
    useEffect(()=>{
        fetch('https://toy-car-express-server.vercel.app/latest')
        .then(res => res.json())
        .then(data => setLatestToys(data))
    },[])

    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className="container mx-auto py-8">
      <h2 data-aos="flip-left" className="text-3xl font-bold mb-4">Latest Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {latestToys.map((toy) => (
          <div key={toy._id} className="bg-white rounded-lg shadow-xl border p-4 relative">
            <img src={toy.picture} alt={toy.name} className="w-full h-40 object-cover mb-4" />
            <p className="badge badge-secondary absolute top-0 start-0 m-2">NEW</p>
            <h3 className="text-lg font-semibold mb-2">{toy.name}</h3>
            <p className="text-[#f85606]">${toy.price}</p>
            <Link to={`/toy/${toy._id}`}>
                    <button className="btn btn-outline btn-success absolute bottom-0 right-0">
                      View Details
                    </button>
                  </Link>
          </div>
          
        ))}
      </div>
    </div>
    );
};

export default LatestToys;