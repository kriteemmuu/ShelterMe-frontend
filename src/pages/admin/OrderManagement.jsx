import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { getAllOrderApi } from "../../apis/Api";

export default function OrderManagement() {
  const [orders, setOrders] = useState([]);
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const fetchAllOrders = () => {
    const order=getAllOrderApi().then((res) => {
      setOrders(res?.data?.orders);
    });
    console.log(order);
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  const toggleExpand = (orderId) => {
    if (expandedOrderId === orderId) {
      setExpandedOrderId(null);
    } else {
      setExpandedOrderId(orderId);
    }
  };

  return (
    <div className="min-h-screen p-5">
      <div className="container mx-auto bg-white rounded-lg shadow-md p-5">
        <h2 className="text-center text-2xl font-bold text-orange-600">
          All The Orders
        </h2>
        {orders.map((order) => (
          <div key={order._id} className="mt-4 border-b border-orange-200">
            <div
              onClick={() => toggleExpand(order._id)}
              className="cursor-pointer flex justify-between items-center p-4 hover:bg-orange-50"
            >
              <div className="flex items-center">
               
                <span className="ml-4 text-lg font-medium text-gray-700">
                  {order.user?.fullName}
                </span>
              </div>
              <FontAwesomeIcon
                icon={
                  expandedOrderId === order._id ? faChevronUp : faChevronDown
                }
                className="text-orange-500"
              />
            </div>
            {expandedOrderId === order._id && (
              <div className="p-4 bg-orange-50">
                <h4 className="text-lg font-semibold text-orange-600">
                  Products in this order:
                </h4>
                {order.products.map((product, index) => (
                  <div
                    key={index}
                    className="mt-2 p-2 border-t border-orange-200"
                  >
                    <img
                      src={product.product.productImageUrl}
                      alt="Product"
                      className="w-10 h-10 inline-block"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      {product.product.productName} - $
                      {product.product.productPrice} (Quantity:{" "}
                      {product.quantity})
                    </span>
                  </div>
                ))}
                <div className="mt-4 text-sm text-gray-800">
                  Total Price: <strong>${order.price}</strong>
                  <div>
                    Order Status:{" "}
                    <span
                      className={`font-semibold ${
                        order.is_payed ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {order.is_payed ? "Paid" : "Not Paid"}
                    </span>
                  </div>
                  <div>
                    Order Date: {new Date(order.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
