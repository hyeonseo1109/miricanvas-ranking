import { style } from "@vanilla-extract/css";

export const ResultsContainer = style({
  width: "100%",
  height: "5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#E4E6E9",
  borderRadius: "0.6rem",
  gap: "0.3rem",
});

export const nameDescription = style({
  fontSize: "0.8rem",
  color: "#8D94A5",
});

export const rankingResult = style({
  fontWeight: "600",
});
