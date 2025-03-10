import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ProductCard from "./components/ProductCard";
import productsData from "./data.json";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <Main />
        <ProductCard products={productsData.products} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
