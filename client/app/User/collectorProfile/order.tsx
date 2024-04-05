import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

interface CartItem {
  product: string;
  description: string;
  quantity: number;
}

const OrderPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [product, setProduct] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [description, setDescription] = useState<string>("");

  const collectorData = JSON.parse(
    localStorage.getItem("collectorData") as string
  );

  const items = collectorData.acceptedItems.split(", ");
  console.log(collectorData);

  // Function to add an item to the cart
  const addToCart = (product: string, quantity: number) => {
    if (product.trim() === "") {
      return toast.error("Product name cannot be empty", {
        position: "bottom-right",
      });
    }

    if (quantity <= 0) {
      return toast.error("Quantity must be greater than 0", {
        position: "bottom-right",
      });
    }

    // Check if the product is already in the cart
    const existingItem = cart.find((item) => item.product === product);

    if (existingItem) {
      // If the product exists, update its quantity
      const updatedCart = cart.map((item) =>
        item.product === product ? { ...item, description, quantity } : item
      );
      setCart(updatedCart);
    } else {
      // If the product is new, add it to the cart
      setCart([...cart, { product, description, quantity }]);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (product: string) => {
    setCart(cart.filter((item) => item.product !== product));
  };

  const handleSubmit = () => {
    console.log("Submitting order");
    // console.log(cart);
    try {
      for (let item of cart) {
        console.log(item);
        // Send the order to the server
        axios
          .post(
            "http://localhost:8080/api/auth/createOrder",
            {
              product: item.product,
              quantity: item.quantity,
              description: item.description,
              collectorId: collectorData.id,
            },
            {
              headers: {
                "x-access-token": localStorage.getItem("token"),
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            toast.success("Order submitted successfully", {
              position: "bottom-right",
            });
          });
      }
    } catch (error) {
      return toast.error("Error submitting order", {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="bg-blue-100 h-screen p-8">
      <h1 className="font-bold text-3xl m-2 border-b-2 border-blue-800">
        Order
      </h1>
      <div>
        <h2 className="font-bold text-2xl m-1">Shopping Cart</h2>
        <div className="border-2 border-blue-gray-500 p-1 m-2 rounded-2xl">
          {/* Input fields for product and quantity */}
          <select
            id="mySelect"
            className="m-1 p-1 border-2 border-gray-400 rounded-md"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          >
            <option value="" disabled hidden>
              {product ? product : "Select a product"}
            </option>
            {items.map((item: string) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="m-1 p-1 border-2 border-gray-400 rounded-md"
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            className="m-1 p-1 border-2 border-gray-400 rounded-md"
            placeholder="Enter quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <button
            className="bg-red-200 m-2 rounded-md border-red-600 border-1 p-1 hover:bg-red-300"
            onClick={() => addToCart(product, quantity)}
          >
            Add to Cart
          </button>
        </div>
        <h3 className="font-bold text-2xl m-1">Cart Contents:</h3>
        <div className="border-2 border-blue-gray-500 p-1 m-2 rounded-2xl">
          <table className="rounded-xl m-2">
            <thead className="border-black border-2 p-2 m-1">
              <tr className="border-black border-2 p-2 m-1">
                <th className="border-black border-2 p-2 m-1">Product</th>
                <th className="border-black border-2 p-2 m-1">Quantity</th>
              </tr>
            </thead>
            <tbody className="border-black border-2 p-2 m-1">
              {cart.map((item) => (
                <tr key={item.product}>
                  <td className="border-black border-2 p-2 m-1">
                    {item.product}
                  </td>
                  <td className="border-black border-2 p-2 m-1">
                    {item.quantity}
                  </td>
                  <td className="border-black border-2 p-2 m-1">
                    <button
                      className="p-1 m-1 bg-deep-orange-500 border-red-700 border-2 rounded-md hover:bg-red-3"
                      onClick={() => removeFromCart(item.product)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={handleSubmit}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Submit
          </span>
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
