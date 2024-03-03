import { motion } from "framer-motion";
import { useStore } from "../context/FakeStoreContext";

function ProductItem({ item }) {
  const { removeFromCart } = useStore();
  const { id, price, title, images } = item;

  const handleRemoveClick = () => {
    removeFromCart(id);
  };

  return (
    <motion.div
      className="mb-2 flex justify-between"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center">
        <img src={images[0]} alt={item.title} className="mr-2 h-16 w-16" />
        <div className="mx-3">
          <p className="text-sm font-medium">{title}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <button
          className="text-sm text-red-400 hover:text-red-600 hover:text-md transition-all duration-300 hover:font-bold"
          onClick={handleRemoveClick}
        >
          REMOVE
        </button>

        <div className="mt-4 flex justify-between">
          <span className="text-sm">${price}.00</span>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductItem;
