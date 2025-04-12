// 8 kyu template literal
// export function greet(word:string):string  {
//     return `${word}`
// }
// console.log(greet('hello world'))

//8 kyu return hello world arrow function
// export const greet = ():string => {
//     return `hello world!`
// }

// 8 kyu find index
// export function findNeedle(haystack: any[]):string {
//     const index = haystack.indexOf("needle")
//     return `found the needle at the position ${index}`
//    }

// console.log(findNeedle(['vince','david', 'needle','martin','jot']))

//8kyu array multiply by 2 
// export function maps(x: number[]): number[]{
//     return x.map((el) => el * 2)
//   }

//  console.log(maps([1,2,3]))

// 8kyu divisible by 2

// export function isDivisible(n:number, x:number, y:number):boolean {
//     const divisible = n % x === 0 && n % y === 0 ? true: false
//     return divisible
// }

// console.log(isDivisible(3,1,3))

// console.log(isDivisible(100,1,3))


// // 8kyu Beginner Series #1 School Paperwork
// export function paperwork(n: number, m :number): number{
//     if(n < 0 || m < 0){
//        return 0
//     } else {
//         return n * m
//     }

//    }
// console.log(paperwork(2,6))

//  8 kyu plays banjo
// export function areYouPlayingBanjo(name: string): string {
//     const index = name
//     if(index.startsWith('r') || index.startsWith('R')){
//         return index + " plays banjo"
//     } else {
//         return index + " does not play bango"
//     }
//   }

//   console.log(areYouPlayingBanjo('Ringo'))

// 8 kyu boolean to string
// export const booleanToString = (b:boolean):string => {
//     return b.toString()
// };
// console.log(booleanToString(true))

// 8kyu find smallest integer
// export function smallInteger(args:number[]):number{   
//     return Math.min(...args)
// }
// console.log(smallInteger([5,3,2,0,1]))

//
// // 8 kyu rounded down 
// export function liters(time:number): number {
//     return Math.floor(0.5 * time)
// }
// console.log(liters(2.28))

//

// 8kyu compare points
// export function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {
//     const average = classPoints.reduce((x , y) => x + y,0) / yourPoints/length;
//     return yourPoints > average
// }

// 8kyu calculate average
// export function findAverage(array: number[]): number {
//     if(array.length === 0){
//       return 0
//     }
//     return array.reduce((x,y) => x + y,0) / array.length;
//   }

// //7kyu vowels to length
// export class Kata {
//         static getCount(str:string): number{
//           let lists = str.match(/[aeiou]/gi)
//           return lists ? lists.length : 0
//         }
//     }
//     console.log(Kata.getCount("HelooooAO world"))

//7 kyu remove vowels then return a new string
// export class Kata {
//     static disemvowel(str: string): string {
//         return str.replaceAll(/[aeiou]/gi,'')
       
//     }
// }
// console.log(Kata.disemvowel("HALO"))  

// // 7kyu square every digit
// export class Kata {
//     static squareDigits(num: number):number {
//         return +num.toString()
//                    .split('')
//                    .map((n) => Math.pow(+n,2))
//                    .join('')
//     }
//   }
// console.log(Kata.squareDigits(9119))

//7kyu highest and lowers
// export class Kata {
//     static highAndLow(numbers: string): string {
//         let result = numbers.split(" ")
//                             .map((n) => +n)
//         return `${Math.max(...result)}, ${Math.min(...result)}`
//     }
//   }
// console.log(Kata.highAndLow("5,3,6,7,12,0,-1"))

//7kyuu descending order
// export function descendingOrder(n: number): number {
//   let descend =  n.toString()
//                   .split('')
//                   .sort((a,b) => +a - +b).reverse()
//   return +descend
// }
// console.log(descendingOrder(5))

//7 kyu filter out numbers and integers
// export function filter_list(l:Array<any>):Array<number> {
//   let result = l.filter((item) => typeof item === "number" && Number.isInteger(item))
//   return result
// }
// console.log(filter_list(['2']))


//7kyu