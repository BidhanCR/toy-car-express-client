import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MiniPoliceCar = () => {
    const [toys, setToys] = useState([]);
  const subcategory = 'Mini Police Cars';
  useEffect(()=> {
    fetch(`https://toy-car-express-server.vercel.app/policeCar/${subcategory}`)
    .then(res=> res.json())
    .then(data =>{
        console.log(data)
        setToys(data)
    })
  }, [])
    return (
        <div className='p-12'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <p className=' text-xl text-success absolute bottom-0 left-0 p-3'>{toy.name}</p>
            <p className='absolute top-0 right-0 text-[#f85606] mr-1'>Price: ${toy.price}</p>
          </div>
        ))}
      </div>
    </div>
    );
};

export default MiniPoliceCar;