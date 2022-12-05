import React from "react";
import "./imk.css";

export default function Bab11() {
  return (
    <div>
      <h1>1.1 ANTAR MUKA MANUSIA DAN KOMPUTER</h1>
      <div>
        Prinsip dasar sebuah system komputer adalah masukan, proses, keluaran
        (input, process, output). Kepada komputer, pengguna memberikan data
        masukan, yang biasanya berupa angka maupun deretan karakter. Data
        masukan ini kemudian diolah (diproses) oleh komputer menjadi keluaran
        yang diinginkan atau di harapkan pengguna. Ketika seseorang bekerja
        dengan sebuah komputer, secara di sadari atau tidak, dia melakukan
        Interaksi degnan komputer dengan menggunakan cara - cara tertentu.
        Interaksi terjadi ketika pengguna memasukan data, yang kemudian akan di
        tanggapi oleh komputer dengan menampilkan suatu keluaran ke layar
        tampilan atau ke pencetak. Dari jargon "masukan, proses, keluaran" di
        atas, pengguna memang tidak tahu menahu (atau tidak ingin tahu) proses
        yang sesungguhnya terjadi di dalam system komputer. Dengan kata lain,
        lewat masukan dan keluaranlah pengguna dan komputer saling berinteraksi.
        Media Interaksi diperlukan agar pengguna dan komputer dapat
        berinteraksi. Dengan adanya Interaksi ini maka pengguna akan merasakan
        keramahan system komputer yang digunakannya. Sebagai contoh, program
        yang tersaji pada Gambar 1.1 adalah program sederhana yang ditulis
        menggunakan bahasa pemrograman Python. Dalam program contoh sederhana
        interaksi adalah ketika pengguna menerapkan raw_input dan/atau input.
        Ketika komputer mengolah statemen komputer meminta pengguna untuk
        memasukkan data ke komputer, Selanjutnya, statemen print digunakan untuk
        mencetak hasil pengerjaan oleh komputer. (Gambar 1.1 menunjukkan contoh
        penggunaan statemen raw_input, input, dan print pada bahasa pemrograman
        Python yang digunakan untuk meminta masukan dari pengguna dan mencetak
        keluaran. Nomor baris yang dituliskan pada Gambar 1 .1.a hanya digunakan
        untuk mempermudah penulis menjelaskan satu atau sekelompok statemen pada
        program yang dimaksud.) Program pada Gambar 1.1.a mempunyai dua buah
        statemen raw_input sebuah statemen input, dan lima buah statemen print
        yang salah satunya tidak diikuti apapun (baris 13). Variasi statemen
        print sama, yakni untuk mencetak suatu keluaran hasil eksekusi program.
        Tetapi, dapatkah Anda membedakan kedua variasi ini? Statemen print yang
        pertama (baris 13) digunakan untuk mencetak sebuah baris kosong di
        antara kelompok pengisian data dan pencetakan hasil (lihat Gambar
        1.1.b). Statemen print yang lain digunakan untuk mencetak kata Hallo dan
        kata-kata yang lain (baris 14 dan seterusnya). [1]
        #----------------------------------------- [2] # Contoh peggunaan
        statement masukan dan keluaran [3]
        #----------------------------------------- [4] # ! /usr/ local/ bin/
        python [5] # -*- coding: utf—8 -*- [7] #--- meminta masukan dari
        pengguna --- [8] #nama = raw_input( 'Nama Anda? ' ) [9] #alamat =
        raw_input( ' Alamat Anda? [10] #umur = input( 'Usia Anda? ' ) [12] #---
        mencetak hasil -- [13] #print [14] #print 'hallo,' [15] #print 'Nama
        Anda: ' , nama [16] #print 'Alamat Anda: ' , alamat [17] #print 'usia
        Anda: ' , umur Nama anda? Hobin Alamat Anda? Yogyakarta Usia Anda? 30
        Hallo, Nama Anda: Hobin Alamat Anda: yogyakarta Usia Anda: 30
      </div>
    </div>
  );
}
