import { Route, Routes } from "react-router-dom";
import AboutSeedra from "./pages/about-seedra";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Layouts from "./components/layouts";
import SingleRout from "./pages/single-rout";
import { useState } from "react";
import Wishlist from "./pages/wishlist";
import NoteFound from "./pages/note-found";
import Blog from "./pages/our-blog";
import Chekout from "./pages/chekout/Chekout";
import Cart from "./pages/cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinach from "./pages/spinach/Spinach";
import AllProduct from "./pages/all-product";
const App = () => {
  const [menu, setMenu] = useState(true);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="single-rout/:id" element={<SingleRout />} />
          <Route path="our-blog" element={<Blog />} />
          <Route path="about-seedra" element={<AboutSeedra />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="contact" element={<Contact />} />
          <Route path="chekout" element={<Chekout />} />
          <Route path="cart" element={<Cart />} />
          <Route path="spinach" element={<Spinach />} />
          <Route path="all-product" element={<AllProduct />} />
          <Route path="*" element={<NoteFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
