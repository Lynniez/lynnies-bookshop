import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";
import cartReducer from "./cartSlice";
import favoritesReducer from "./favoritesSlice";

const KEY = "lynnies-state";

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) ?? undefined;
  } catch {
    return undefined;
  }
}

export const store = configureStore({
  reducer: { books: booksReducer, cart: cartReducer, favorites: favoritesReducer },
  preloadedState: loadState(),
});

// Sauvegarde du panier et des favoris (fonctionnalité optionnelle : local storage)
store.subscribe(() => {
  try {
    const { cart, favorites } = store.getState();
    localStorage.setItem(KEY, JSON.stringify({ cart, favorites }));
  } catch {
    /* stockage indisponible : on ignore */
  }
});
