function multiplier(factor:number):(num:number) => number{
    return function(num:number){
        return num * factor
    }
}

const double = multiplier(2)
const triple = multiplier(3)

console.log(double(2))
console.log(triple(2))