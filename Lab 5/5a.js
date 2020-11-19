let getStudentData = function(object){
    let data;
    let all ="";
    for(let sth in object) {
        data = object[sth];
        all += sth + " ------> " + " (" + typeof(data) + ")\n"
    }
    return all;
};


const student = {
    id: 1,
    name: "Jakub",
    numberOfLegs: 2,
    isMyGirlfriendStillTypingMeAboutNotImportantStuff: true,
    howManyLegsDoUHave: function() {
        console.log("Owwwww I have " + this.numberOfLegs + " legs oowwoowowow");
    },
    getId: function() {
        console.log(this.id);
    },
    whoYouLove: function() {
        console.log("I love my girlfriend");
    }
};

console.log(getStudentData(student));