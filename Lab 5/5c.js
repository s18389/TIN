const courses = ["PRI", "PRI2 also called BYT", "PRI3 also called ZPR"];

function Student(name, surname, id){
    this.name = name;
    this.surname = surname;
    this.id = id;
}

Student.prototype.courses = courses;

const student = new Student("Pinki", "Winki", 1);
console.log(student.courses);