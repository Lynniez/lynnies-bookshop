import { createSlice } from "@reduxjs/toolkit";

const findLine = (state, id) => state.items.find((l) => l.id === id);

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] }, // [{ id, qty }]
  reducers: {
    addToCart(state, action) {
      const line = findLine(state, action.payload);
      if (line) line.qty += 1;
      else state.items.push({ id: action.payload, qty: 1 });
    },
    decreaseQty(state, action) {
      const line = findLine(state, action.payload);
      if (!line) return;
      if (line.qty > 1) line.qty -= 1;
      else state.items = state.items.filter((l) => l.id !== action.payload);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((l) => l.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, decreaseQty, removeFromCart, clearCart } = cartSlice.actions;

// Sélecteurs
export const selectCartCount = (s) => s.cart.items.reduce((n, l) => n + l.qty, 0);
export const selectCartTotal = (s) =>
  s.cart.items.reduce((sum, l) => {
    const book = s.books.items.find((b) => b.id === l.id);
    return sum + (book ? book.price * l.qty : 0);
  }, 0);

export default cartSlice.reducer;
