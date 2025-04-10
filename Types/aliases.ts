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


  
  