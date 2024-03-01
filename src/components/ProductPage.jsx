import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const ProductPage = () => {
  const [product, setProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const { id } = useParams();
  const controls = useAnimation();

  useEffect(() => {
    async function loadProduct() {
      const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
      const data = await res.json();
      console.log(data);
      setProducts(data);
      if (data.images && data.images.length > 0) {
        setSelectedImage(data.images[0]);
      }

      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
    loadProduct();
  }, [id, controls]);

  return (
    <>
      <div>
        <h2 className="text-4xl font-palanquin font-bold px-20">
          <span className="text-coral-red"> Product </span> Details
        </h2>
      </div>
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="max-w-7xl rounded-lg bg-white p-6 shadow-md"
        >
          <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={selectedImage}
              alt="Product"
            />
            <div>
              <p className="mb-2 text-3xl font-bold text-gray-800">
                {product.title}
              </p>
              <div className="mb-2 flex items-center">
                <div className="flex items-center">
                  <p className="font-bold text-red-500">
                    $ {product.price}.00 (7%)
                  </p>
                  <div className="mx-4 flex items-center">
                    <div className="mx-2 text-xl font-bold text-yellow-500">
                      4.7
                    </div>
                    <div className="text-sm text-gray-500">(21 customers)</div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-base font-bold">About this item :</h2>
                <div className="mt-4 text-sm text-gray-500">
                  {product.description}
                </div>
              </div>

              <div className="my-6 grid grid-cols-3 gap-x-10">
                {product.images &&
                  product.images.length > 0 &&
                  product.images.map((image, index) => (
                    <motion.div
                      key={index}
                      className="hover:cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full rounded-lg object-cover"
                      />
                    </motion.div>
                  ))}
              </div>

              <div className="my-4 flex space-x-2">
                <button className="rounded-md bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600">
                  Add to Cart
                </button>
                <button className="rounded-md border border-gray-500 px-4 py-2 hover:bg-gray-100">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProductPage;
