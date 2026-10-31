export default function Filters({ query, onQuery, categories, category, onCategory, sort, onSort }) {
  return (
    <div className="filters">
      <input
        type="search"
        value={query}
        onChange={(e) => onQuery(e.target.value)}
        placeholder="Rechercher un titre ou un auteur"
        aria-label="Rechercher un livre"
      />
      <select value={sort} onChange={(e) => onSort(e.target.value)} aria-label="Trier">
        <option value="default">Trier : par défaut</option>
        <option value="asc">Prix croissant</option>
        <option value="desc">Prix décroissant</option>
        <option value="title">Titre A–Z</option>
      </select>
      <div className="chips" role="group" aria-label="Catégories">
        {categories.map((c) => (
          <button key={c} className={`chip ${c === category ? "active" : ""}`} onClick={() => onCategory(c)}>
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
