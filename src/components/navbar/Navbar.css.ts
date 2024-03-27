import { style } from "@vanilla-extract/css";

export const header = style({
  display: "flex",
  alignItems: "center",
  width: "100%",
  borderRadius: "0.5rem",
  position: "sticky",
  top: "1rem",
  zIndex: 1,
  border: "1px solid rgba(0, 0, 0, 0.05)",
  backgroundColor: "#f7f6f0"
});

export const nav = style({
  padding: "1rem",
  width: "100%"
});

export const menu = style({
  display: "flex",
  gap: "1rem",
  listStyleType: "none",
  margin: 0,
  padding: 0
});

export const link = style({
  height: 40,
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  minWidth: 120,
  color: "#016f31",
  fontWeight: "bold",
  textDecoration: "none"
});

export const todosCount = style({
  marginTop: "0.5rem",
  padding: "0.5rem",
  borderRadius: "0.5em",
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  color: "grey",
  fontSize: "0.75rem",
  width: "max-content"
});
