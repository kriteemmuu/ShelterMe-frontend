// import { useNavigate } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { getAllCartApi, removeCartApi,updateCartQuantityApi } from "../../apis/Api";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";


// function MyCart() {
//   const [quantity,setQuantity]=useState();
//   const [cartItems, setCartItems] = useState([]);
//   const user = JSON.parse(localStorage.getItem("user"));
//   const navigate = useNavigate();

//   const fetchMyCartItems = () => {
//    const response= getAllCartApi(user._id)
//       .then((res) => {
//         setCartItems(res?.data?.carts);
//       })
//       .catch((err) => {
//         console.error(err);
//         toast.error(err.message);
//       });
//       console.log(response)
//   };

//   useEffect(() => {
//     fetchMyCartItems();
//   }, []);

//   const total = cartItems.reduce(
//     (acc, item) => acc + (item.products.productPrice ?? 0)  * (item.quantity ?? 1),
//     0
//   );

//   const handleQuantityChange = (itemId, increment) => {
//     const updatedCartItems = cartItems.map((item) => {
//       if (item._id === itemId) {
//         const newQuantity = item.quantity + increment;
//         return { ...item, quantity: newQuantity > 0 ? newQuantity : item.quantity }; 
//       }
//       return item;
//     });
  
//     setCartItems(updatedCartItems); 
  
//     // Send the API request to update the quantity on the server
//     updateCartQuantityApi({ itemId, newQuantity: updatedCartItems.find((item) => item._id === itemId).quantity })
//       .then((res) => {
//         if (res.data.success) {
//           toast.success("Quantity updated");
//           fetchMyCartItems(); // Fetch updated cart items to sync with backend
//         } else {
//           toast.error(res.data.message);
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//         toast.error(err.message);
//       });
//   };
  

//   const handleRemove = (id) => {
//     removeCartApi(id)
//       .then((res) => {
//         if (res.data.success) {
//           toast.success(res.data.message);
//           fetchMyCartItems();
//         } else {
//           toast.error(res.data.message);
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//         toast.error(err.message);
//       });
//   };

//   const makePayment = () => {
//     navigate("/payment", { state: { cartItems, total, user } });
//   };

//   return (
//     <div className="mx-auto mb-32 p-4 mt-32 overflow-x-scroll">
//       <table className="table-auto w-full">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="px-4 py-2">Product</th>
//             <th className="px-4 py-2">Image</th>
//             <th className="px-4 py-2">Price</th>
//             <th className="px-4 py-2">Quantity</th>
//             <th className="px-4 py-2">Sub Total</th>
//             <th className="px-4 py-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cartItems.map((item) => (
//             <tr key={item._id}>
//               <td className="border px-4 py-2">{item.products.productName}</td>
//               <td className="border px-4 py-2">
//                 <img
//                   src={item.products.productImageUrl}
//                   alt={item.products.productName}
//                   className="h-20 w-20 object-cover"
//                 />
//               </td>
//               <td className="border px-4 py-2">{item.products.productPrice ?? 0}</td>
//               <td className="border px-4 py-2">
//                 <span className="!border-2 border-black flex flex-row justify-between">
//                 <button
//                     className="bg-gray-600 w-1/3 border-r-2 border-black hover:bg-gray-300 cursor-pointer px-2 mr-2"
//                     onClick={() => handleQuantityChange(item._id, -1)}
//                     disabled={item.quantity <= 1}
//                   >
//                     -
//                   </button>
//                   <span className="mx-4">{item.quantity ?? 1}</span>
//                   <button
//                     className="bg-gray-600 w-1/3 border-l-2 border-black hover:bg-gray-300 cursor-pointer px-2 ml-2"
//                     onClick={() => handleQuantityChange(item._id, 1)}
//                   >
//                     +
//                   </button>
//                 </span>
//               </td>
//               <td className="border px-4 py-2">
//               {(item.products.productPrice ?? 0) * (item.quantity ?? 1)}
//               </td>
//               <td className="border px-4 py-2">
//                 <button
//                   onClick={(e) => handleRemove(item._id)}
//                   className="text-red-500"
//                 >
//                   <FontAwesomeIcon icon={faTrash} />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="text-right mt-4">
//         <strong>Total - {total.toFixed(2)}</strong>
//       </div>
//       <div className="flex flex-row justify-end">
//         <button
//           onClick={makePayment}
//           className="bg-[#FF8534] hover:bg-[#F24E1E] text-white px-4 py-2 mt-4 rounded"
//         >
//           Proceed To Checkout
//         </button>
//       </div>
//     </div>
//   );
// }

