

const Gallery = () => {
    const carImages = [
        'https://media.istockphoto.com/id/1336889958/photo/classic-model-toy-car-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=D8rwhv8-ntojZLGPARPlhwlR7qtMNxOjTySntBrayo0=',
        'https://media.istockphoto.com/id/121666842/photo/blue-toy-car-trabant-isolated-on-white.jpg?s=612x612&w=is&k=20&c=svcZQRNsMjLiQUQlehdfqXJjvybCT7VNXMVgEavnmrk=',
        'https://media.istockphoto.com/id/680079488/photo/retro-car-orange-1960.jpg?b=1&s=170667a&w=0&k=20&c=XRq_2v2IXp6AONLJxddQtgvfh15mGNqgSZ3XyvjO_u4=',
        'https://media.istockphoto.com/id/1336889958/photo/classic-model-toy-car-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=D8rwhv8-ntojZLGPARPlhwlR7qtMNxOjTySntBrayo0=',
        'https://media.istockphoto.com/id/121666842/photo/blue-toy-car-trabant-isolated-on-white.jpg?s=612x612&w=is&k=20&c=svcZQRNsMjLiQUQlehdfqXJjvybCT7VNXMVgEavnmrk=',
        'https://media.istockphoto.com/id/680079488/photo/retro-car-orange-1960.jpg?b=1&s=170667a&w=0&k=20&c=XRq_2v2IXp6AONLJxddQtgvfh15mGNqgSZ3XyvjO_u4=',
        // Add more image URLs here
      ];
    return (
        <section className="text-center mt-8">
      <h2 className="text-3xl font-bold mb-4">Toy Car Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {carImages.map((image, index) => (
          <div className="rounded overflow-hidden" key={index}>
            <img src={image} alt={`Car ${index + 1}`} className="w-full border-2  h-[300px] transform hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </section>
    );
};

export default Gallery;