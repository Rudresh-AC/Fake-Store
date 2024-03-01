import { useEffect, useState } from "react";
import PopularProducts from "../components/PopularProducts";
import Nav from "../components/Nav";

const HomePage = () => {
  const [product, setProducts] = useState([]);

  useEffect(function () {
    async function LoadProduct() {
      const res = await fetch(
        "https://api.escuelajs.co/api/v1/products/?offset=10&limit=12"
      );
      const data = await res.json();
      setProducts(data);

      console.log(data);
    }
    LoadProduct();
  }, []);

  return (
    <main className="relative">
      <Nav />
      <section className="padding">
        <PopularProducts product={product} />
      </section>
    </main>
  );
};

export default HomePage;
