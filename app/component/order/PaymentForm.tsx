"use client";

import { RootState } from "@/store";
import { useSelector } from "react-redux";
import PaymentTableOrder from "./PaymentTableOrder";
import { PaystackButton } from "react-paystack";
import { useState } from "react";
import { addOrder } from "@/lib/action";
import { useRouter } from "next/navigation";

const formFields = [
  {
    id: "fullname",
    name: "fullname",
    label: "Fullname",
    type: "text",
    placeholder: "Samuel Constantin",
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "text",
    placeholder: "samuelconstantin@hotmail.com",
  },
  {
    id: "totalAmount",
    name: "totalAmount",
    label: "Total Amount",
    type: "number",
    placeholder: "Total Amount",
    disabled: true,
  },
  {
    id: "phone",
    name: "phone",
    label: "Phone",
    type: "text",
    placeholder: "Number to call",
  },
  {
    id: "address",
    name: "address",
    label: "Shipping Address",
    type: "textarea",
    placeholder: "Shipping Address",
  },
];

export default function PaymentForm() {
  const router = useRouter();
  const { cartItems, cartTotal, cartCount } = useSelector(
    (state: RootState) => state.carts
  );
  const [formData, setFormData] = useState<any>({
    fullname: "Eugene Constantin",
    email: "eugeneconstantin@hotmail.com",
    phone: "",
    address: "st Patrick avenue",
    paymentMethod: "Card",
    paymentStatus: "Pending",
    orderStatus: "Pending",
    trackingNumber: "",
    createdAt: "",
    updatedAt: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const config = {
    fullname: formData.fullname,
    email: formData.email,
    phone: formData.phone,
    amount: cartTotal,
    publicKey: `${process.env.NEXT_PUBLIC_PAYSTACK_TOKEN_KEY}`,
    metadata: {
      custom_fields: [
        {
          display_name: "Shipping Address",
          variable_name: "shipping_address",
          value: formData.address,
        },
        {
          display_name: "Cart Items",
          variable_name: "cart_items",
          value: JSON.stringify(cartItems),
        },
      ],
    },
  };

  const handlePaystackSuccessAction = async (reference: any) => {
    try {
      const orderData: any = {
        items: cartItems.map((item: any) => ({
          name: item.product.name, // Assuming item has a name
          price: item.product.price,
          quantity: cartCount, // Assuming item has a price
        })),
        totalAmount: cartTotal,
        shippingAddress: [
          {
            display_name: "Shipping Address",
            variable_name: "shipping_address",
            value: formData.address,
          },
        ],
        paymentMethod: "Card",
        paymentStatus: "Pending",
        orderStatus: "Pending",
        trackingNumber: reference.reference,
      };

      console.log(orderData)

      const result = await addOrder(orderData);
      if (result.message === true) {
        console.log("Order saved successfully", result);
      } else {
        console.log("An Error occurred: ", result);
      }
    } catch (error) {
      console.error("Error saving order:", error);
    }
  };

  const handlePaystackCloseAction = () => {
    console.log("closed");
    localStorage.clear();
    router.push('/shop-spices')
  };

  const componentProps = {
    ...config,
    text: "Make Payment",
    onSuccess: (reference: any) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center">
      <div className="w-full max-w-md shadow-2xl bg-base-100 mt-8">
        <div className="card-body">
          <h2 className="card-title">Payment Order Form</h2>
          {formFields.map((field) => (
            <div className="form-control" key={field.id}>
              <label htmlFor={field.id} className="label">
                <span className="label-text">{field.label}</span>
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="textarea textarea-bordered"
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="input input-bordered"
                  value={field.disabled ? cartTotal : formData[field.name]}
                  onChange={handleChange}
                  disabled={field.disabled}
                />
              )}
            </div>
          ))}
          <div className="card-actions justify-end mt-4">
            <PaystackButton {...componentProps} />
          </div>
        </div>
      </div>

      <div className="w-full md:w-[60rem] max-w-md shadow-2xl bg-base-100 mt-8">
        <div className="card-body">
          <h2 className="card-title">Order Details</h2>
          <PaymentTableOrder
            cartItems={cartItems}
            cartTotal={cartTotal}
            cartCount={cartCount}
          />
        </div>
      </div>
    </div>
  );
}
