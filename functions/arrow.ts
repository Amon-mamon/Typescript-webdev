//void
const message = (str:string, age:number):void => {
    console.log(`my name is ${str} and i am ${age} years old`)
}   
message('Vince',12)

const add = (num1:number, num2:number):number =>{
    return num1 * num2
}
console.log(add(7.12,7.13))
console.log(add(7.12,7.13).toFixed())