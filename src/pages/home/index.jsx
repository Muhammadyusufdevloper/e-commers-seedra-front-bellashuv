import SeedraInfo from "../../components/seedra-info";
import CustomerOpinion from "./components/customer-opinion";
import Hero from "./components/hero";
import OurBlog from "./components/our-blog";
import OurProducts from "./components/our-products";

const Home = () => {
  return (
    <>
      <Hero />
      <OurProducts />
      <OurBlog />
      <CustomerOpinion />
      <SeedraInfo />
    </>
  );
};

export default Home;
