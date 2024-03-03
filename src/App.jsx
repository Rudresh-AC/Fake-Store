import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./components/ProductPage";
import CheckoutPage from "./components/CheckoutPage";
import { StoreProvider } from "./context/FakeStoreContext";

const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="checkoutpage" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
