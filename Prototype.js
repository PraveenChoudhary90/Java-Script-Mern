
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


const a={name:"praveen"};
const b={city:"seoni"};

a.__proto__=b;
console.log(a.name);
console.log(a.city);



function Mydata(name){
   this.name = name;
}

Mydata.prototype.Show = function(){
  console.log("hello"+ this.name);
}

let user1 = new Mydata("praveen");
user1.Show();
