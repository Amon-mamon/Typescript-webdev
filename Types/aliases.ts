//Basic Types (Primitive Types)

type Email = string;
type UserAge = number;

const email: Email = "user@example.com";
const age: UserAge = 30;

//Union Types

type Status = "active" | "inactive" | "suspended";

const userStatus: Status = "active";

//Intersection Types

type User = {
    name: string;
    age: number;
  };
  
  type Address = {
    street: string;
    city: string;
  };
  
  type UserWithAddress = User & Address;
  
  const userWithAddress: UserWithAddress = {
    name: "John",
    age: 30,
    street: "123 Main St",
    city: "New York",
  };

  //Intersection types exercise

//exercise 1


type Product = {
  id:string
  name:string
  price:number
}

type InventoryDetails = {
  quantity:number
  location:string
}

type ProductionInventory = Product & InventoryDetails

const ProductInventory = {
  id:"1",
  name:"vince",
  price:12000,
  quantity:3,
  location:"Mabalacat"
}

console.log(ProductInventory)

  
  