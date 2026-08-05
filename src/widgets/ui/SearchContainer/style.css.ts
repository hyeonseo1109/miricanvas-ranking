import { style } from "@vanilla-extract/css";

export const searchContainer = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  padding: "1rem",
  gap: "1rem",
});

export const descriptionText = style({
  fontSize: "0.55rem",
  color: "#8D94A5",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  width: "100%",
});
