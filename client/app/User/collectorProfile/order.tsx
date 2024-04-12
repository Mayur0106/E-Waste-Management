import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import ChatBot from '../ChatBot/page';

interface CartItem {
  product: string;
  description: string;
  quantity: number;
}


const OrderPage: React.FC = () => {

  // const router = useRouter();

  const [showChatBot, setShowChatBot] = useState(false);

  const goToChatBot = () => {
    setShowChatBot(!showChatBot);
  };

  const goToCollector = () => {
    setShowChatBot(!showChatBot);
  };

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
    <div className="bg-blue-100 h-screen p-6">


      <h1 className="font-bold text-3xl my-4 border-b-2 border-blue-800">
        Order
      </h1>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-2xl my-2">Shopping Cart</h2>
        <div className="border-2 border-blue-gray-500 p-4 rounded-2xl w-full md:w-2/3 lg:w-1/2">
          {/* Input fields for product and quantity */}
          <select
            id="mySelect"
            className="w-full md:w-2/3 p-2 border-2 border-gray-400 rounded-md mb-2"
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
            className="w-full md:w-2/3 p-2 border-2 border-gray-400 rounded-md mb-2"
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            className="w-full md:w-2/3 p-2 border-2 border-gray-400 rounded-md mb-2"
            placeholder="Enter quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <button
            className="w-full md:w-2/3 bg-red-200 rounded-md border-red-600 border-1 p-2 hover:bg-red-300"
            onClick={() => addToCart(product, quantity)}
          >
            Add to Cart
          </button>
        </div>
        <h3 className="font-bold text-2xl my-2">Cart Contents:</h3>
        <div className="border-2 border-blue-gray-500 p-4 rounded-2xl w-full md:w-2/3 lg:w-1/2">
          <table className="w-full rounded-xl">
            <thead className="border-black border-2 p-2">
              <tr>
                <th className="border-black border-2 p-2">Product</th>
                <th className="border-black border-2 p-2">Quantity</th>
                <th className="border-black border-2 p-2">Actions</th>
              </tr>
            </thead>
            <tbody className="border-black border-2 p-2">
              {cart.map((item) => (
                <tr key={item.product}>
                  <td className="border-black border-2 p-2">{item.product}</td>
                  <td className="border-black border-2 p-2">{item.quantity}</td>
                  <td className="border-black border-2 p-2">
                    <button
                      className="p-2 bg-deep-orange-500 border-red-700 border-2 rounded-md hover:bg-red-300"
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
          className="mt-4 mb-2 px-4 py-2 bg-gradient-to-br from-green-400 to-blue-600 text-white rounded-lg hover:from-green-500 hover:to-blue-700 focus:ring-4 focus:outline-none focus:ring-green-200"
        >
          Submit
        </button>
        {showChatBot && <ChatBot onClose={goToChatBot} />}
        <div className="fixed bottom-4 right-4">
          <img
            loading="lazy"
            className="h-10 w-10 cursor-pointer transition duration-300 hover:bg-gray-200 hover:shadow-xl transform hover:scale-110"
            src="/Chatbot.png"
            alt="ChatBot Icon"
            onClick={goToChatBot}
          />
        </div>




      </div>

    </div>
  );
};

export default OrderPage;
