
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="w-[1200px] gap-8 mx-auto flex pl-[330px]">

        <div className="mb-10">
          <img src={item.image} width={200} height={200}/>
        </div>

        <div className="w-[380px] flex flex-col items-center justify-center">

          <h1 className="text-[18px] font-bold">{item.title}</h1>
          <h1 className="text-[12px] mt-5">{item.description}</h1>

          <div className="flex gap-x-[280px] cursor-pointer mt-10">
            <p className="text-green-600 font-bold">${item.price}</p>
            <div className="bg-red-200 rounded-full w-6 h-6 flex justify-center items-center"
              onClick={removeFromCart}>
              <AiTwotoneDelete/>
            </div>
          </div>
        
        </div>

      </div>

    </div>
  );
};

export default CartItem;
