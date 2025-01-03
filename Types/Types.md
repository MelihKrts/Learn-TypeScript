# Types

<p align="justify">TypeScript'te JavaScript'in alt kümesidir. JavaScript'teki tipler TypeScript'te de kullanılmaktadır. TypeScript'in kendine özgü tipi bulunmaktadır.</p>

# Primitive Types

<p align="justify">Bir programlama dilinde en temel veri tipleridir. Tek değerleri temsil eder ve değiştirilemezler. TypeScript'teki primitive tipler:</p>

- `number`
- `string`
- `boolean`
- `null`
- `undefined`
- `symbol`
- `bigint`

## Number

<p align="justify">Sayıları temsil eder. TypeScript ek olarak onaltılık ve ondalık değişmeze ek olarak ikili ve sekizli değişmezleri de destekler.</p>

```ts
let decimal: number = 6;
let hex: number = 0xf00d;
let binary = (number = 0b1010);
let octal = (number = 0o744);
let big = (bigint = 100n);
```

## String

<p align="justify">Metinsel değerleri temsil eder. TypeScript'teki string tipleri tek veya çift tırnak ile tanımlanabilir.</p>

```ts
let name: string = 'John';
let surname: string = 'Doe';
let fullName: string = `${name} ${surname}`;
```

## Boolean

<p align="justify">Boolean değerleri temsil eder. true veya false değerlerini alır.</p>

```ts
let isDone: boolean = false;
```

## Null ve Undefined

<p align="justify">Null bir değişkenin değeri olmadığını gösterir. Undefined ise bir değişkenin tanımlanmış ama henüz bir değer atanmmış  olmadığını ifade eder.</p>

```ts
let nullValue: null = null;
let undefineValue: undefined = undefined;
```

## Symbol

<p align="justify">Sembol veri tipi her zaman benzersiz nesneler oluşturmak için kullanılır.</p>
```ts
let sym1 = Symbol();
let sym2 = Symbol("key")
```

## BigInt

<p align="justify">Büyük sayıları temsil etmek için kullanılır. JavaScript'teki sayıların sınırlarını aşan sayıları destekler.</p>

```ts
let bigInt: bigint = 100n;
```

<p align="justify">BigInt değişkenleri sadece bigint değerleriyle çalışır. Number değişkenleriyle çalışmaz.</p>

<p align="justify">Primitive tiplerden daha çok <code> string</code> , <code> number</code> ve <code>boolean </code> kullanılır. </p>

# Non-Primitive Types

<p align="justify">Non-Primitive tipler, karmaşık yapılar oluşturmak için kullanılır. İlkel tiplerden farklı olarak birden fazla değer depolayabilir ve değiştirebilirler. TypeScript'teki non-primitive tipler:</p>

- `Array`
- `Tuple`
- `Enum`
- `Object`
- `Function`
- `Union`
- `Intersection`
- `Interface`
- `Type`
- `Any`
- `Unknown`

## Array

<p align="justify">Dizi tipleri, aynı türden birden fazla değeri depolamak için kullanılır.</p>

```ts
let list: number[] = [1, 2, 3];
let mixed: (number | string)[] = [1, 'two', 3];
```

## Tuple

<p align="justify">Tuple, önceden tanımlanmış bir uzunluğa ve her indeks türlere sahip türlendirilmiş dizilerdir.</p>

```ts
let myTuple: [number, boolean, string];
myTuple = [1, true, 'hello'];

// Tuple ve Array arasındaki fark
// Tuple'da her elemanın türü belirlenmiştir ve bu sıraya göre depolanır.
```

## Enum

<p align="justify">Enum, sabit değerler kümesini temsil etmek için kullanılır. Varsayılan olarak başlangıç değeri 0'dır her ek değer 1 artar.</p>

```ts
enum Color {
  Red,
  Green,
  Blue,
}
let myColor = Color.Green;
console.log(myColor);
```

## Object

<p align="justify">Nesneler, anahtar-değer (key-value) çiftlerinden oluşur.</p>

```ts
let person: { name: string; age: number } = {
  name: 'John',
  age: 30,
};
console.log(person.name);
```

## Function

<p align="justify">Fonksiyonlar, belirli bir görevi yerine getirmek için kullanılır.</p>

```ts
function add(a: number, b: number): number {
  return a + b;
}
let result = add(1, 2);
console.log(result);
```

## Union

<p align="justify">Union, bir değişkenin birden fazla tipi olabileceğini belirtir.</p>

```ts
let myValue: number | string;
myValue = 'hello';
myValue = 10;
console.log(myValue);
```

## Intersection

<p align="justify">Intersection, birden fazla tipi birleştirmek için kullanılır.</p>

```ts
type User = {
  name: string;
  age: number;
};

type Address = {
  city: string;
  country: string;
};

type UserWithAddress = User & Address;

const user: UserWithAddress = {
  name: 'John',
  age: 30,
  city: 'Texas',
  country: 'USA',
};

console.log(user.name);
console.log(user.age);

// User ve Address adında tür tanımlandı
// UserWithAddress türü User ve Address türleri birleştirilerek oluşturuldu
// UserWithAddress nesnesi her iki türün özelliğini desteklemektedir.
```

## Interface

<p align="justify">Interface genellikle nesne türlerini tanımlamak için kullanılır.</p>

```ts
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'John',
  age: 30,
};
console.log(user.name);
console.log(user.age);
```

## Type
<p align="justify">Type bir değişkenin türünü belirtmek için kullanılır. </p>

```ts
type User = {
  name: string;
  age: number;
};  
```

### :warning: **Interface ve Type arasındaki fark**

<p align="justify">Interface ve Type arasındaki en büyük fark, Type'ın sadece birkez tanımlanmasıdır. Interface'in ise birden fazla kez tanımlanması mümkündür.</p>

## Any
<p align="justify">Any tipi, herhangi bir türü temsil edebilir. Bu tip, TypeScript'teki en geniş tipdir. Kullanımı önerilmez.</p>

```ts
let myValue: any = 'hello';
myValue = 10;
console.log(myValue);
```	

## Unknown
<p align="justify">Türü belirlenmemiş bir değişkeni temsil eder. Any tipine benzer ancak daha kısıtlıdır.</p>

```ts
let myValue: unknown = 'hello';
myValue = 10;
console.log(myValue);
```
