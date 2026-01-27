// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------

// 1. Create a Date object for current date & time.
const now = new Date();

// 2. Extract and display:
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const dayOfWeek = now.getDay();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

// Display extracted values
console.log("Year:", year);
console.log("Month:", month);
console.log("Date:", date);
console.log("Day of week:", dayOfWeek);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);

// 3. Display the date in this format: DD-MM-YYYY HH:mm:ss
// Pad single digits with leading zero
function pad(n) {
    return n < 10 ? '0' + n : n;
}
const formatted = `${pad(date)}-${pad(month)}-${year} ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
console.log("Formatted:", formatted);