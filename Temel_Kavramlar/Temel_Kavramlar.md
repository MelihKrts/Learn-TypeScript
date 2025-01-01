# Temel Kavramlar

# Dinamik ve Statik Tip Kontrolü
<p align="justify">TypeScript kdou yürütmeden önce bir programı hatalara karşı kontrol eder ve bunu değer türüne göre yapar.</p> <br>
<p align="justify">JavaScript'te değişkenler doğrudan herhangi bir belirli değer tipiyle ilişkilendirilmez ve herhangi bir değişkene tüm tiplerdeki değerler atanabilir ve değiştirilebilir.</p>

# Dynamic Typing
```javascript
let a = 10;

a = "ten";
a = true;
console.log(typeof a);

// İlk başta a değişkeni tanımlıyoruz.  10 değerini alıyor number tipinde

// İkinci satırda a değişkeni string veri tipinde 

// Üçüncü satırda a değişkeni boolean veri tipinde

// Konsolda a değişkeni veri tipi boolean olarak görünüyor. En başta number tipine sahipti.

// Bu yapı dinamik tip kontrolüdür.
```
<br>

# Static Typing
```typescript
let a = 10;
a = "ten";

// Bu kodu çalıştığında hata verecektir. Çünkü a değişkeni number tipinde tanımlıdır ve string değer atanamaz.

// Kodu çalıştırdığınızda Type 'string' is not assignable to type 'number'. hatası döndürecektir. Bu hata sayı türü (number) değer dize (string) değer atamasına TypeScript tarafından izin verilmemektedir.

// Bu yapı statik tip kontrolüdür.
```

