import PopularProducts from "../components/PopularProducts";
import Nav from "../components/Nav";

const HomePage = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="padding">
        <PopularProducts />
      </section>
    </main>
  );
};

export default HomePage;
