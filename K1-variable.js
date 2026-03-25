// []=|=|=|=|-----|=|-----({ KONSEP 1 : VARIABLE })-----|=|-----|=|=|=|=[]

/*
    1. APA ITU VARIABEL ?
    ---------------------
       Variabel adalah wadah bernama untuk menyimpan dan memanipulasi data (nilai) dalam program, yang nilainya dapat berubah atau digunakan kembali selama eksekusi kode

    2. MENDEKLARASIKAN VARIABEL
    ---------------------------
       Mendeklarasikan variabel di JavaScript dapat dengan 3 kata kunci yaitu :
       - const (digunakan untuk nilai konstan (tetap) yang tidak boleh diubah setelah inisialisasi)
       - let (digunakan untuk variabel yang nilainya dapat berubah dikemudian hari)
       - var (hindari penggunaannya karena 'var' tidak dibatasi oleh blok (scope) dan rawan error)
       
       Cara mendeklarasikan variabel :
         ~~~~~~~~~~~~~~~~~~~~~
       - let harga = 10000;
         harga = 20000;
         ~~~~~~~~~~~~~~~~~~~~~
       - const phi = 3.14;
         / phi = 3.15 -> Error
         ~~~~~~~~~~~~~~~~~~~~~

       Aturan penamaan variabel (Identitas) :
       - Nama variabel harus dimulai dengan huruf, garis bawah (_), atau tanda dolar ($)
       - Tidak boleh dimulai dengan angka
       - Sensitif terhadap huruf besar-kecil ('nama' dengan 'Nama' berbeda)
       - Tidak boleh menggunakan nama yang sudah menjadi kata kunci (reserved words) seperti let, class, function, dll

       Tips :
       Selalu gunakan const sebagai default , dan gunakan let jika benar-benar nilainya akan berubah

    3. HOISTING (PENGANGKATAN)
    --------------------------
       Hoisting adalah sebuah perilaku JavaScript ketika penjalanan kode ditulis terlebih dahulu sebelum variabel yang akhirnya variabelnya otomatis diangkat ke kode tersebut, namun akan menghasilkan 'undefined'. Itu hanya untuk variabel dengan kata kunci 'var', namun jika menggunakan 'const' atau 'let', ia akan error. Ia diangkat, tapi dia dilarang dan masuk ke dalam "Temporal Dead Zone". Namun, function dapat di hoisting tanpa mengubah isinya (menjadi undefined) dan ini hanya untuk function declarations, bukan function expressions.
*/

let tahunLahir = 2009;
let tahunSekarang = 2026;
const umur = tahunSekarang - tahunLahir;
console.log(umur);

const namaProduk = `Bakso`;
let harga = 15000;
harga = 20000;
console.log(`Harga ${namaProduk} adalah Rp. ${harga}`);

let score = 10;
let upScore = 5;
score = score + upScore;
console.log(score);

console.log(sapa);
var sapa = "Halo";
console.log(sapa);

sapaHai("Alvino");
function sapaHai(nama) {
    console.log(`Halo, ${nama}`);
}

// y(); - Error: y is not a function
let y = function () {
    console.log("Ini adalah function expression");
}
y();

const number = 1;
// number = 2; - Error: Assignment to constant variable.

const a = 1;
const b = a;
let c = b;
const d = 2;
c += d;
console.log(c); 

const o = 1;
{
  let p = 2;
  p += o;
  console.log(p);
}
// console.log(p); - Error: p is not defined

const r = 1;
{
  var s = 2;
}
console.log(s); // Output: 2 (var tidak memiliki block scope)