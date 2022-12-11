import React from "react";
import "./imk.css";

export default function Bab14(props) {
  const { readFull } = props;
  return (
    <div>
      <h1>1.4 STRATEGI PENGEMBANGAN ANTARMUKA</h1>
      <div className="row">
        <p className="paragraph font-sans">
          Dari beberapa hal yang dijelaskan di atas tersirat bahwa sebuah
          program aplikasi terdiri atas dua bagian penting. Bagian pertama
          adalah bagian antarmuka yang berfungsi sebagai sarana dialog antara
          manusia dengan komputer yang menjalankan program aplikasi tersebut.
          Bagian kedua adalah bagian aplikasi yang merupakan bagian yang
          berfungsi menghasilkan informasi berdasar olahan data menggunakan
          suatu algoritma tertentu. Pernahkah Anda membayangkan tingkat
          kcsulitan untuk menulis bagian antarmuka dan bagian aplikasinya? M
          yers (1989) berikan satu contoh dari hasil penelitian pada berbagai
          aplikasi dasan buatan yang menunjukkan bahwa 40 sampai 50 persen
          keseluruhan statemen pada program aplikasi tersebut dan memori yang
          ada diperuntukkan bagi antarmuka. Dengan kata lain, usaha yang
          diperlukan untuk menulis bagian antarmuka (yang seharusnya hanya
          sebagai "wajah" dari sebuah program aplikasi) seringkali sama atau
          bahkan melebihi usaha yang diperlukan untuk menuliskan bagian
          aplikasinya sendiri. Untuk mengatasi hal ini maka harUs digunakan
          strategi yang tepat agar usaha yang memang sangat besar itu tidak
          menjadi sia-sia. Seperti disinggung pada subbab sebelumywa, bagian
          antarmuka dan bagian aplikasi dapat dikatakan merupakan dua bagian
          terpisah yang masing-masing diimplementasikan secara terpisah pula.
          Bagian antarmuka lebih banyak berurusan dengan cara penyajian
          'informasi yang semudah dan semenarik mungkin, dan bagian aplikasi
          akan mengimplementasikan suatu atau beberapa algoritma yang saling
          berhubungan untuk menyelesaikan suatu persoalan. Implementasi bagian
          antarmuka dan bagian aplikasi dapat dikerjakan secara paralel oleh tim
          yang berbeda. Secara garis besar, pengembangan bagian• ántarmuka perlu
          memperhatikan beberapa hal berikut: 1. Pengetahuan tentang mekanisme
          fungsi manusia sebagai pengguna komputer. Hal ini menyangkut antara
          lain psikologi kognitif, tingkat perseptual, dan kemampuan motorik
          dari pengguna. 2. Berbagai informasi yang berhubungan Xdengan
          karakteristik dialog seperti ragam dialog, struktur, isi tekstual dan
          grafis, tanggapan wak_ tu, dan kecepatan tampilan, Pendapat umum
          seiing menjadi salah satu bagian penting dalam pengembangan antarmuka,
          tetapi perancang tidak boleh hanya mengandalkan pendapat umum ini. 3.
          Penggunaan purwarupa yang didasarkan pada spesifikasi dialog formal
          yang disusun secara bersama-sama antara (calon) pengguna dan perancang
          sistem, serta peranti bantu yang mungkin dapat di gunakan untuk
          mempercepat proses pembuatan purwarupa. 4. Teknik evaluasi yang di
          gunakan untuk mengevaluasi hasil proses purwarupa yang telah
          dilakukan, antara lain berdasarkan pada analisis atas transaksi dialog
          secara empirik menggunakan uji coba pada sejumlah kasus, umpan balik
          pengguna yang dapat dikerjakan dengan tanya jawab maupun kuesioner,
          dan beberapa analisis yang di kerjakan oleh Antarmuka Seperti
          dijelaskan di atas, IMK adalah bidang ilmu yang terbuka untuk di di
          pengaruhi dan mempengaruhi berbagai disiplin ilmu lain, yang
          cakupannya meliputi teknik dan ilmu komputer sampai ilmu pengetahuan
          tentang manusia, seperti psikologi, linguistic, dan ergonomis.
          Mengingat luasnya cakupan disiplin i8lmu di atas. Dengan demikian ahli
          interaksi manusia kompuer biasanya mempunyai spesialisasi dalam biang
          tertentu.
        </p>
        {readFull === false && (
          <img className="imgSize" src={require("../../assets/BAB1.png")} />
        )}
      </div>
    </div>
  );
}
