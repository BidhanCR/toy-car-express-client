import { useLoaderData, useLocation } from "react-router-dom";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import { BsShare, BsHeart, BsHeartFill } from "react-icons/Bs";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToyDetail = () => {
  const toy = useLoaderData();
  const {
    _id,
    name,
    picture,
    rating,
    price,
    subcategory,
    quantity,
    description,
    sellerName,
  } = toy;

  const starStyles = {
    color: "#ffd700",
  };

  const [isLiked, setIsLiked] = useState(false);
  const location = useLocation();
  const itemId = _id;

  useEffect(() => {
    const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];
    setIsLiked(likedItems.includes(itemId));
  }, [itemId, location]);

  const handleLike = () => {
    const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];

    if (isLiked) {
      setIsLiked(false);
      const updatedLikedItems = likedItems.filter((item) => item !== itemId);
      localStorage.setItem("likedItems", JSON.stringify(updatedLikedItems));
      
    } else {
      setIsLiked(true);
      const updatedLikedItems = [...likedItems, itemId];
      localStorage.setItem("likedItems", JSON.stringify(updatedLikedItems));
      toast.success("favorited successfully");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="grid grid-cols-1 md:grid-cols-3 py-8">
        <div className="rounded overflow-hidden">
          <img
            src={picture}
            alt="picture"
            className="w-full border-2  h-[300px] transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="ml-0 md:ml-12">
          <h2 className="text-3xl font-bold mb-2">{name}</h2>
          <div className="flex justify-between mb-2">
            <p>
              <Rating
                initialRating={rating}
                emptySymbol={<FaRegStar style={starStyles} />}
                fullSymbol={<FaStar style={starStyles} />}
                readonly
              />
            </p>
            <div className="mr-4 flex gap-4 text-2xl">
              <button>
                <BsShare />
              </button>
              <div>
                <button onClick={handleLike}>
                  {isLiked ? (
                    <BsHeartFill className="text-orange-400" />
                  ) : (
                    <BsHeart />
                  )}
                </button>
              </div>
            </div>
          </div>
          <p className="text-[#f85606] mb-4 text-2xl">Price: ${price}</p>
          <p className="mb-2 text-2xl">Subcategory: {subcategory}</p>
          <p className="mb-2 text-2xl">Available: {quantity} pcs</p>
        </div>
        <div className="ml-0 md:ml-4">
          <h3 className="text-3xl">Short description of product</h3>
          <p className="mb-12">{description}</p>
          <p className="text-2xl">
            <span className="text-[#f85606]">Sold by:</span> {sellerName}
          </p>
        </div>
      </div>
    </>
  );
};

export default ToyDetail;
