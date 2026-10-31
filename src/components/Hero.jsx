import { useSelector } from "react-redux";
import { Star, Wave } from "./Icons";

export default function Hero() {
  const total = useSelector((s) => s.books.items.length);

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h2>Des livres choisis avec amour.</h2>
          <p>Classiques, fantasy, science-fiction et jeunesse : les livres que le monde entier adore. Ajoutez vos coups de cœur au panier, on s'occupe du reste.</p>
          <a className="btn pink" href="#catalogue">Voir le catalogue</a>
        </div>
        <div className="stars" aria-hidden="true">
          <Star className="star s1" />
          <Star className="star s2" />
          <Star className="star s3" />
          <svg className="swirl" viewBox="0 0 300 300"><path d="M20 250C60 100 140 300 180 140S260 40 285 90" fill="none" stroke="currentColor" strokeWidth="5" strokeDasharray="4 12" strokeLinecap="round" /></svg>
        </div>
      </section>
      <Wave className="to-pink" />
      <div className="pink-band">
        <span className="pill">{total} livres à découvrir</span>
      </div>
      <Wave className="to-paper" />
    </>
  );
}
