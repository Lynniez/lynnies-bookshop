import { useSelector } from "react-redux";
import { selectCartCount } from "../store/cartSlice";
import { Heart } from "./Icons";

export default function Header({ onOpenCart }) {
  const count = useSelector(selectCartCount);
  const favCount = useSelector((s) => s.favorites.ids.length);

  return (
    <header className="header">
      <h1 className="brand">Lynnies BookShop</h1>
      <div className="header-actions">
        <span className="favs"><Heart filled size={16} /> {favCount} favori{favCount > 1 ? "s" : ""}</span>
        <button className="btn" onClick={onOpenCart}>Panier ({count})</button>
      </div>
    </header>
  );
}
