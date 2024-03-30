import { signal, computed, Signal } from "@preact/signals-react";

const LOCAL_STORAGE_KEY = "TODOS";

export type Todo = {
  id: string;
  name?: string;
  completed: boolean;
};

export const todos = signal(getTodos());

export const completedTodos = computed(() => {
  return todos.value.filter(todo => todo.completed).length || 0;
});

export function removeTodo(id: string) {
  todos.value = getTodos().filter(todo => todo.id !== id);
  saveTodos(todos);
}

export function getTodos(): Todo[] {
  const todos = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!todos) {
    return [];
  }

  return JSON.parse(todos);
}

export function saveTodos(todos: Signal<Todo[]>) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos.value));
}
