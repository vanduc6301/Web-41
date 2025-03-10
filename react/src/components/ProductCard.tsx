import { Product } from "../types/product"; 

type ProductCardProps = {
  data: Product;
};

export default function ProductCard({ data }: ProductCardProps) {
  return (
    <div className="main">
      <div className="cart">
        <div className="image">
          <img src={data.image} alt={data.title} />
        </div>
        <div className="info">
          <h3 className="title">{data.title}</h3>
          <p className="rating">⭐ {data.rating}</p>
          <div className="cart-price">
            <span className="price">${data.price}</span>
            <span className="sale-price">${data.salePrice}</span>
          </div>
          <button className="view-button">View Product</button>
        </div>
      </div>
    </div>
  );
}
