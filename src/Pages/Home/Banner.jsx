import { Link } from "react-router-dom";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const Banner = () => {
  return (
    <div className="swiper-container mt-16">
      <Swiper
        speed={1000}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect="fade"
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative h-[500px]">
            <img
              src="https://i.ibb.co/h7N4kWX/istockphoto-1359811855-612x612.jpg"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-12">
              <p className="text-xl">Get ready for a thrilling ride into the world of car toys! Our car toy website is your one-stop destination for all things automotive fun. Experience the joy of speed and precision with our top-notch collection of cars, featuring iconic models from renowned brands. From classic vintage cars to modern supercars.</p>
              <Link to="/allToys"><button className="btn btn-success">Explore</button></Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[500px]">
            <img
              src="https://i.ibb.co/vHn9csg/istockphoto-646044526-612x612.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-12">
            <p className="text-xl">Get ready for a thrilling ride into the world of car toys! Our car toy website is your one-stop destination for all things automotive fun. Experience the joy of speed and precision with our top-notch collection of cars, featuring iconic models from renowned brands. From classic vintage cars to modern supercars.</p>
            <Link to="/allToys"><button className="btn btn-success">Explore</button></Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[500px]">
            <img
              src="https://i.ibb.co/m6RcNgp/adorable-toddler-girl-playing-with-sand-sandbox-playground-157912-1823.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-12">
            <p className="text-xl">Get ready for a thrilling ride into the world of car toys! Our car toy website is your one-stop destination for all things automotive fun. Experience the joy of speed and precision with our top-notch collection of cars, featuring iconic models from renowned brands. From classic vintage cars to modern supercars.</p>
            <Link to="/allToys"><button className="btn btn-success">Explore</button></Link>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[500px]">
            <img
              src="https://i.ibb.co/fpYXm3g/one-cute-boy-playing-with-toy-car-outdoors-generated-by-ai-24640-89728.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-12">
            <p className="text-xl">Get ready for a thrilling ride into the world of car toys! Our car toy website is your one-stop destination for all things automotive fun. Experience the joy of speed and precision with our top-notch collection of cars, featuring iconic models from renowned brands. From classic vintage cars to modern supercars.</p>
            <Link to="/allToys"><button className="btn btn-success hover:btn-accent">Explore</button></Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
