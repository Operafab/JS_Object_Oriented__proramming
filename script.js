


const people ={
  name:"Bob",
  age:24,
  isBlack:true
}

console.log(people)

//CLASS

class person {
  constructor(name,age,gender,address){
    this.name= name,
    this.age= age;
    this.gender= gender;
    this.address = address
  }
}

const user = new person ("Naheem", 30,"male", "lagos")
const user2 = new person ("Opera", 40,"male", "lagos")
const user3 = new person ("OG", 50,"male", "lagos")
const user4 = new person ("Chapo", 60,"male", "lagos")
const user5 = new person ("Teddy", 70,"male", "lagos")
const user6 = new person ("Naheem", 30,"male", "lagos")
const user7 = new person ("Naheem", 30,"male", "lagos")


console.log(user)
console.log(user2)
console.log(user3)
console.log(user4)
console.log(user5)
console.log(user6)
console.log(user7)

console.log([user, user2])


//Using ARROW FUNCTION
const createPerson = (name, age, gender, address) =>{
  const schemaCreate = 
  {
    name,
    age,
    gender,
  }

  return schemaCreate
}

const addUser = createPerson("kk",12, "male","lagos")
console.log(addUser)

//  Inheritance

class Animal {
  alive = true;

  isBeautiful = `This is beautiful`

  eat(){
    console.log(`This ${this.name} can eat`)
  }
  sleep(){
    console.log(`This ${this.name} can sleep`)
  }
}

class Rabbit extends Animal{
  name = "cow"

  run(){
    console.log(`This ${this.name} can run`)
  }
}


class fish extends Animal{
  name = "fish"

  swim(){
    console.log(`This ${this.name} can swim`)
  }
}

const rabbit = new Rabbit
console.log(rabbit)

console.log(rabbit.name)
rabbit.run()
rabbit.eat()