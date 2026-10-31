import { createSlice } from "@reduxjs/toolkit";
import { books } from "../data/books";

// Catalogue : état global en lecture seule (le backend viendra aux prochains TP)
const booksSlice = createSlice({
  name: "books",
  initialState: { items: books },
  reducers: {},
});

export default booksSlice.reducer;
