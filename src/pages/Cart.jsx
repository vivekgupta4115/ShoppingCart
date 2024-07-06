import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="max-w-6xl mx-auto flex justify-between items-center flex-row mt-8">
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="flex flex-col justify-center items-start">
            
              <div className="text-green-600 text-[16px] font-semibold">
                Your Cart
              </div>
              <div className="text-green-700 font-bold text-[32px]">
                Summary
              </div>
              <p>
                <span className="text-green-600 text-[16px] font-semibold">
                  Total Items: {cart.length}
                </span>
              </p>
          

            <div className="mt-8">
              <p className="text-green-600 text-[16px] font-semibold">
                Total Amount: ${totalAmount}
              </p>
              <button className="text-white text-[16px] font-semibold bg-green-700 px-[10px] py-[5px] rounded-[8px] mt-4">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-10">
          <h1 className="text-green-600 text-[18px] font-semibold">
            Cart Empty
          </h1>
          <Link to={"/"}>
            <button className="bg-green-600 text-[18px] font-semibold text-white px-[10px] py-[5px] rounded-lg">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
