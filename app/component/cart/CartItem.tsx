import { CartItem } from "@/typings";
import { useCart } from "@/context/CartContext";
import { MdOutlineAdd } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import Title from "../typography/Title";

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
    <>
      <Title>Cart Items</Title>
      <div>
        <p>{item.product.name}</p>
        <p>{item.product.description}</p>
        <p>{item.product.price}</p>
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
      <div>
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
