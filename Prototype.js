function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hello " + this.name);
}

const user = new Person("Rahul");
user.sayHello();



let obj = { city: "Delhi" };
let parent = { country: "India" };

obj.__proto__ = parent;
console.log(obj.city);     // Delhi
console.log(obj.country);  // India (via prototype)
