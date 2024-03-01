import { useState } from "react";
import { motion } from "framer-motion";
import { star } from "../assets/icons";
import { Link } from "react-router-dom";

const PopularProductCard = ({ product, handleClick }) => {
  const { id, title, price } = product;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      to={`/product/${id}`}
      className="flex flex-1 flex-col w-full max-sm:w-full"
      onClick={() => handleClick(id)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.img
        src={product.images[1]}
        alt={title}
        className="w-[282px] h-[282px]"
        whileHover={{ scale: 1.1 }}
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {title}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        $ {price}.00
      </p>
    </Link>
  );
};

export default PopularProductCard;
