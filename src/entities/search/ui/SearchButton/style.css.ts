import { style } from "@vanilla-extract/css";

export const searchButton = style({
  backgroundColor: "blue",
  color: "white",
  border: "none",
  padding: "8px 16px",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "16px",
  transition: "background-color 0.3s ease",

  ":hover": {
    backgroundColor: "darkblue",
  },
});
