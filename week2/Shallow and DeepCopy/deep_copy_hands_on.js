// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// ---------------------------------------------------

// 🧪 Given Data:
                    const order = {
                    orderId: "ORD1001",
                    customer: {
                        name: "Anita",
                        address: {
                        city: "Hyderabad",
                        pincode: 500085
                        }
                    },
                    items: [
                        { product: "Laptop", price: 70000 }
                    ]
                    };

// 🎯 Task:
//       1. Create a deep copy of order
const orderCopy = JSON.parse(JSON.stringify(order));

//       2. Modify in copied object:
//             i. customer.address.city
orderCopy.customer.address.city = "Bangalore";
//             ii. items[0].price
orderCopy.items[0].price = 65000;

//             iii. Verify original object remains unchanged
console.log("Original:", order);
console.log("Copy:", orderCopy);