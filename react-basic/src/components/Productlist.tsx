import { Product } from "../types/product";

type ProductCartProps = {
  data: Product;
};

export default function Productlist({ data }: ProductCartProps) {
  
  return (
    <div className="cart">

      {data.salePrice && <span>Sale</span>}

      <img src={data.image} alt={data.title} />

      <div className="title">{data.title} </div>

      {data.rating > 0 && <div className="cart-rating">{data.rating}</div>}

      {data.salePrice ?(
      <div className="cart-price">
        <span className="price--regular">${data.price}</span>
        <span className="price--sale">${data.salePrice}</span>
      </div>
      ):(
        <span className="price--regular">${data.price}</span>

      )}

      <button className="mua">View Option</button>
    </div>
  );
}
