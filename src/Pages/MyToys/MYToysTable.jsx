import { FaRegEdit } from "react-icons/fa";
import {RiDeleteBinLine} from "react-icons/Ri";


const MYToysTable = ({toy, index}) => {
    const {name, picture, price, quantity, rating} = toy;
    return (
        <tr>
              <th>{index+1}</th>
              <td>
                <img className="w-12 h-12" src={picture} alt="toypic" />
              </td>
              <td>{name}</td>
              <td>{price}</td>
              <td>{quantity}</td>
              <td>{rating}</td>
              <td>
                <button><FaRegEdit className="inline-block text-2xl"/></button>
                <button><RiDeleteBinLine className="inline-block text-2xl "/></button>
              </td>
            </tr>
    );
};

export default MYToysTable;