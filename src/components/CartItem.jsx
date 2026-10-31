import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQty, removeFromCart } from "../store/cartSlice";

export default function CartItem({ line }) {
  const dispatch = useDispatch();
  const book = useSelector((s) => s.books.items.find((b) => b.id === line.id));
  if (!book) return null;

  return (
    <li className="cart-item">
      <span className="mini" style={{ "--cover": book.color, "--cover2": book.color2 }} aria-hidden="true" />
      <div className="cart-info">
        <strong>{book.title}</strong>
        <span className="muted">{book.price.toLocaleString("fr-DZ")} DA</span>
        <div className="qty">
          <button onClick={() => dispatch(decreaseQty(book.id))} aria-label="Diminuer la quantité">−</button>
          <span>{line.qty}</span>
          <button onClick={() => dispatch(addToCart(book.id))} aria-label="Augmenter la quantité">+</button>
        </div>
      </div>
      <div className="cart-side">
        <strong>{(book.price * line.qty).toLocaleString("fr-DZ")} DA</strong>
        <button className="link" onClick={() => dispatch(removeFromCart(book.id))}>Retirer</button>
      </div>
    </li>
  );
}
