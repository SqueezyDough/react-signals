import { style } from "@vanilla-extract/css";

export const listTodos = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  listStyleType: "none",
  margin: "1rem 0",
  padding: 0
});

export const formTodos = style({});

export const newTodoLabel = style({
  display: "block",
  fontSize: "0.75rem",
  fontWeight: "bold",
  marginBottom: 5
});

export const checkbox = style({
  marginRight: 10
});

export const buttonNewTodo = style({
  backgroundColor: "#75c498",
  border: "none",
  borderRadius: "0.25rem",
  color: "white",
  padding: "0.5rem 1rem",
  marginLeft: 10,
  transition: "background-color 0.3s",
  ":hover": {
    backgroundColor: "#016f31"
  }
});
