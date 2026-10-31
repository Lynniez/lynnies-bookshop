# Lynnies BookShop — Online Bookstore

**Student name:** Lynda DJEBOURI
**Store name:** Lynnies BookShop

## Description
Lynnies BookShop is a small bookstore web application built with React and Redux. Users can browse a catalogue of books, search and filter them, mark favorites and manage a shopping cart. No backend is used in this lab.

## Technologies
React 19, Vite, Fredoka and Montserrat fonts (@fontsource), JavaScript (ES6+), Redux Toolkit, React-Redux, CSS, Node.js / npm, Git / GitHub.

## Main React components
| Component | Role |
|---|---|
| `App` | Page layout, local state (search, category, sort, cart panel open/closed) |
| `Header` | Store name, cart counter, favorites counter |
| `Hero` | Banner with decorative stars and waves |
| `Filters` | Search input, category chips, sort selector (props + callbacks) |
| `BookList` / `BookCard` | Catalogue grid and one book card (add to cart, favorite) |
| `Cart` / `CartItem` | Cart panel, quantities, line totals, total |

## Redux state
```js
{
  books:     { items: [ { id, title, author, category, price, color, blurb } ] },
  cart:      { items: [ { id, qty } ] },
  favorites: { ids: [ id ] }
}
```
- **Actions** (cart): `addToCart`, `decreaseQty`, `removeFromCart`, `clearCart`
- **Actions** (favorites): `toggleFavorite`
- **Selectors**: `selectCartCount`, `selectCartTotal`
- Store: `src/store/index.js` (`configureStore`), connected with `<Provider>`; components use `useSelector` and `useDispatch`.

## Features
Product catalogue and details · add / remove from cart · quantity management · cart total · search · category filtering · sorting · favorites · cart and favorites saved in local storage · responsive design.

## Run the application
```bash
npm install
npm run dev
```
Then open the local URL shown in the terminal (usually http://localhost:5173).
