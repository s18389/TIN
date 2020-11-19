function Student(id, name, surname, gradesList) {
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.gradesList = gradesList;

    this.getAvgGrade = function() {

        let allGrades = 0.0;
        for (let i = 0; i < this.gradesList.length; i++) allGrades += this.gradesList[i];
        return allGrades / this.gradesList.length;
    };

    this.setFullName = function (fullName) {
        let splitName = fullName.split(" ");
        this.name = splitName[0] || "";
        this.surname = splitName[1] || "";
    };

    this.getFullName = function() {
        return this.name + " " + this.surname;
    };


}


const student = new Student(2,"Jakub", "Gowin", [2, 5, 2, 5]);
student.setFullName("Willy Wonka");
console.log(student.getFullName() + " has average " + student.getAvgGrade() );