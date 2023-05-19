
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddToys = () => {
  const {user} = useContext(AuthContext);
    const handleAddToy = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const picture = form.picture.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const newToy = {
        name, picture, sellerName, sellerEmail, subcategory, price, rating, quantity, description
    }
    console.log(newToy);

    fetch('http://localhost:5000/addToys', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newToy)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Your product added successfully',
          icon: 'success',
          confirmButtonText: 'Success'
        })
        form.reset();
      }
    })
  }
    return (
    <div className="bg-gray-200">
        <div className="max-w-md mx-auto py-6">
      <form onSubmit={handleAddToy}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="picture" className="block font-medium mb-1">
              Picture URL:
            </label>
            <input
              type="text"
              id="picture"
              name="picture"
              required
              className="w-full px-4 py-2 rounded-md
               focus:outline-blue-500 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
            />
          </div>

          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-md focus:outline-blue-500 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <label htmlFor="sellerName" className="block font-medium mb-1">
              Seller Name:
            </label>
            <input
              type="text"
              id="sellerName"
              name="sellerName"
              defaultValue={user?.displayName}
              className="w-full px-4 py-2 rounded-md focus:outline-blue-500 border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="sellerEmail" className="block font-medium mb-1">
              Seller Email:
            </label>
            <input
              type="email"
              id="sellerEmail"
              name="sellerEmail"
              value={user?.email}
              readOnly
              className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-100 focus:outline-blue-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <label htmlFor="subcategory" className="block font-medium mb-1">
              Sub-category:
            </label>
            <select
              id="subcategory"
              name="subcategory"
              className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-100 focus:outline-blue-500"
            >
              <option value="Super Cars Toys">Super Cars Toys</option>
              <option value="Regular Cars Toys">Regular Cars Toys</option>
              <option value="Truck Toys">Truck Toys</option>
              <option value="Mini Fire Truck">Mini Fire Truck</option>
              <option value="Mini Polish Cars">Mini Polish Cars</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block font-medium mb-1">
              Price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              required
              className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-100 focus:outline-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <label htmlFor="rating" className="block font-medium mb-1">
              Rating:
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="0"
              max="5"
              step="0.1"
              className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-100 focus:outline-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block font-medium mb-1">
              Available Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-100 focus:outline-blue-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-1">
            Detail Description:
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-100 focus:outline-blue-500"
          ></textarea>
        </div>

        <div className="flex">
          <button
            type="submit"
            className="px-4 py-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Toy
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddToys;