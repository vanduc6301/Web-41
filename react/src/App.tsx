import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import Main from "./components/Main";

const data = {
  title: "Sale item",
  image: "https://placehold.co/450x300",
  rating: 4.5,
  price: 19,
  salePrice: 14.99,
};

const App = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <div className="list-card">
        <ProductCard data={data} />
        <ProductCard data={data} />
        <ProductCard data={data} />
        <ProductCard data={data} />
        <ProductCard data={data} />
        <ProductCard data={data} />
        <ProductCard data={data} />
        <ProductCard data={data} />
      </div>
      <Footer />
    </div>
  );
};
export default App;
