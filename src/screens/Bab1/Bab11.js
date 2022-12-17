import React from "react";
import "./imk.css";

export default function Bab11(props) {
  const { readFull, style, windowWidth } = props;
  const RenderSmall = () => {
    return (
      <>
        <h2>1.1 ANTAR MUKA MANUSIA DAN KOMPUTER</h2>
        <div className="flex flex-col flex-wrap justify-center content-center">
          {readFull === false && (
            <div className="w-full flex flex-wrap justify-center">
              <img
                className="w-7/12"
                src={require("../../assets/BAB11.png")}
                alt="Bab 1.1"
              />
            </div>
          )}
          <p className="paragraph font-sans">
            Prinsip dasar sebuah system komputer adalah masukan, proses,
            keluaran (input, process, output). Kepada komputer, pengguna
            memberikan data masukan, yang biasanya berupa angka maupun deretan
            karakter. Data masukan ini kemudian diolah (diproses) oleh komputer
            menjadi keluaran yang diinginkan atau di harapkan pengguna. Ketika
            seseorang bekerja dengan sebuah komputer, secara di sadari atau
            tidak, dia melakukan Interaksi degnan komputer dengan menggunakan
            cara - cara tertentu. Interaksi terjadi ketika pengguna memasukan
            data, yang kemudian akan di tanggapi oleh komputer dengan
            menampilkan suatu keluaran ke layar tampilan atau ke pencetak. Dari
            jargon "masukan, proses, keluaran" di atas, pengguna memang tidak
            tahu menahu (atau tidak ingin tahu) proses yang sesungguhnya terjadi
            di dalam system komputer. Dengan kata lain, lewat masukan dan
            keluaranlah pengguna dan komputer saling berinteraksi.
            <br />
            <br />
            Media Interaksi diperlukan agar pengguna dan komputer dapat
            berinteraksi. Dengan adanya Interaksi ini maka pengguna akan
            merasakan keramahan system komputer yang digunakannya. Sebagai
            contoh, program yang tersaji pada Gambar 1.1 adalah program
            sederhana yang ditulis menggunakan bahasa pemrograman Python. Dalam
            program contoh sederhana interaksi adalah ketika pengguna menerapkan
            raw_input dan/atau input. Ketika komputer mengolah statemen komputer
            meminta pengguna untuk memasukkan data ke komputer, Selanjutnya,
            statemen print digunakan untuk mencetak hasil pengerjaan oleh
            komputer. (Gambar 1.1 menunjukkan contoh penggunaan statemen
            raw_input, input, dan print pada bahasa pemrograman Python yang
            digunakan untuk meminta masukan dari pengguna dan mencetak keluaran.
            Nomor baris yang dituliskan pada Gambar 1 .1.a hanya digunakan untuk
            mempermudah penulis menjelaskan satu atau sekelompok statemen pada
            program yang dimaksud.) Program pada Gambar 1.1.a mempunyai dua buah
            statemen raw_input sebuah statemen input, dan lima buah statemen
            print yang salah satunya tidak diikuti apapun (baris 13). Variasi
            statemen print sama, yakni untuk mencetak suatu keluaran hasil
            eksekusi program. Tetapi, dapatkah Anda membedakan kedua variasi
            ini? Statemen print yang pertama (baris 13) digunakan untuk mencetak
            sebuah baris kosong di antara kelompok pengisian data dan pencetakan
            hasil (lihat Gambar 1.1.b). Statemen print yang lain digunakan untuk
            mencetak kata Hallo dan kata-kata yang lain (baris 14 dan
            seterusnya).
            <br />
            <br />
            [1] #----------------------------------------- <br />
            [2] # Contoh peggunaan statement masukan dan keluaran <br />
            [3] #----------------------------------------- <br />
            [4] # ! /usr/ local/ bin/ python <br />
            [5] # -*- coding: utf—8 -*- <br />
            [7] #--- meminta masukan dari pengguna ---
            <br />
            [8] #nama = raw_input( 'Nama Anda? ' ) <br />
            [9] #alamat = raw_input( ' Alamat Anda? <br />
            [10] #umur = input( 'Usia Anda? ' ) <br />
            [12] #--- mencetak hasil -- <br />
            [13] #print <br />
            [14] #print 'hallo,' <br />
            [15] #print 'Nama Anda: ' , nama <br />
            [16] #print 'Alamat Anda: ' , alamat <br />
            [17] #print 'usia Anda: ' , umur <br />
            Nama anda? Hobin
            <br /> Alamat Anda? Yogyakarta <br />
            Usia Anda? 30 <br />
            Hallo, Nama Anda: Hobin <br />
            Alamat Anda: yogyakarta <br />
            Usia Anda: 30
          </p>
        </div>
      </>
    );
  };
  const RenderBig = () => {
    return (
      <>
        <h2>1.1 ANTAR MUKA MANUSIA DAN KOMPUTER</h2>
        <div className="row">
          <p className="paragraph font-sans">
            Prinsip dasar sebuah system komputer adalah masukan, proses,
            keluaran (input, process, output). Kepada komputer, pengguna
            memberikan data masukan, yang biasanya berupa angka maupun deretan
            karakter. Data masukan ini kemudian diolah (diproses) oleh komputer
            menjadi keluaran yang diinginkan atau di harapkan pengguna. Ketika
            seseorang bekerja dengan sebuah komputer, secara di sadari atau
            tidak, dia melakukan Interaksi degnan komputer dengan menggunakan
            cara - cara tertentu. Interaksi terjadi ketika pengguna memasukan
            data, yang kemudian akan di tanggapi oleh komputer dengan
            menampilkan suatu keluaran ke layar tampilan atau ke pencetak. Dari
            jargon "masukan, proses, keluaran" di atas, pengguna memang tidak
            tahu menahu (atau tidak ingin tahu) proses yang sesungguhnya terjadi
            di dalam system komputer. Dengan kata lain, lewat masukan dan
            keluaranlah pengguna dan komputer saling berinteraksi.
            <br />
            <br />
            Media Interaksi diperlukan agar pengguna dan komputer dapat
            berinteraksi. Dengan adanya Interaksi ini maka pengguna akan
            merasakan keramahan system komputer yang digunakannya. Sebagai
            contoh, program yang tersaji pada Gambar 1.1 adalah program
            sederhana yang ditulis menggunakan bahasa pemrograman Python. Dalam
            program contoh sederhana interaksi adalah ketika pengguna menerapkan
            raw_input dan/atau input. Ketika komputer mengolah statemen komputer
            meminta pengguna untuk memasukkan data ke komputer, Selanjutnya,
            statemen print digunakan untuk mencetak hasil pengerjaan oleh
            komputer. (Gambar 1.1 menunjukkan contoh penggunaan statemen
            raw_input, input, dan print pada bahasa pemrograman Python yang
            digunakan untuk meminta masukan dari pengguna dan mencetak keluaran.
            Nomor baris yang dituliskan pada Gambar 1 .1.a hanya digunakan untuk
            mempermudah penulis menjelaskan satu atau sekelompok statemen pada
            program yang dimaksud.) Program pada Gambar 1.1.a mempunyai dua buah
            statemen raw_input sebuah statemen input, dan lima buah statemen
            print yang salah satunya tidak diikuti apapun (baris 13). Variasi
            statemen print sama, yakni untuk mencetak suatu keluaran hasil
            eksekusi program. Tetapi, dapatkah Anda membedakan kedua variasi
            ini? Statemen print yang pertama (baris 13) digunakan untuk mencetak
            sebuah baris kosong di antara kelompok pengisian data dan pencetakan
            hasil (lihat Gambar 1.1.b). Statemen print yang lain digunakan untuk
            mencetak kata Hallo dan kata-kata yang lain (baris 14 dan
            seterusnya).
            <br />
            <br />
            [1] #----------------------------------------- <br />
            [2] # Contoh peggunaan statement masukan dan keluaran <br />
            [3] #----------------------------------------- <br />
            [4] # ! /usr/ local/ bin/ python <br />
            [5] # -*- coding: utf—8 -*- <br />
            [7] #--- meminta masukan dari pengguna ---
            <br />
            [8] #nama = raw_input( 'Nama Anda? ' ) <br />
            [9] #alamat = raw_input( ' Alamat Anda? <br />
            [10] #umur = input( 'Usia Anda? ' ) <br />
            [12] #--- mencetak hasil -- <br />
            [13] #print <br />
            [14] #print 'hallo,' <br />
            [15] #print 'Nama Anda: ' , nama <br />
            [16] #print 'Alamat Anda: ' , alamat <br />
            [17] #print 'usia Anda: ' , umur <br />
            Nama anda? Hobin
            <br /> Alamat Anda? Yogyakarta <br />
            Usia Anda? 30 <br />
            Hallo, Nama Anda: Hobin <br />
            Alamat Anda: yogyakarta <br />
            Usia Anda: 30
          </p>
          {readFull === false && (
            <img
              className="imgSize"
              src={require("../../assets/BAB11.png")}
              alt="Bab 1.1"
            />
          )}
        </div>
      </>
    );
  };
  return (
    <div style={style}>
      {windowWidth > 1200 ? <RenderBig /> : <RenderSmall />}
    </div>
  );
}
