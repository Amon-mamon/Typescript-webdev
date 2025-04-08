
// //exercise 1
// type User = {
//     id:string
//     name:string
//     email:string
//     isAdmin:boolean
//     age:number
// }

// let user = {
//     id: "1234",
//     name: "John Doe",
//     email: "john.doe@example.com",
//     isAdmin: true,
//     age: 25, // optional
//   };
  
//   // Task 2: Create a function that returns a greeting for a user
//   function getUserInfo(user :User):string {
//     if (user.age) {
//       return `Hello, ${user.name}! You are ${user.age} years old.`;
//     }
//     return `Hello, ${user.name}! Age not provided.`;
//   }
  
//   console.log(getUserInfo(user));


//   //exercise 2
//   interface ProductItems {
//     id:string;
//     name:string;
//     price:number;
//     quantity:number;
//     isAvailable:boolean;
//   }
//   const product:ProductItems = {
//     id:"123",
//     name:"laptop",
//     price:1200,
//     quantity:12,
//     isAvailable:true
//   }


//   function updateStock(product:ProductItems, newQuantity:number):string {
//     if(newQuantity < 0){
//         return `Invalid Quanitity for ${product.name}`
//     }else{
//         product.quantity = newQuantity;
//         return `stock Updated for ${product.name}. New quantity: ${product.quantity}`
//     }
//   }
//   console.log(updateStock(product,20))

//   //exercise 3

//   interface AccountTypes{
//     id:string;
//     name:string;
//     balance:number;
//     status:"active" | "suspended"
//   }
 
//   interface TransactionTypes{
//     id:string;
//     type: "deposit" | "withdrawal";
//     amount:number;
//     date:string;
//   }


//   const Account:AccountTypes = {
//     id:"1234",
//     name:"Vince",
//     balance:2000,
//     status:"active"
//   }

//   const Transaction:TransactionTypes = {
//     id:"2456",
//     type: "deposit",
//     amount:240,
//     date:"2021-04-08"
//   }


//   function processTransaction(Account:AccountTypes, Transaction:TransactionTypes){
//     if(Transaction.type === "deposit"){
//         Account.balance += Transaction.amount
//         return `New Balance is ${Account.balance}`
//     }else if(Transaction.type === "withdrawal"){
//         if(Account.balance >= Transaction.amount){
//             Account.balance -= Transaction.amount
//             return `Transaction Successfull New Balance is ${Account.balance}`
//         } else {
//             return "Insufficient Funds"
//         }
//     }
//     return "Invalid transaction type"
//   }
//   console.log(processTransaction(Account,Transaction), Account.status)

//   // exercise 4


//   interface TaskTypes {
//     id: string;
//     title: string;
//     isCompleted: boolean;
//     priority: "high" | "medium" | "low";
//     createdAt: string;
//   }
  
//   // Existing tasks
//   const tasks: TaskTypes[] = [
//     {
//       id: "55",
//       title: "Build a Web",
//       isCompleted: true,
//       priority: "high",
//       createdAt: "April 8, 2025",
//     },
//   ];
  
//   // Function to display existing tasks
//   function existingTask(tasks: TaskTypes[]): string {
//     return tasks
//       .map(function (task) {
//         return `Existing Task: ${task.title}, ${task.priority}, ${
//           task.isCompleted ? "Completed" : "Not Completed"
//         }`;
//       })
//       .join(", ");
//   }
  
//   console.log(existingTask(tasks));
  
//   // New task to add
//   const newTask: TaskTypes = {
//     id: "56",
//     title: "Learn TypeScript",
//     isCompleted: false,
//     priority: "high",
//     createdAt: "April 9, 2025",
//   };
  
//   // Adding a new task
//   function addTask(task: TaskTypes): string {
//     tasks.push(task);
//     return `Task Added: ${task.title}, ${task.priority}, ${
//       task.isCompleted ? "Completed" : "Not Completed"
//     }`;
//   }
  
//   console.log(addTask(newTask));
  
//   // Get high-priority tasks
//   function getHighPriorityTasks(): TaskTypes[] {
//     return tasks.filter(function (task) {
//       return task.priority === "high";
//     });
//   }
  
//   console.log(getHighPriorityTasks());
  
//   // Mark task as completed
//   function markTaskCompleted(taskId: string): string {
//     const task = tasks.find(function (task) {
//       return task.id === taskId;
//     });
  
//     if (task) {
//       task.isCompleted = true;
//       return `Task "${task.title}" marked as completed.`;
//     }
  
//     return `Task with ID ${taskId} not found.`;
//   }
  
//   console.log(markTaskCompleted("55"));
  
//   // Get all completed tasks
//   function getCompletedTasks(): TaskTypes[] {
//     return tasks.filter(function (task) {
//       return task.isCompleted === true;
//     });
//   }
  
//   console.log(getCompletedTasks());


//   //final exercise, hard

interface TaskTypes{
    id:string;
    title:string;
    priority: "high" | "medium" | "low"
    isCompleted:boolean;
    deadline:Date;
}
const tasks:TaskTypes[] = [
    {
    id:"20540",
    title:"Learn Typescript",
    priority:"high",
    isCompleted:false,
    deadline:new Date("2025-03-10")

    },
    {
    id:"20541",
    title:"Learn React",
    priority:"high",
    isCompleted:false,
    deadline:new Date("2025-04-9")

    },
    {
    id:"20542",
    title:"Learn Javascript",
    priority:"high",
    isCompleted:true,
    deadline:new Date("2025-06-10")
    },
]

//Get all the tasks

function getAllTasks(tasks:TaskTypes[]):TaskTypes[]{
    if (tasks.length === 0) {
        console.log("No tasks available.");
        return [];
      }
    return tasks.sort((a , b) => a.deadline.getTime() - b.deadline.getTime())
}
console.log(getAllTasks(tasks))

//Get all the overdue tasks
function getOverdueTask(tasks:TaskTypes[]):TaskTypes[]{
    const now = new Date()
    return tasks.filter(tasks =>{
        const isIncomplete = !tasks.isCompleted;
        const isDeadlinePassed = tasks.deadline < now
        return isIncomplete && isDeadlinePassed
    })
}   
console.log(getOverdueTask(tasks))

//get high priority tasks
function getHighPriority(tasks:TaskTypes[]):TaskTypes[]{
   const highPriorityTasks = tasks.filter(tasks =>{
        const isHighPriority = tasks.priority === "high"
        const isComplete = !tasks.isCompleted;
        return isHighPriority && isComplete
    });
    if(highPriorityTasks.length === 0){
        console.log("No high Priority")
    }
    return highPriorityTasks
}
console.log(getHighPriority(tasks))


function markTaskAsCompleted(taskId:string):string{
    const tasktoUpdate = tasks.find(task => task.id === taskId)
    if(!tasktoUpdate){
        return `Task with ID ${taskId} not found`
    }
    if(tasktoUpdate.isCompleted){
        return `Task ${tasktoUpdate.title} is already complete`
    }
    tasktoUpdate.isCompleted = true
    return `Task "${tasktoUpdate.title}" marked as complete`
}
console.log(markTaskAsCompleted("20542"))

//ALL THE SUMMARY
function takeSummary(tasks:TaskTypes[]): string {
    return tasks.map(task => {
        const status = task.isCompleted ? "Completed" : "Not yet completed"
        return `${task.title} - ${status}`
    }).join('\n')
} 
console.log(takeSummary(tasks))




  