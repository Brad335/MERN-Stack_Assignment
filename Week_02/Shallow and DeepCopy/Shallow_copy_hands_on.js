// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
};

// 🎯 Task
// 1. Create a shallow copy of user
let userCopy = { ...user };

// 2. Change:
//    i. name in the copied object
userCopy.name = "Sai";

//    ii. preferences.theme in the copied object
userCopy.preferences.theme = "light";

//    iii. Log both original and copied objects
console.log("Original user:", user);
console.log("Copied user:", userCopy);

//    iv. Observe what changes and what doesn’t
    //i.changing name in copy user doesnt reflect in the original user
    //ii.changing preferences attributes like theme and language reflects in both user and usercopy