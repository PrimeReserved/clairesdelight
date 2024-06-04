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
  const {cartCount, removeFromCart, updateCartItemQuantity } = useCart();

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
      <Subtitle title={`Spices in Cart (${cartCount})`} />
      <ServiceCard className="w-[30rem]">
        <div className="flex">
          <Image
            src={item.product.images}
            alt={item.product.name}
            width={100}
            height={100}
            className="rounded-xl"
          />
          <div>
            <Subtitle title={item.product.name} />
            <div className="flex gap-1">
              <p><span className="bg-orange"><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></span>20 Reviews</p>
              <p>{item.product.description}</p>
              <SpiceTitle title={`${item.product.price}`} />
            </div>
          </div>
          <div className="flex">
        <button
          aria-label="decrease"
          onClick={() => {
            handleQuantityChange(item.quantity - 1);
          }}
        >
          <AiOutlineMinus />
        </button>
        <p>{item.quantity}</p>

        <button
          aria-label="increase"
          onClick={() => {
            handleQuantityChange(item.quantity + 1);
          }}
        >
          <MdOutlineAdd />
        </button>
          </div>
        </div>
      </ServiceCard>
      
      <div className="flex">
        <button onClick={handleRemoveClick}>
          <RiDeleteBinLine />
        </button>
      </div>
      <div>
        <p> ${(item.product.price * item.quantity).toFixed(2)}</p>
      </div>
    </>
  );
}
