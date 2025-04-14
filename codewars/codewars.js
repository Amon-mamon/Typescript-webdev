
export class Kata {
    static squareDigits(num) {
     return num.toString()
                .split('')
                .map((n) => Math.pow(+n,2))
                .join('')
    }
  }
console.log(Kata.squareDigits(9119))


function getSquare(n){
  return Number.isInteger(Math.sqrt(n))
}
console.log(getSquare(2))

