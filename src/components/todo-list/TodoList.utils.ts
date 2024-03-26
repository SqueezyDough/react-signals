const LOCAL_STORAGE_KEY = "TODOS";

export type Todo = {
  id: string;
  name?: string;
  completed: boolean;
};

export const getTodos = (): Todo[] => {
  const todos = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!todos) {
    return [];
  }

  return JSON.parse(todos);
};

export const saveTodos = (todos: Todo[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
};