// export default MyCart;
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useCallback } from "react"; 
import { toast } from "react-toastify";
import { getAllCartApi, removeCartApi, updateCartQuantityApi } from "../../apis/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function MyCart() {
  const [cartItems, setCartItems] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const fetchMyCartItems = useCallback(() => {
    getAllCartApi(user._id)
      .then((res) => {
        setCartItems(res?.data?.carts);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  }, [user._id]); 

  useEffect(() => {
    fetchMyCartItems();
  }, [fetchMyCartItems]);

  const total = cartItems.reduce(
    (acc, item) =>
      acc + (item.products.productPrice ?? 0) * (item.quantity ?? 1),
    0
  );

  const handleQuantityChange = (itemId, increment) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item._id === itemId) {
        const newQuantity = item.quantity + increment;
        return {
          ...item,
          quantity: newQuantity > 0 ? newQuantity : item.quantity,
        };
      }
      return item;
    });

    setCartItems(updatedCartItems);

    updateCartQuantityApi({
      itemId,
      newQuantity: updatedCartItems.find((item) => item._id === itemId)
        .quantity,
    })
      .then((res) => {
        if (res.data.success) {
          toast.success("Quantity updated");
          fetchMyCartItems();
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };

  const handleRemove = (id) => {
    removeCartApi(id)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          fetchMyCartItems();
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };

  const makePayment = () => {
    navigate("/payment", { state: { cartItems, total, user } });
  };

  return (
    <div className="container mx-auto mb-32 p-6 mt-16 bg-gray-50 rounded-lg shadow-xl border border-gray-200">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">My Cart</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse bg-white">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="px-6 py-4 text-left font-semibold">Product</th>
              <th className="px-6 py-4 font-semibold">Image</th>
              <th className="px-6 py-4 text-center font-semibold">Price</th>
              <th className="px-6 py-4 text-center font-semibold">Quantity</th>
              <th className="px-6 py-4 text-center font-semibold">Sub Total</th>
              <th className="px-6 py-4 text-center font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item._id} className="border-b hover:bg-gray-50 transition duration-200">
                <td className="px-6 py-4 text-left text-gray-800">
                  {item.products.productName}
                </td>
                <td className="px-6 py-4 text-center">
                  <img
                    src={item.products.productImageUrl}
                    alt={item.products.productName}
                    className="h-20 w-20 object-cover rounded-lg shadow-sm"
                  />
                </td>
                <td className="px-6 py-4 text-center text-gray-800">
                  Rs.{item.products.productPrice ?? 0}
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 shadow-md"
                      onClick={() => handleQuantityChange(item._id, -1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="text-gray-800 font-bold text-lg">
                      {item.quantity ?? 1}
                    </span>
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 shadow-md"
                      onClick={() => handleQuantityChange(item._id, 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 text-center text-gray-800 font-semibold">
                  Rs.{(item.products.productPrice ?? 0) * (item.quantity ?? 1)}
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={(e) => handleRemove(item._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FontAwesomeIcon icon={faTrash} className="text-lg" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 flex justify-between items-center">
        <strong className="text-2xl text-gray-900">Total: Rs.{total.toFixed(2)}</strong>
        <button
          onClick={makePayment}
          className="bg-yellow-500 text-white font-bold py-3 px-12 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 ease-in-out"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default MyCart;


