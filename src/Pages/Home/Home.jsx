import Gallery from "../Gallery/Gallery";
import ToyByCategory from "../ToyByCategory/ToyByCategory";
import Banner from "./Banner";
import Marquee from "react-fast-marquee";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h3 className="text-3xl font-bold mt-12 text-center">Toys Gallery</h3>
      <Marquee direction="left" speed={60} pauseOnHover={true}>
        <Gallery></Gallery>
      </Marquee>
      <ToyByCategory></ToyByCategory>
    </div>
  );
};

export default Home;
