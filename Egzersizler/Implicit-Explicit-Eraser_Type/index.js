"use strict";
// Implicit Types
let a = 10;
console.log(typeof a);
// TypeScript değişkeninin tipini otomatik olarak number olarak belirler.
// Explicit Types
let b = "10";
console.log(typeof b);
// Geliştirici b değişkeninin tipini string olarak belirler ve manuel olarak belirtilir.
// Erased Types
function add(a, b) {
    return a + b;
}
// Derleme zamanında a ve b değişkenlerinin tür bilgisi kaldırılacaktır.
