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
import { Suspense } from "react";
import Loading from "@/app/loading";

interface Props {
  item: CartItem;
}

export default function CartItemView({ item }: Readonly<Props>) {
  const { removeFromCart, updateCartItemQuantity } = useCart();

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
    <ServiceCard className="w-full pb-5">
        <div className="flex items-center">
          <div className="rounded-xl bg[#FFF8F6]">
              <Suspense fallback={<Loading />}>
                <div
                >
                  <Image
                    src={item.product.images}
                    alt={item.product.name}
                    width={100}
                    height={100}
                    className="rounded-xl p-1"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </Suspense>
          </div>
          <div className="">
            <Subtitle title={item.product.name} />
            <div className="flex flex-row justify-between items-center">
              <div className="flex items-center">
                <span className="flex justify-between text-orange">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </span>
                <p className="ml-2">20 Reviews</p>
              </div>
              <div className="flex flex-row items-center pr-5">
                <div className="border flex flex-row justify-center items-center px-1 rounded-md">
                  <button
                    className="bg-white hover:bg-gray-100 border-r p-1"
                    aria-label="decrease"
                    onClick={() => {
                      handleQuantityChange(item.quantity - 1);
                    }}
                  >
                    <AiOutlineMinus />
                  </button>
                  <p className="bg-white border-r border-l px-2">
                    {item.quantity}
                  </p>
                  <button
                    className="bg-white hover:bg-gray-100 border-l p-1"
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
            <div >
            <p className="line-clamp-2">{item.product.description}</p>
            </div>
            {/* <SpiceTitle title={`${item.product.price}`} /> */}
            <div className="flex justify-between pt-4 items-center">
              <div>
                <p> ${(item.product.price * item.quantity).toFixed(2)}</p>
              </div>
              <button
                onClick={handleRemoveClick}
                className="flex justify-center gap-1 items-center pr-5"
              >
                <RiDeleteBinLine /> <span>Remove</span>
              </button>
            </div>
          </div>
        </div>
      </ServiceCard>
  );
}
