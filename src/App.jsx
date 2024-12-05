import Header from "./Components/Header";
import Content from "./Components/Content";
import Testimonio from "./Components/Testimonios";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import Mantenimiento from "./Components/Mantenimiento";
import FAQ from "./Components/Faq";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };
  return (
    <>
      <Header cartCount={cartItems.length} />
      <Content />
      <Banner />
      <div>
        <Products addToCart={addToCart} />
      </div>
      <Mantenimiento />
      <FAQ />
      <Testimonio />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
