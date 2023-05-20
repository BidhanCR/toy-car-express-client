import Gallery from "../Gallery/Gallery";
import Banner from "./Banner";
import Marquee from "react-fast-marquee";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h3 className="text-3xl font-bold mt-12 text-center">Toys Gallery</h3>
      <Marquee direction="left" speed={40} pauseOnHover={true}>
        <Gallery></Gallery>
      </Marquee>
 
    </div>
  );
};

export default Home;
