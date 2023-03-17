// WRITE YOUR CODE HERE

var students = ['James','Mike','Luke','Tony','Luis'];

console.log(students.length);

var aux = students[0];

students.forEach(e => {
    console.log("Welcome to the class "+e)
});

students[0] = 'Elias';

if(aux!=students[0]){
    console.log(students[0]+" is in class");
}
