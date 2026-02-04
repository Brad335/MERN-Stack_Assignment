// Assignment 3: Age Calculator (Intermediate)
// -------------------------------------------
// Input:
let dob = "2000-05-15";

// Task: Calculate exact age in years

function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

console.log("Exact age in years:", calculateAge(dob));