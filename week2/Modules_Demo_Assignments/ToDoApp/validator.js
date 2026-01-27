// Assignment 1: 
// -------------
// Task Management System (ToDo App Modules):
//      Building a task manager like Todoist

// Requirements:
//      Create a modular todo app with 3 separate files:

       
          
        // i. validator.js - Input validation
        // Export these validation functions

        // 1. Validate task title (not empty, min 3 chars)
        function validateTitle(title) {
          if (typeof title !== 'string' || title.trim().length === 0) {
            return "Title is empty";
          }
          if (title.trim().length < 3) {
            return "Title should have minimum 3 characters";
          }
          return null;
        }

        // 2. Validate priority (must be: low, medium, high)
        function validatePriority(priority) {
          const allowed = ['low', 'medium', 'high'];
          if (!allowed.includes(priority)) {
            return "Priority must be 'low', 'medium', or 'high'";
          }
          return null;
        }

        // 3. Validate due date (must be future date)
        function validateDueDate(date) {
          const due = new Date(date);
          const now = new Date();
          if (isNaN(due.getTime())) {
            return "Invalid date format";
          }
          if (due <= now) {
            return "Due date must be in the future";
          }
          return null;
        }

        export { validateTitle, validatePriority, validateDueDate };
