function Student(name, surname, id, grades) {
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.gradesList = grades;

    this.printAvgGrades = function() {

        let allGrades = 0.0;
        for (let i = 0; i < this.gradesList.length; i++) allGrades += this.gradesList[i];
        let avgGrade = allGrades / this.gradesList.length;
        return "Id: " + this.id + "\n" +
            "Name: " + this.name + "\n" +
            "Surname: " + " " + this.surname + "\n" +
            "Average grade: " + avgGrade;
    };
}

const student = new Student("Jarosław", "Kaczyński", 1, [5, 5, 2, 2]);
console.log(student.printAvgGrades());
