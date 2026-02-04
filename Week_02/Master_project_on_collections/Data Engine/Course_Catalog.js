/*MODULE 2: COURSE CATALOG ENGINE
  -> Get published courses
  -> Sort courses by price (high → low)
  -> Extract { title, price } only
  -> Calculate total value of published courses
  -> Add a new course immutably*/
import {users, courses, cart, roles} from './engine.js'

// Get published courses
let a=courses.filter(ele=>ele.published===true)
console.log("a=",a)

//Sort courses by price (high → low)
let b = [...a].sort(
  (a, b) => b.price - a.price
);
console.log("Sorted:", b);


//Extract { title, price } only
let c=courses.map(ele=>[ele.title,ele.price])
console.log("c=",c)

//Calculate total value of published courses
let d = a.reduce((acc,ele) => acc+ele.price,0);
console.log("d=", d);

//Add a new course immutably*/
let newCourse = {
  id: 104,
  title: "MongoDB",
  price: 1099,
  published: true
};

let copyCourse = [...courses, newCourse];

console.log("Copy Courses:", copyCourse);
console.log("Courses:", courses);