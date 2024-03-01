import { motion } from "framer-motion";
import PopularProductCard from "./PopularProductCard";

const PopularProducts = ({ product, handleProductClick }) => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="overflow-hidden relative">
        <h2 className="text-4xl font-palanquin font-bold">
          <motion.span
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-coral-red inline-block"
          >
            Popular
          </motion.span>{" "}
          <motion.span
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            Products
          </motion.span>
        </h2>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {product.map((product) => (
          <PopularProductCard
            key={product.id}
            product={product}
            handleClick={handleProductClick}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
