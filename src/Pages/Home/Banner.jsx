
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css";


SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const Banner = () => {
  return (
    <div className="swiper-container">
      <Swiper speed={1000}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect="fade"
        className="mySwiper">
        <SwiperSlide>
          <div className="relative h-[500px]">
            <img src="https://media.istockphoto.com/id/1336889958/photo/classic-model-toy-car-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=D8rwhv8-ntojZLGPARPlhwlR7qtMNxOjTySntBrayo0=" alt="Slide 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
              <h2 className="text-3xl font-bold">Slide 1 Title</h2>
              <p></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[500px]">
            <img src="https://media.istockphoto.com/id/121666842/photo/blue-toy-car-trabant-isolated-on-white.jpg?s=612x612&w=is&k=20&c=svcZQRNsMjLiQUQlehdfqXJjvybCT7VNXMVgEavnmrk=" alt="Slide 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
              <h2 className="text-3xl font-bold">Slide 2 Title</h2>
              <p></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[500px]">
            <img src="https://media.istockphoto.com/id/680079488/photo/retro-car-orange-1960.jpg?b=1&s=170667a&w=0&k=20&c=XRq_2v2IXp6AONLJxddQtgvfh15mGNqgSZ3XyvjO_u4=" alt="Slide 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
              <h2 className="text-3xl font-bold">Slide 3 Title</h2>
              <p></p>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Banner;




