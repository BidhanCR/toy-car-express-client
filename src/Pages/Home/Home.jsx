import Gallery from "../Gallery/Gallery";
import ToyByCategory from "../ToyByCategory/ToyByCategory";
import Banner from "./Banner";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Banner></Banner>
      <h3 data-aos="flip-left" className="text-3xl font-bold mt-12 text-center">Toys Gallery</h3>
      <Marquee direction="left" speed={60} pauseOnHover={true}>
        <Gallery></Gallery>
      </Marquee>
      <ToyByCategory></ToyByCategory>
    </div>
  );
};

export default Home;
