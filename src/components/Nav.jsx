import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStore } from "../context/FakeStoreContext";

const Nav = () => {
  const { cart } = useStore();
  const count = cart.length;
  return (
    <header className="padding-x py-1 fixed top-0 bg-[#fff]  z-10 w-full  shadow-xl">
      <nav className="flex justify-between text-coral-red font-bold text-3xl items-center max-container">
        <h3>Fake shop</h3>
        <Link to="/checkoutpage">
          {count > 0 ? (
            <>
              <ShoppingCartOutlinedIcon sx={{ fontSize: 36 }} />
              <span>{count}</span>
            </>
          ) : (
            ""
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
