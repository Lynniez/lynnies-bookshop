import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { toggleFavorite } from "../store/favoritesSlice";
import { Heart } from "./Icons";

export default function BookCard({ book }) {
  const dispatch = useDispatch();
  const isFav = useSelector((s) => s.favorites.ids.includes(book.id));
  const inCart = useSelector((s) => s.cart.items.find((l) => l.id === book.id)?.qty ?? 0);

  return (
    <article className="card">
      <div className="cover" style={{ "--cover": book.color, "--cover2": book.color2 }}>
        <span className="cover-title">{book.title}</span>
        <span className="cover-author">{book.author}</span>
        <button
          className={`fav ${isFav ? "on" : ""}`}
          onClick={() => dispatch(toggleFavorite(book.id))}
          aria-pressed={isFav}
          aria-label={isFav ? "Retirer des favoris" : "Ajouter aux favoris"}
        >
          <Heart filled={isFav} />
        </button>
      </div>
      <div className="card-body">
        <h3>{book.title}</h3>
        <p className="muted">{book.author} · {book.category}</p>
        <p className="blurb">{book.blurb}</p>
        <div className="card-foot">
          <strong>{book.price.toLocaleString("fr-DZ")} DA</strong>
          <button className="btn" onClick={() => dispatch(addToCart(book.id))}>
            {inCart ? `Ajouter (${inCart} au panier)` : "Ajouter au panier"}
          </button>
        </div>
      </div>
    </article>
  );
}
