// Temel Kavramlar kısmında Dinamik ve Statik tiplerin karşılaştırılması

// Dinamik Tip Kullanımı Örnek

let a = 10;
a = "ten"; 
// TypeScript dosyası bu kısımda hata verir dinamik tip kullanımına izin vermez ama index.js dosyası bu kısımda hata vermez.

// Bu kod kısmı hatalı değil TypeScript yapısı gereği hata vermektedir ama JavaScript çalışma mantığı ile aynı olup kodu yukarıdan aşağıya doğru çalıştırır. Bu kısım TypeScript'te çalışmayacağından aşağıdaki kodlar çalışmayacaktır. Bunun geçici olarak çözmek için bu yöntemlerden bir tanesini kullanabilirsiniz.

// @ts-ignore kullanarak tip hatasını görmezden gelecektir. Örnek kullanımı aşağıdaki gibidir.

/*
let a = 10;
// @ts-ignore
a = "ten"; // Bu hata artık görmezden gelinecek
console.log(a);

*/

// Any kullanmak: Bu kullanım ile TypeScript'teki tip kontrolünü kaldırır ve tüm değerleri kabul eder. Bunu projelerinizde ve normalde de kullanılması tavsiye edilmez.

// tsconfig.json dosyasında compilerOptions strict:false yapılırsa dinamik tip kullanımına izin verilir.

console.log(a);

// Statik Tip Kullanımı Örnek

let b: number = 10 

// Burada b değişkeni number tipinde tanımlanmıştır TypeScript otomatik olarak b değişkeninin tipini number olarak algılar hata oluşmama ihtimaline karşı değişken tipini belirtebilirsiniz. Bu kullanım ile TypeScript b değişkeni sadece number tipinde değer alabilir bu konu daha sonra detaylı bir şekilde anlatılacaktır.

b = 20;
console.log(b)

