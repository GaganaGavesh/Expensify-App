// console.log('des');

// const person = {
//     name: 'gagana',
//     age: 26,
//     location: {
//         city: 'Matara',
//         temp: 91
//     }
// };

// // const name = person.name;
// // const age = person.age;
// // console.log(`${ name } is age ${age}.`)

// const {name, age} = person;//Object Destructuring
// console.log(`${ name } is age ${age}.`)

// console.log(`It's ${person.location.temp} in ${person.location.city}`);

// const {city, temp} = person.location;

// if(city && temp){
//     console.log(`It's ${temp} in ${city}`);
// }

// const {name: firstName = 'Anonymous', age} = person;//Object Destructuring
// console.log(`${ firstName   } is age ${age}.`)

//Array destructuring

const address = ['123 kamal', 'matara', 'dikwella', '2345'];

//console.log(`You are ${address[1]}`);

// const [ street, city, state, zip ] = address;
// console.log(`${street}, ${city}, ${state}, ${zip}`);

const [ , city, state, zip ] = address;
console.log(`${city}, ${state}, ${zip}`);
