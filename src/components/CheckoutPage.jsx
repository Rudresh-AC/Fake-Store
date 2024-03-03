import { useEffect, useState } from "react";
import { useStore } from "../context/FakeStoreContext";
import ProductItem from "./ProductItem";

const CheckoutPage = () => {
  const { cart, removeFromCart } = useStore();
  const [totalPrice, setTotalPrice] = useState(0);
  const count = cart.length;

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  }, [cart]);

  const handleRemoveProduct = (productId) => {
    removeFromCart(productId);
  };

  // useEffect(() => {
  //   console.log("Cart updated:", cart);
  // }, [cart]);

  return (
    <>
      <div>
        <h2 className="text-4xl font-palanquin font-bold px-5">
          <span className="text-coral-red"> Order </span> Summary
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
        <div className="col-span-2 md:h-[80vh] overflow-y-auto shadow-lg pb-5">
          <div className="mb-4 ">
            <div className="mx-4 mb-3 rounded-md border border-gray-300 p-4">
              {cart.map((item) => (
                <ProductItem
                  key={item.id}
                  item={item}
                  onRemove={handleRemoveProduct}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 md:h-[40vh] shadow-lg">
          <div className="w-full ">
            <h2 className="font border-b-2 px-4 py-2 text-gray-400">
              PRICE DETAILS
            </h2>

            <div className="my-4 flex justify-between px-4">
              <span>Price({count} item)</span>
              <span>${totalPrice}.00</span>
            </div>
            <div className="my-4 flex justify-between px-4">
              <span>Discount</span>
              <span>-$25.00</span>
            </div>
            <div className="my-4 flex justify-between px-4">
              <span> Delivery charge</span>
              <span>
                {" "}
                <span className="line-through">$40.00</span> Free
              </span>
            </div>
            <div className="my-6 flex justify-between border-b-2 border-t-2 px-4 py-4">
              <span className="text-lg font-bold">Total Amount</span>
              <span>${totalPrice - 25}</span>
            </div>
            <p className="px-4 text-sm font-bold text-green-600">
              You will save $25.00 on this order
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
