import React, { useContext } from "react";
import { CartContext } from "./CardContext";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <div className="min-h-screen bg-[#0f172a] p-10 text-white">
      
      {/* Header */}
      <h1 className="text-4xl font-bold mb-8 text-center">
        🛒 Your Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-400 text-xl">
          Your cart is empty 😔
        </p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">

          {/* Cart Items */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-[#1e293b] p-5 rounded-2xl shadow-lg"
            >
              {/* Product Info */}
              <div className="flex items-center gap-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 object-cover rounded-xl"
                />
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-400">{item.quantity}</p>
                  <p className="text-green-400 font-bold">₹{item.price}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-4">
                <button className="h-8 w-8 bg-gray-700 rounded-full flex justify-center items-center">
                  <FaMinus />
                </button>
                <span className="font-bold">1</span>
                <button className="h-8 w-8 bg-gray-700 rounded-full flex justify-center items-center">
                  <FaPlus />
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 hover:text-red-600 text-xl"
              >
                <FaTrash />
              </button>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="bg-[#020617] p-6 rounded-2xl shadow-xl flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              Total: <span className="text-green-400">₹{totalPrice}</span>
            </h2>
            <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-xl text-lg font-bold">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
