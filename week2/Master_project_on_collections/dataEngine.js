// Data setup:
const users = [
    { id: 1, name: "Ravi", role: "student", active: true },
    { id: 2, name: "Anil", role: "admin", active: true },
    { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
    { id: 101, title: "JavaScript", price: 999, published: true },
    { id: 102, title: "React", price: 1499, published: false },
    { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
    { courseId: 101, qty: 1 },
    { courseId: 103, qty: 2 }
];

const roles = {
    admin: ["create", "update", "delete", "view"],
    student: ["view"]
};

// MODULE-1 :USER PROCESSING ENGINE

// Get only active users
function getActiveUsers(users) {
    return users.filter(u => u.active);
}

// Extract names of active users
function getActiveUserNames(users) {
    return getActiveUsers(users).map(u => u.name);
}

// Check if any admin exists
function isAdminExists(users) {
    return users.some(u => u.role === "admin");
}

// Find user by id
function findUserById(users, id) {
    return users.find(u => u.id === id);
}

// Deactivate a user immutably
function deactivateUser(users, id) {
    return users.map(u => u.id === id ? { ...u, active: false } : u);
}

// MODULE 2: COURSE CATALOG ENGINE

// Get published courses
function getPublishedCourses(courses) {
    return courses.filter(c => c.published);
}

// Sort courses by price (high → low)
function sortCoursesByPriceDesc(courses) {
    return [...courses].sort((a, b) => b.price - a.price);
}

// Extract { title, price } only
function extractTitleAndPrice(courses) {
    return courses.map(c => ({ title: c.title, price: c.price }));
}

// Calculate total value of published courses
function totalPublishedCourseValue(courses) {
    return getPublishedCourses(courses).reduce((sum, c) => sum + c.price, 0);
}

// Add a new course immutably
function addCourse(courses, newCourse) {
    return [...courses, newCourse];
}

// MODULE 3: SHOPPING CART ENGINE 

// Merge cart with courses to get full course info
function mergeCartWithCourses(cart, courses) {
    return cart.map(item => {
        const course = courses.find(c => c.id === item.courseId);
        return course ? { ...course, qty: item.qty } : null;
    }).filter(Boolean);
}

// Calculate total cart amount
function totalCartAmount(cart, courses) {
    return cart.reduce((sum, item) => {
        const course = courses.find(c => c.id === item.courseId);
        return course ? sum + course.price * item.qty : sum;
    }, 0);
}

// Increase quantity of a course (immutably)
function increaseCourseQty(cart, courseId, inc = 1) {
    return cart.map(item =>
        item.courseId === courseId ? { ...item, qty: item.qty + inc } : item
    );
}

// Remove a course from cart
function removeCourseFromCart(cart, courseId) {
    return cart.filter(item => item.courseId !== courseId);
}

// Check if all cart items are paid courses
function areAllCartItemsPaid(cart, courses) {
    return cart.every(item => {
        const course = courses.find(c => c.id === item.courseId);
        return course && course.price > 0;
    });
}

// MODULE 4: ROLE & PERMISSION ENGINE

// Get all role names
function getAllRoleNames(roles) {
    return Object.keys(roles);
}

// Check if student can delete
function canStudentDelete(roles) {
    return roles.student.includes("delete");
}

// Create a flat list of all unique permissions
function getAllUniquePermissions(roles) {
    return [...new Set(Object.values(roles).flat())];
}

// Add new role moderator immutably
function addRole(roles, roleName, permissions) {
    return { ...roles, [roleName]: permissions };
}
