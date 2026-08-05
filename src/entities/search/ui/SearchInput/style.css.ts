import { style } from "@vanilla-extract/css";

export const searchInput = style({
  border: "1px solid #E0E1E5",
  borderRadius: "0.5rem",
  width: "15.5rem",
  height: "1.7rem",
  padding: "0.5rem",
  fontSize: "0.8rem",
});

export const searchInputContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",
});

export const searchBar = style({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
});
