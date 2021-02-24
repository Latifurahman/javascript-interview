const students = [
    {id: 21, name: "Omar Sunny"},
    {id: 31, name: "Maannaaaaaa"},
    {id: 41, name: "Mouyuri"},
    {id: 71, name: "DeepJol"},
];

// const output = [];

// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const result = element.students;
//     const result2 = element.name;
//     output.push(result2);
    
// }

// console.log(output);

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter( s => s.id > 40);
const biggerOne = students.find( s => s.id > 40);
console.log(biggerOne);
console.log(bigger);
console.log(ids);
console.log(names);