import BookCard from "./BookCard";

export default function BookList({ books }) {
  if (books.length === 0) {
    return <p className="empty">Aucun livre ne correspond à votre recherche. Essayez un autre titre ou une autre catégorie.</p>;
  }
  return (
    <div className="grid">
      {books.map((b) => <BookCard key={b.id} book={b} />)}
    </div>
  );
}
