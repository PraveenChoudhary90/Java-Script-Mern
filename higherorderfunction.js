// 🔸 map()
// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(num => num * num);

// console.log(squares);


// Output:

// [1, 4, 9, 16, 25]


// 👉 map() ek HOF hai — kyunki ye ek function (num => num * num) ko as argument accept karta hai.

// 🔸 filter()
// const numbers = [1, 2, 3, 4, 5, 6];
// const evens = numbers.filter(num => num % 2 === 0);

// console.log(evens);


// Output:

// [2, 4, 6]


// 👉 filter() ek HOF hai — wo har element par function lagata hai aur true/false ke base par filter karta hai.

// 🔸 reduce()
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// console.log(sum);


// Output:

// 15


// // 👉 reduce() bhi ek HOF hai — ye function ko repeatedly apply karke ek single value return karta hai.