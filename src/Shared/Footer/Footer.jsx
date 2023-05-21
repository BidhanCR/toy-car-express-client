import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLocationArrow,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <footer data-aos="fade-up" className="bg-gray-800 py-8 mt-16">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full lg:w-1/3 px-4 mb-4 md:mb-0">
          <div className="flex items-center mb-4">
            <img
              src="https://i.ibb.co/Kb6VQK1/logo.png"
              alt="logo"
              className="w-10 h-10"
            />
            <span className="ml-2 text-white text-lg">ToyCarExpress</span>
          </div>
          <p className="text-gray-400 mb-4">
            ToyCarExpress is a store that specializes in selling toys and games
            designed specifically for children.
          </p>
          <div className="flex flex-col text-white">
            <p className="text-white hover:text-success mr-2 flex items-center">
              <FaLocationArrow className="mr-2" /> Address: 1800 Abbot Kinney
              Nebraska UK
            </p>
            <p className="text-white hover:text-success mr-2 flex items-center">
              <MdAlternateEmail className="mr-2" /> Email: toycarexpress@gmail.com
            </p>
            <p className="text-white hover:text-success mr-2 flex items-center">
              <FiPhoneCall className="mr-2" /> Phone: (012) 345 6789
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-4 md:mb-0">
          <h3 className="text-white text-lg mb-4">Quick Links</h3>
          <div className="flex flex-col">
            <Link href="#" className="text-white hover:text-success">
              Help Center
            </Link>
            <Link href="#" className="text-white hover:text-success">
              About us
            </Link>
            <Link href="#" className="text-white hover:text-success">
              Contact us
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 md:mb-0">
          <h3 className="text-white text-lg mb-4">Follow Us On</h3>
          <div className="flex flex-col">
            <Link
              href="#"
              className="text-white hover:text-success mr-2 flex items-center"
            >
              <FaFacebook className="mr-1" /> Facebook
            </Link>
            <Link
              href="#"
              className="text-white hover:text-success mr-2 flex items-center"
            >
              <FaTwitter className="mr-1" /> Twitter
            </Link>
            <Link
              href="#"
              className="text-white hover:text-success flex items-center"
            >
              <FaInstagram className="mr-1" /> Instagram
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Toy Car Website. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
