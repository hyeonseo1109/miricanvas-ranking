import { style } from "@vanilla-extract/css";

export const searchButton = style({
  border: "1px solid #ffffff",
  borderRadius: "0.5rem",
  aspectRatio: "1/1",
  height: "1.7rem",
  textAlign: "center",
  backgroundColor: "#21afbf",
  color: "white",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#35becd",
  },
  transition: "background-color 0.3s ease",
});
