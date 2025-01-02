// Implicit Types

let a = 10;
console.log(typeof a)

// TypeScript değişkeninin tipini otomatik olarak number olarak belirler.

// Explicit Types

let b: string= "10"
console.log(typeof b)

// Geliştirici b değişkeninin tipini string olarak belirler ve manuel olarak belirtilir.

// Erased Types

function add (a:number, b:number):number{
    return a + b
}
// Derleme zamanında a ve b değişkenlerinin tür bilgisi kaldırılacaktır.