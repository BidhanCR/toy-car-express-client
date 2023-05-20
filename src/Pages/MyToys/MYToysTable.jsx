import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/Ri";
// import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MYToysTable = ({ toy, index, toys, setToys }) => {
  const { _id, name, picture, price, quantity, rating } = toy;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedPrice, setUpdatedPrice] = useState(price);
  const [updatedQuantity, setUpdatedQuantity] = useState(quantity);
  const [updatedDescription, setUpdatedDescription] = useState("");

  // for product deleting
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };


  const handleUpdate = () => {
    const updatedData = {
      price: updatedPrice,
      quantity: updatedQuantity,
      description: updatedDescription,
    };

    fetch(`http://localhost:5000/updateToy/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data); 
        if(data.modifiedCount>0){
          Swal.fire({
            title: 'Success!',
            text: 'Product added successfully',
            icon: 'success',
            confirmButtonText: 'Success'
          })
          const updatedToy = {
            ...toy,
            price: updatedPrice,
            quantity: updatedQuantity,
            description: updatedDescription,
          };
          const updatedToys = toys.map((item) =>
            item._id === _id ? updatedToy : item
          );
          setToys(updatedToys);
        }
        // Close the modal
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img className="w-12 h-12" src={picture} alt="toypic" />
      </td>
      <td>{name}</td>
      <td className="text-[#f85606]">${price}</td>
      <td>{quantity}</td>
      <td>{rating}</td>
      <td>
        <button onClick={() => setIsModalOpen(true)}>
          <FaRegEdit className="inline-block text-2xl text-accent" />
        </button>
        <button onClick={() => handleDelete(_id)}>
          <RiDeleteBinLine className="inline-block text-2xl text-red-400" />
        </button>
      </td>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-gray-500 rounded-lg p-8 w-1/2">
            <h2 className="text-2xl mb-8 text-center">Update Data</h2>
            <h2 className="text-xl text-center">{name}</h2>
            <div className="mb-4">
              <label htmlFor="price" className="block mb-2 font-bold">
                Price:
              </label>
              <input
                type="number"
                id="price"
                value={updatedPrice}
                onChange={(e) => setUpdatedPrice(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="quantity" className="block mb2 font-bold">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value={updatedQuantity}
                onChange={(e) => setUpdatedQuantity(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block mb-2 font-bold">
                Description:
              </label>
              <textarea
                id="description"
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 mr-2 bg-gray-500 text-white rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </tr>
  );
};

export default MYToysTable;

