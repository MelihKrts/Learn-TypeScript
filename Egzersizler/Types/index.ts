// Primitive Types Egzersiz

// Number
let deciimal: number = 10;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

// String
let firstName: string = "John";
let lastName: string = "Doe";
let fullName: string = `${firstName} ${lastName}`

// Boolean
let isOpen: boolean = true

// Array
let cars: string[] = ["Ford", "Toyota", "Honda"]

// Null ve Undefined
let nullValue: null = null

// Null bir değişeknin değeri olmadığını gösterir. JavaScript kaynaklı nedeniyle null tipi object olacaktır.

let undefinedValue: undefined = undefined
// undefined bir değişkenin tanımlanmış ama henüz bir değer atanmamış olduğunu gösterir.

// Symbol
let sym1: symbol = Symbol()
let sym2: symbol = Symbol("key")

// BigInt
let bigInt: bigint = 100n

// Non-Primitive Types

// Array
let numbers: number[] = [1, 2, 3, 4, 5]

// Tuple
let person: [string, number] = ["John", 30]
console.log(person[0]) // Tuple değerine index ile erişebiliriz John değerini alırız.

// Enum
enum Color {
    Red = 5,
    Green,
    Blue,
}
let myColor: Color = Color.Blue
console.log(myColor) // 7 değerini alırız.

enum Fruit {
    Apple = "Apple",
    Banana = "Banana",
    Orange = "Orange",
}
let myFruit: Fruit = Fruit.Apple
console.log(myFruit)

// Object

let personal: { name: string, age: number } = {
    name: "John",
    age: 30
}
console.log(personal.name)

// Function

let add: (a: number, b: number) => number = (a, b) => a + b
console.log(add(1, 2))

// Union
let myValue: number | string = 10
myValue = "ten"
console.log(myValue)


// Intersection
type Employee = {
    name: string
    age: number
}

type Manager = {
    department: string
}

type EmployeeManager = Employee & Manager

const employeeManager: EmployeeManager = {
    name: "John",
    age: 30,
    department: "Sales"
}
console.log(employeeManager)

// Interface

interface User {
    name: string,
    age: number
}

const user: User = {
    name: "John",
    age: 30
}
console.log(user.name)
console.log(user.age)

// Type 

type Car = {
    name: string,
    model: string,
    year: number
}

const car: Car = {
    name: "Ford",
    model: "Focus",
    year: 2015
}
console.log(car.name)
console.log(car.model)
console.log(car.year)


// Any

let value: any = "Text"
value = 5;
value = true;
value = {
    name: "John",
    age: 30
}
value = [1, 2, 3, 4, 5]

// Unknown

let unknownValue: unknown = "Text"
console.log(unknownValue.toUpperCase()) // any kıyasla unknown daha kısıtlıdır işlem yapmak için kontrol gereklidir bu kod uyarı verecektir.

if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase())
}

console.log(unknownValue)


