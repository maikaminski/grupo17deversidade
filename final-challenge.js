// Dados de alunos
const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];
// média de cada aluno
function averageStudents(grades){
    let average = (grades[0] + grades[1] + grades[2]) / 3;
    return (average);
}
//print da média de cada
function printAveragePerStudent(students) {
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const average = averageStudents(student.grades);
        console.log(`${student.name} teve média ${average.toFixed(1)}`);
    }
}



printAveragePerStudent(students);
