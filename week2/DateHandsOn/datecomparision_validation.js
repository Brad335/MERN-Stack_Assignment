// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------

// Given:
let enrollmentDeadline = new Date("2026-01-20");

// 1. Check if today is before or after the deadline
let today = new Date();
today.setHours(0, 0, 0, 0); // Ignore time part for comparison

if (today < enrollmentDeadline) {
    console.log("Enrollment Open");
} else {
    console.log("Enrollment Closed");
}

// 2. Validate user input date
function isValidDate(dateString) {
    // Parse the date parts to integers
    let parts = dateString.split("-");
    if (parts.length !== 3) return false;

    let year = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10) - 1; // JS months are 0-based
    let day = parseInt(parts[2], 10);

    let date = new Date(year, month, day);

    // Check if date is valid
    return (
        date.getFullYear() === year &&
        date.getMonth() === month &&
        date.getDate() === day
    );
}

// Example input
let userInput = "2026-02-30";
if (isValidDate(userInput)) {
    console.log("Valid date");
} else {
    console.log("Invalid date");
}