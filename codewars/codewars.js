
export class Kata {
    static squareDigits(num) {
     return num.toString()
                .split('')
                .map((n) => Math.pow(+n,2))
                .join('')
    }
  }
console.log(Kata.squareDigits(9119))