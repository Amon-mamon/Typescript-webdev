//optional
function greet(name: string, message?: string): string {
    return message ? `${message}, ${name}!` : `Hello, ${name}!`;
  }
console.log(greet('Vince'))


//return types objects

function returnTypes (name:string, age:number){
    return { name , age}
}
console.log(returnTypes('Vince',24))