import Image from "next/image";
import { CartItem } from "@/typings";
import { useCart } from "@/context/CartContext";
import { MdOutlineAdd } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import Subtitle from "../typography/Subtitle";
import ServiceCard from "../LandingPage/our-service/ServiceCard";
import SpiceTitle from "../Spice/SpiceTitle";
import { IoIosStar } from "react-icons/io";
import Button from "../button/Button";

interface Props {
  item: CartItem;
}

export default function CartItemView({ item }: Readonly<Props>) {
  const { cartCount, removeFromCart, updateCartItemQuantity } = useCart();

  const handleQuantityChange = (qty: number) => {
    const quantity = Number(qty);
    if (quantity >= 1) {
      updateCartItemQuantity(item.product._id, quantity);
    }
  };

  const handleRemoveClick = () => {
    removeFromCart(item.product._id);
  };

  return (
    <>
      {/* <Subtitle title={`Spices in Cart (${cartCount})`} /> */}
      <ServiceCard className="w-[35rem] pb-5">
        <div className="flex justify-evenly items-center  gap-2">
          <Image
            src={item.product.images}
            alt={item.product.name}
            width={100}
            height={100}
            className="rounded-xl"
          />
          <div className="">
            <Subtitle title={item.product.name} />
            <div className="flex flex-row justify-between items-center">
              <div className="flex justify-between items-center">
                <span className="flex justify-between text-orange">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </span>
              <p className="ml-2">20 Reviews</p>
              </div>
              <div className="flex flex-row items-center">
                <div className="flex flex-row justify-center items-center">
                  <button
                    className="border rounded"
                    aria-label="decrease"
                    onClick={() => {
                      handleQuantityChange(item.quantity - 1);
                    }}
                  >
                    <AiOutlineMinus />
                  </button>
                  <p className="border p-1">{item.quantity}</p>
                  <button
                    className="border rounded"
                    aria-label="increase"
                    onClick={() => {
                      handleQuantityChange(item.quantity + 1);
                    }}
                  >
                    <MdOutlineAdd />
                  </button>
                </div>
              </div>
            </div>
            <p>{item.product.description}</p>
            {/* <SpiceTitle title={`${item.product.price}`} /> */}
            <div className="flex justify-between items-center">
              <div>
                <p> ${(item.product.price * item.quantity).toFixed(2)}</p>
              </div>
              <button
                onClick={handleRemoveClick}
                className="flex justify-center gap-1 items-center p-2"
              >
                <RiDeleteBinLine /> <span>Remove</span>
              </button>
            </div>
          </div>
        </div>
      </ServiceCard>
    </>
  );
}
