# Implicit & Explicit Types
<p align="justify">TypeScript'te değişkenlerin tipini belirlemek için kullanılan iki yöntem vardır. Implicit ve Explicit Types. Tür doğrulaması bir değerin tipini ayarlama ve derleyicinin bu değerin tipini kontrol etmektir. </p> <br>

# Implicit Types
<p align="justify">Implicit Types TypeScript'in otomatik olarak değişkenlerin tipini belirlemesidir.</p>

```ts
let a = 10;
console.log(a)

// a değişkeninin tipi number'dır otomatik olarak belirlenir.A değişkenininin değerini string'e atarsak Typescript hata verecektir.
```

# Explicit Types
<p align="justify">Explicit Types değişkenin geliştirici tarafından belirlenmesidir. Bu türün belirsiz olduğu veya kesin olarak kontrol edilmesi gerektiği durumlarda kullanılır.</p>

```typescript
let a: number = 10
console.log(a)

// a değişkeninin tipi number olduğunu geliştirici tarafından number olarak belirtilmiş.
```
# Erased Types
<p align="justify">Implicit ve Explicit Types'ın ekstra olarak Erased Types bulunmaktadır. Erased Types derleme zamanında tür açıklamasının kaldırılması ve çalışma zamanında yürütülmek üzere yalnızca JavaScript kodunun oluşturulmasıdır.</p>

```typescript
function add (a:number, b:number):number{
    return a + b
}

```
<p align="justify">Derleme zamanında a ve b değişkenlerinin tür bilgisi kaldırılır JavaScript kodunda bu şekilde görünür.</p>

```typescript
function add (a, b){
    return a + b
}
```
