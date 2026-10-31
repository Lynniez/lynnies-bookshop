import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCartTotal } from "../store/cartSlice";
import CartItem from "./CartItem";

export default function Cart({ open, onClose }) {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.cart.items);
  const total = useSelector(selectCartTotal);

  return (
    <>
      {open && <div className="overlay" onClick={onClose} />}
      <aside className={`cart ${open ? "open" : ""}`} aria-hidden={!open} aria-label="Panier">
        <div className="cart-head">
          <h2>Votre panier</h2>
          <button className="link" onClick={onClose}>Fermer</button>
        </div>

        {items.length === 0 ? (
          <p className="empty">Votre panier est vide. Ajoutez un livre depuis le catalogue.</p>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((l) => <CartItem key={l.id} line={l} />)}
            </ul>
            <div className="cart-foot">
              <div className="total"><span>Total</span><strong>{total.toLocaleString("fr-DZ")} DA</strong></div>
              <button className="link" onClick={() => dispatch(clearCart())}>Vider le panier</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
