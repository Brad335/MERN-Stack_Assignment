// iii. app.js - Main application
// TODO: Import task functions
// import { ... } from './task.js'
import { addTask,completeTask,getAllTasks } from "./task.js";

// Test your module system
// 1. Add some tasks
console.log(addTask("Buy groceries", "high", "2026-02-10"));
console.log(addTask("Walk the dog", "medium", "2026-02-05"));
console.log(addTask("Read a book", "low", "2026-03-01"));

// 2. Display all tasks
console.log(getAllTasks());
// 3. Complete a task
completeTask();
// 4. Display all tasks again
getAllTasks();