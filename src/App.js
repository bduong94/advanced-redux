import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useSelector } from "react-redux/es/exports";

function App() {
  const show = useSelector((state) => state.cart.show);
  console.log(show);
  return (
    <Layout>
      {show && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
