import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Filters from "./components/Filters";
import BookList from "./components/BookList";
import Cart from "./components/Cart";
import Hero from "./components/Hero";

export default function App() {
  const books = useSelector((s) => s.books.items);

  // État local : uniquement ce qui concerne l'affichage de cette page
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tous");
  const [sort, setSort] = useState("default");
  const [cartOpen, setCartOpen] = useState(false);

  const categories = ["Tous", ...new Set(books.map((b) => b.category))];

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = books.filter(
      (b) =>
        (category === "Tous" || b.category === category) &&
        (b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q))
    );
    if (sort === "asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "title") list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [books, query, category, sort]);

  return (
    <>
      <Header onOpenCart={() => setCartOpen(true)} />
      <Hero />
      <main className="container" id="catalogue">
        <h2 className="section-title">Le catalogue</h2>
        <Filters
          query={query} onQuery={setQuery}
          categories={categories} category={category} onCategory={setCategory}
          sort={sort} onSort={setSort}
        />
        <p className="muted count">{visible.length} livre{visible.length > 1 ? "s" : ""}</p>
        <BookList books={visible} />
      </main>
      <footer className="footer">
        <strong>Merci d'être passé !</strong>
        <span>Lynnies BookShop</span>
      </footer>
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
