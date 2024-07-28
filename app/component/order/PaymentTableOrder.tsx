

const PaymentTableOrder = ({ cartItems, cartTotal, cartCount }: any) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="px-10">
          {cartItems.map((item: any, index: any) => (
            <tr key={index}>
              <td>{item.product.name}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>{item.product.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end">
            <div className="card-action">
            <h3 className="pt-1">Cart Count</h3>
            <p>{cartCount}</p>
            <h3 className="pt-1">Cart Total</h3>
            <p>{`₦${new Intl.NumberFormat("en-NG", {
                      style: "decimal",
                      minimumFractionDigits: 2,
                    }).format(cartTotal)}`}</p>
            </div>
         </div>
    </div>
  );
};

export default PaymentTableOrder;
