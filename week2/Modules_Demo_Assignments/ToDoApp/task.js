//    ii. task.js - Task operations
// TODO: Import validator functions
// import { ... } from './validator.js';
import { validateTitle,validateDueDate,validatePriority } from "./validator.js";
const tasks = [];

// 1. Add new task
function addTask(title, priority, dueDate) {
    // Validate using imported functions
    const titleError = validateTitle(title);
    if (titleError) 
        return titleError;
    const priorityError = validatePriority(priority);
    if (priorityError) 
        return priorityError;
    const dateError = validateDueDate(dueDate);
    if (dateError) 
        return dateError;
    // Add as an object with all fields
    tasks.push({
        title,
        priority,
        dueDate,
        completed: false
    });
    return "Success";
}

// 2. Get all tasks
function getAllTasks() {
  // Return all tasks
  return tasks
}

// 3. Mark task as complete
function completeTask(taskId) {
    // Find task by index and mark as complete
    if (tasks[taskId]) {
        if (typeof tasks[taskId] === 'object') {
            tasks[taskId].completed = true;
        } else {
            // If tasks only stores title, convert to object
            tasks[taskId] = { title: tasks[taskId], completed: true };
        }
        return "Task marked as complete";
    }
    return "Task not found";
}

// Export functions
export {addTask,completeTask,getAllTasks};
