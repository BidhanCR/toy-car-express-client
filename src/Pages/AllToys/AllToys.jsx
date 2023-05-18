import { useEffect, useState } from "react";


const AllToys = () => {
    
      const [toys, setToys] = useState([]);
      useEffect(()=>{
        fetch('http://localhost:5000/allToys')
        .then(res => res.json())
        .then(data => setToys(data))
      }, [])
      
    return (
        <section className="text-center mt-8">
      <h2 className="text-3xl font-bold mb-4">Toy Car Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {toys.map((toy) => (
          <div className="rounded overflow-hidden" key={toy._id}>
            <img src={toy.image} alt='' className="w-full border-2  h-[300px] transform hover:scale-105 transition-transform duration-300" />
            <div>
            <p>{toy.name}</p>
            <button>Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
};

export default AllToys;