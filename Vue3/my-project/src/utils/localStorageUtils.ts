/**
 * 本地缓存储存todos
 */
import { Todo } from "../types/todo";
export function saveTodos(todos: Todo[]) {
  localStorage.setItem("TODOS_KEY", JSON.stringify(todos));
}

/**
 * 读取浏览器缓存数据
 */
export function readTodos(): Todo[] {
  return JSON.parse(localStorage.getItem("TODOS_KEY") || "[]");
}
