import { Route, Routes } from "react-router-dom";

import AboutSeedra from "./pages/about-seedra";
import Auth from "./pages/auth";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Layouts from "./components/layouts";
import Login from "./pages/login";
import SingleRout from "./pages/single-rout";
import Admin from "./pages/admin";
import CreateProduct from "./pages/admin/create-product";
import ManageProduct from "./pages/admin/manage-product";
import { useState } from "react";
import Wishlist from "./pages/wishlist";
import NoteFound from "./pages/note-found";
import Blog from "./pages/our-blog";
import AdminHome from "./pages/admin/admin-home";
import Chekout from "./pages/chekout/Chekout";
import Register from "./pages/register";
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
          <Route path="login" element={<Login />} />
          <Route path="single-rout/:id" element={<SingleRout />} />
          <Route path="our-blog" element={<Blog />} />
          <Route path="about-seedra" element={<AboutSeedra />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="chekout" element={<Chekout />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
          <Route path="spinach" element={<Spinach />} />
          <Route path="/all-product" element={<AllProduct />} />
          <Route path="*" element={<NoteFound />} />
        </Route>
        <Route path="/" element={<Auth setMenu={setMenu} />}>
          <Route path="admin" element={<Admin menu={menu} />}>
            <Route path="admin-home" element={<AdminHome />} />
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="manage-product" element={<ManageProduct />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
