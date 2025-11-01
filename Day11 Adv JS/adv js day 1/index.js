//call , bind , apply

// let std1 = {  //Object new Object()
//     id: 1,
//     name: "ali",
//     age: 11,
//     display: function (num) {
//         console.log(this.id, this.name, this.age, num);
//     }
// }

// std1.display(50)


// let std2 = {
//     id: 2,
//     name: "nour",
//     age: 15
// }

// // std1.display.call(std2,20,"mona")
// // std1.display.apply(std2,[20,"mona"])

// let newDisplay = std1.display.bind(std2)
// newDisplay(60)
// newDisplay(100)
// newDisplay(30)


/////////////////////////////////////

// let arr=[20,100,60,10]
// console.log(arr.join("_"));



// let str="Hello"
// // console.log( [].join.call(str,"_"));

// console.log(Array.prototype.join.call(str,"*"));
/////////////////////////////////////////////////////////////////////////////////

//oop in native javascript

//factory function
// function student(id,name,age){

//     return {
//         id:id,
//         name:name,
//         age:age,
//         display:function(){
//             console.log(this.id, this.name, this.age);

//         }
//     }
// }

// let std1=student(1,"nour",13)
// let std2=student(2,"asmaa",11)
// console.log(std1,std2);


//constructor function
// function Student(id, nm, ag, gradesArr) {
//     Student.counter++

//     this.id = id;
//     this.name = nm;
//     this.age = ag;
//     //private member variable
//     let grades = gradesArr
//     this.getGrades = function () {
//         return grades
//     }
//     this.setGrades = function (newGrades) {
//         grades = newGrades
//     }
//     //private method
//     function calculatTotalGrades() {
//         let total = 0
//         for (let i = 0; i < grades.length; i++) {
//             total += grades[i]
//         }
//         console.log(total,this.name,this.age);
//     }

//      //public method
//     this.getTotalGrades = function () {
//         calculatTotalGrades.apply(this)
//     }
// }

// Student.prototype.display = function () {
//     console.log(this.id, this.name, this.age);
// }

// //static member variable
// Student.counter=0
// //static method
// Student.getCounter=function(){
//    return this.counter 
// }



// let std4 = new Student(5, "mona", 10, [100, 90, 80])
// console.log(Student.getCounter());

// std4.display()
// std4.getTotalGrades()



// std4.setGrades([50, 90, 60])
// console.log(std4.getGrades());

// std4.getTotalGrades()
///////////////////////////////////////////////////////////////////////////////////////
//inheritance
//abstract
function Person(_name,_age){
  if(this.constructor==Person){
    throw "cannot create object , abstract constructor"
  }
    this.name=_name;
    this.age=_age
}


Person.prototype.printData=function(){
    console.log(this.name,this.age);
}
// let p1=new Person("ali",20);
// console.log(p1);



function Employee(nm,ag,sal,yoe){
    //step 1
    Person.call(this,nm,ag)
    this.salary=sal;
    this.yoe=yoe
}

//step 2
Employee.prototype=Object.create(Person.prototype) ;
Employee.prototype.constructor=Employee

Employee.prototype.displayYearsOfExp=function(){
    console.log(this.yoe);
}
//overriding
Employee.prototype.printData=function(){
    console.log("overided printData.....");
    
}


let emp1=new Employee("nour",25,2000,6)

// console.log(emp1.__proto__.__proto__.__proto__);
// emp1.__proto__.__proto__.x=10000  //xxxxxxxxxxxxxxxxxxxxx



