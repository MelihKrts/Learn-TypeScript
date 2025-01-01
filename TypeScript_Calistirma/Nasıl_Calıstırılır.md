# TypeScript'i Çalıştırma
<p align="justify">Typescript tarayıcı ve Node.js tarafından doğrudan çalıştırılamaz. Bazı ek ayarlar yapılması gerekmektedir.</p>

# Gerekli Paketlerin Kurulumu
<p align="justify">Typescript için Node.js ve npm gereklidir. Node.js'i yüklemek için <a href="https://nodejs.org/en">buraya</a> tıklayın. Node.js kurulduktan sonra NPM otomatik olarak yüklenir.</p>

# Typescript'i Global Olarak Yükleme
<p align="justify">Typescript'i global olarak yüklemek için terminalde aşağıdaki komutu çalıştırın.</p>

```bash
npm install -g typescript
```
<p align="justify">Bu komut, Typescript'i global olarak yükler. Bu sayede Typescript'i herhangi bir proje içinde kullanabilirsiniz.</p>

# Typescript'i Proje Olarak Yükleme
<p align="justify">Proje içinde Typescrip'i kullanmak için tsconfig.json dosyası oluşturulması gerekmektedir. Bu dosya projenin yapısını belirler.</p>

```bash
tsc --init
```
<p align="justify">Bu komut, tsconfig.json dosyasını oluşturur.</p>

# Typescript'i Derleme
<p align="justify">Typescript kodunuzu derlemek için terminalde aşağıdaki komutu çalıştırın.</p>

```bash
tsc
```
<p align="justify">Bu komut, Typescript kodunuzu derler ve JavaScript koduna dönüştürür.</p>

# JavaScript Kodunu Çalıştırma
<p align="justify">JavaScript kodunuzu çalıştırmak için terminalde aşağıdaki komutu çalıştırın.</p>

```bash
node index.js
```
<p align="justify">Bu komut, JavaScript kodunuzu çalıştırır.</p>

# Typescript'i Çalıştırma (Opsiyonel)
<p align="justify">TypeScript dosyasını komut satırından çalıştırmak için aşağıdaki paketin indirilmesi gerekmektedir.</p>

```bash
npm install -g ts-node
```
<p align="justify">Bu komut, ts-node paketini global olarak yükler ve komut satırından TypeScript dosyalarını çalıştırabilirsiniz .</p>

```bash
ts-node index.ts
```
<p align="justify">Bu komut, index.ts dosyasını çalıştırır.</p>
