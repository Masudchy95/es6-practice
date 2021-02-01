// Class name always start with uppername.
class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.status = "Muslim";
    }
}

const student1 = new student(12, "Rimon");
const student2 = new student(11, "Raheel");
const student3 = new student(10, "Liza");
console.log(student1, student2, student3);