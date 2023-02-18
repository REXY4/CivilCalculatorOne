# Civil Calculator

Deskripsi proyek singkat.

## Prasyarat

Pastikan bahwa perangkat lunak berikut telah terpasang di mesin pengembangan lokal Anda:

- Node.js (v12 atau yang lebih baru)
- npm

## Instalasi

Untuk menginstal proyek React Native, ikuti langkah-langkah berikut:

1. Buka jendela terminal dan arahkan ke direktori di mana Anda ingin membuat proyek.
3. install proyek dengan menggunakan :

```
    npm install
```
## Menjalankan Aplikasi

Untuk menjalankan aplikasi pada perangkat Android, ikuti langkah-langkah berikut:

1. Sambungkan perangkat Android Anda ke komputer dengan kabel USB.
2. Aktifkan pengaturan pengembang dan debugging USB di perangkat Android Anda.
3. Buka jendela terminal dan arahkan ke direktori proyek.
4. Jalankan perintah berikut untuk memulai aplikasi di perangkat Anda:
- jalankan adb devices di terminal/powershell 
    ```
        adb devices
    ```
- lalu copy id devices seperti yang di bawah ini 
    ```
        List of devices attached
        7hivwkpnu4pffaxo        device
    ```    
 -copy contho id yang di atas  '7hivwkpnu4pffaxo'   
 - jalan kan perintah ini untuk bisa di jalankan di hp android   
```
    npx react-native run-android --deviceId=<id device>
```
## Struktur Proyek

Struktur proyek terorganisir sebagai berikut:

- `src/components/`: Tempat untuk menyimpan komponen yang dapat digunakan kembali.
- `src/screens/`: Tempat untuk menyimpan layar aplikasi.
- `src/routes/`: Tempat untuk mendefinisikan rute navigasi aplikasi Anda.
- `src/utils/`: Tempat untuk menyimpan fungsi utilitas.

## Ketergantungan

Berikut adalah dependensi yang digunakan dalam proyek ini:

- `native-base`: Pustaka ini menyediakan komponen UI dan gaya yang telah didesain sebelumnya untuk aplikasi React Native.

Untuk informasi lebih lanjut tentang cara menggunakan `native-base`, Anda dapat merujuk ke dokumentasi resmi:

https://docs.nativebase.io/

