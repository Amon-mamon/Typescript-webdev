//Basic types
// const  printUserInfo = (name:string,age:number,isMember:boolean):string => {
    
//     return isMember == true ? `User ${name} is ${age} years old and is a member` : `User ${name} is ${age} years old and is not a member`
// }
// console.log(printUserInfo('Vince',24,false))


// const calculateTotalPrice = (price:number,quantity:number,discount:boolean):string => {
//     let totalPrice = price * quantity
//     if(discount){
//         totalPrice = totalPrice * 0.9
//     }
//     return `Total: ${totalPrice.toFixed(2)}`
// }
// console.log(calculateTotalPrice(25,3,true))
// console.log(calculateTotalPrice(25,3,false))


// const getDiscountedPrice = (price:number, discount:number,):string => {
//     let discountedPrice = price - (price * discount / 100)
//     return `Discounted Price:${discountedPrice.toFixed(2)}`
// }
// console.log(getDiscountedPrice(500,20))


//CLASSES / OOP
//encapsulation
// class UserAccount {
//     private password:string

//     constructor(password:string) {
//         this.password = password
//     }

//     public updatePassword(newPassword:string):void{
//          this.password = newPassword
//     }

//     public getPassword():string{
//         return `Access Denied`
//     }
// }

// let pass = new UserAccount("vincedavid")
// console.log(pass.updatePassword('VINCEDAVID'))
// console.log(pass.getPassword())

//inheritance

// class User {
//     name:string
    
//     constructor(name:string){
//         this.name = name
//     }

//     introduce():string{
//         return `Hi, I'm ${this.name}`
//     }
// }

// class Admin extends User {
//     constructor(name:string){
//         super(name)
//     }

//     accessPanel():string{
//         return `Admin panel Accesed by ${this.name}`
//     }
// }

// let names = new User('Vince')
// console.log(names.introduce())

// let admin = new Admin('Stephen')
// console.log(admin.accessPanel())


//Union Types / Intersection Types
// //Union
// const showPrice = (price: number | string) => {
//     return typeof price == "number" ? `${price.toFixed(2)}` : `Price: ${price}`
    
// }

// console.log(showPrice("1"))


// //Intersection
// type Student = { 
//     name:string
//     grade:number
// }

// type ClubMember  = {
//     club:string
// }

// type StudentClubMember  = Student & ClubMember

// const studentClubMember = (name:string, grade:number, club:string):string => {
//     return `I am ${name} and I'm a grade ${grade} student and I am in the ${club} club `
// }   

// const student:StudentClubMember = {
//     name: 'Vince',
//     grade: 8,
//     club: 'Football'
// }
// console.log(studentClubMember(student.name, student.grade, student.club))


// type aliases and interfaces

// type Employee  = {
//     name:string
//     id:number
//     position:string
// }

// const empId:Employee = {
//     name:'Vince',
//     id:123,
//     position:"Manager"
// }


// const getEmployeeIdentification  = (empId:Employee) => {
//     return `Employee: Name:${empId.name} ID: ${empId.id} and Position:${empId.position}`
// }
// console.log(getEmployeeIdentification(empId))


// interface Teacher {
//     name:string
//     age?:number
// }

// interface Student extends Teacher {
//     grade:number
//     school:string
// }

// const professor:Teacher = {
//     name:'Diane',
//     age:55
// }

// const studentInfo:Student = {
//     name: 'Vince',
//     age: 24, 
//     grade: 12,
//     school: 'MCC'
// }


// const getTeacher = (professor:Teacher):string => {
//     return `TeacherInfo: Name: ${professor.name} Age: ${professor.age}`
// }
// console.log(getTeacher(professor))

// const getStudent = (studentInfo:Student):string => {
//     return `StudentInfo: Name: ${studentInfo.name}, Grade: ${studentInfo.grade}, School: ${studentInfo.school}`
// }
// console.log(getStudent(studentInfo))


//array and tuples

// const sumScore = (number:number[]):number => {
//     let total = number.reduce((acc, curr) => acc + curr, 0)
//     return total / number.length
// }
// console.log(sumScore([1,2,3,4,5,6]))


// const getUserInfo =  ([username, age ,isAdmin]: [string,number,boolean]):string =>  {
//     return isAdmin == true ? `User ${username} is ${age} years old. Admin Access:${isAdmin}` : `User ${username} is ${age} years old. Admin Access:${isAdmin}`
// }

// console.log(getUserInfo(['Vince',24,false]))


//Enums

    // enum OrderStatus {
    //     pending,
    //     shipped ,
    //     delivered,
    //     cancelled,
    // }

    // const getOrderMessage = (status:OrderStatus):string => {
    //     return  `Your order is ${status}`
    // }
    // console.log(getOrderMessage(OrderStatus.pending))
    // console.log(getOrderMessage(OrderStatus.shipped))
    // console.log(getOrderMessage(OrderStatus.delivered))
    // console.log(getOrderMessage(OrderStatus.cancelled))

    // const getOrderMessage = (status: OrderStatus): string => {
    //     switch (status) {
    //         case OrderStatus.pending:
    //             return "Your order is pending. Please wait.";
    //         case OrderStatus.shipped:
    //             return "Your order is on the way!";
    //         case OrderStatus.delivered:
    //             return "Your order has been delivered!";
    //         case OrderStatus.cancelled:
    //             return "Your order was cancelled.";
    //         default:
    //             return "Unknown status.";
    //     }
    // }
    // console.log(getOrderMessage(OrderStatus.pending))


//# optional and default parameters


//optional
// function createUser(name:string, age:number, isAdmin?:boolean) :string{
//     return `User ${name}, Age: ${age}, Admin: ${isAdmin}`
// }
// console.log(createUser('Vince',24, true))
// console.log(createUser('Vince',24,))


// function greet(name?: string): string {
//     return `Hello, ${name ?? "Guest"}`;
//   }
//   console.log(greet('Vince'))

// //default

// function helloWorld(greet:string = "Hi"):string{
//     return `The greeting is ${greet}`
// }
// console.log(helloWorld())


//typing function and return types


const calculateArea = (width:number,height:number):string => {
    let area = width * height
    return `The area is ${area}`
}
console.log(calculateArea(1,2))
