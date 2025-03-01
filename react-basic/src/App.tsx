// Tên component phải viết dạng PascalCase
// function App(){

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Productlist from "./components/Productlist";
import { Product } from "./types/product";

const data: Product = {
  title: "Product 1",
  image: "https://placehold.co/450x300",
  rating: 0,
  price: 19,
  salePrice: 16,
  stock: 10,
};

// }
const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <Main />
        <Productlist data={data} />
        <Productlist data={data} />
        <Productlist data={data} />
        <Productlist data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default App;

 

