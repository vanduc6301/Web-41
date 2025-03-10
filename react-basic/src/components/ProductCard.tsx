import { Product } from "../types/products";

interface ProductCardProps {
  products: Product[];
}

function ProductCard({ products }: ProductCardProps) {
  return (
    <div className="list">
      {products.map((product) => (
        <div key={product.id} className="list-item">
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Giá: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}
export default ProductCard;
