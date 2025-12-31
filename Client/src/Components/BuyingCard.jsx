import React, { useContext } from 'react';
// import carddata from './../../public/items.json'
import { CiHeart } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { CartContext } from "./CardContext";
import { useNavigate } from "react-router-dom";

function BuyingCard(props) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const product = {
      id: props.id,
      name: props.Name,
      price: props.price,
      image: props.url,
      quantity: props.quantity
    };

    addToCart(product);     // ✅ add to cart
    navigate("/cart");      // ✅ redirect to cart page
  };
  return (
    <>

   
    <div className='h-[45vh] w-[40vh] mr-auto ml-auto mt-10 rounded-3xl bg-[#1b2922] flex items-center flex-col relative'>
     <div className="w-[80%] bg-amber-100 h-[45%] mt-5 rounded-2xl bg-center bg-cover flex justify-between" style={{backgroundImage:`url(${props.url})`}}>
        <div className='h-7 w-15  bg-black absolute  top-3 left-5 rounded-[5px] flex justify-center items-center' style={{backgroundColor:`${props.color}`, display:props.offer}}>
            <h1 className='text-[10px] font-bold text-white'>{props.off}</h1>
        </div>
        <div className='h-9 w-9 rounded-full bg-[#151d1f] flex justify-center items-center absolute  top-3 right-5'><CiHeart  className='text-amber-50 text-2xl '/></div>
     </div>
     <div className='"  inline-block w-[80%] mt-4'>
     <h1 className='text-[#31e87a] font-bold '>{props.Catg}</h1>
     <h1 className='text-white font-bold '>{props.Name}</h1>
     <h1 className='text-[#8e96a1]  '>{props.quantity}</h1>
   
        <div className='flex gap-5 mt-3'>
            <h1 className='text-white font-bold'>{props.price}</h1>
            <h1 className='text-[#8e96a1] line-through'>{props.prv_price}</h1>
        </div>
        
    
     </div>
       <div
        onClick={handleAddToCart}
        className='h-12 w-12 cursor-pointer rounded-full bg-[#151d1f] flex justify-center items-center absolute bottom-4 right-3'
      >
        <FaPlus className='text-amber-50 text-2xl' />
      </div>
    </div>
   
    </>
  )

}

export default BuyingCard