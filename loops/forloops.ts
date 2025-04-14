//exercise 1
export function filterString(str:Array<any>):Array<string>{
    let filtered:Array<string> = []

    for(let i = 0; i < str.length; i++){
        let item = str[i]
        if(typeof item === "string" && item.length > 3){
            filtered.push(item)
        }
       
    }
    return filtered
}
console.log(filterString(["hi",32,"hellows","dodi","32134"]))


//exercsie 2

export function filterBoolean(condition:Array<boolean>):Array<boolean>{
    let filteredCons:Array<boolean> = []

    for(let i = 0; i < condition.length; i++){
        let item = condition[i]
        if(typeof item === "boolean" && item === true)
            filteredCons.push(item)
    }
    return filteredCons
}
console.log(filterBoolean([true,false,false,true]))


// exercise 3 

export function doubleNumbers(numbers:Array<any>):Array<number>{
    let getNumbers:Array<number> = []
    
    for(let i = 0; i < numbers.length; i++){
        let items = numbers[i]
        if(typeof items === "number"){
            getNumbers.push(items * 2) 
        }
    }
    return getNumbers
}
console.log(doubleNumbers([2,'da',3,'qwe',4]))


//exercise 4
 
export function filterTransform(items:Array<any>): Array<string>{
    let getString: Array<string> = []

    for(let i = 0 ; i < items.length; i++){
        let result = items[i]

        if(typeof result === "string"){
             getString.push(result.toUpperCase())
        } else if(typeof result === "number"){
            getString.push(`Number: ${result}`)
        }
    }
        return getString
}

console.log(filterTransform([3, "hello", true, "world", 42, null]));
Array<string> 
//exercise 5


export function flattenNumber(arr:any[]):number[]{
    
    let itemResult:number[] = []

    for(let i = 0 ; i < arr.length; i++){
        let item = arr[i]
        if(typeof item === "number"){
            itemResult.push(item)
        }else if(Array.isArray(item)){
            let nestedArray = flattenNumber(item)
            itemResult.push(...nestedArray)
        }
    }
    return itemResult
}   
console.log(flattenNumber([1, "hello", [2, 3, "world"], true, [4, [5, "deep"]], null]));

//last exercise


export function longestString(arr:Array<any>):string {
    let getString:string = ""
    
    for(let i of arr){
        if(typeof i === "string" && i.length > getString.length){
            getString = i
        }
    }
    return getString
}
console.log(longestString([2,"bince","bossmarts"]))

