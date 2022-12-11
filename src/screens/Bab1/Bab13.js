import React from "react";
import "./imk.css";

export default function Bab13(props) {
  const { readFull } = props;
  return (
    <div>
      <h1>1.3 PERANTI BANTU PENGEMBANG SISTEM</h1>
      <div className="row">
        <p className="paragraph font-sans">
          Salah satu kriteria yang harus dimiliki oleh sebuah perangkat lunak
          untuk mendapatkan predikat "ramah dengan pengguna" adalah bahwa
          perangkat lunak tersebut mempunyai antarmuka yang bagus, mudah
          dioperasikan, mudah dipelajari, dan pengguna selalu merasa senang
          untuk menggunakannya. Tetapi perlu disadari bahwa merancang antarmuka
          yang bagus merupakan pekerjaan yang sangat sukar. Semakin ramah
          antarmuka tersebut, semakin sukar untuk diimplementasikan. Kesulitan
          yang timbul dalam pengembangan fasilitas antarmuka dari sebuah
          perangkat lunak antara lain adalah bahwa antarmuka itu harus menangani
          sejumlah peranti kontrol, seperti papan ketik dan tetikus (mouse) -
          yang masing-masing dapat mengirimkan aliran data secara tak sinkron,
          sementara selera dan kebasaan pengguna sangat beragam. Selain itu,
          antar muka juga harus mempunyai kinerja yang ketat untu meyakinkan
          bahwa tidak terjadi keterlambatan antara tindakan pengguna dengan
          tanggapan sistem. oleh karena itu, pengembangan Antarmuka biasanya di
          lakukan dengan membuat purwarupa terlebih dahulu, dan baru kemudian di
          kembangkan sesuai dengan kebutuhan pengguna secara umum. Untuk
          mempercepat proses perancangan dan pengembangan antarmuka, perancang
          sering memanfaatkan peranti bantu pengembang sistem untarmuka. Sekitar
          pertengahan tabun 1980-an, MacApp dari Apple merupakan salah satu
          peranti bantu pengembang sistem antarmuka yang sukses dilihat dari
          berkurangnya waktu pengembangan yang sampai empat atau lima kali.
          Dewasa ini, dengan semakin banyaknya kompiler pemrograman Visual.
          terutama yang berbasis pada .NET, seperti Visual Cit, maupun yang
          lain, kita dapat mengembangkan sebuah program aplikasi sekaligus
          dengan antarmuka berbasis grafis yang sangat luwes dan mudah untuk
          dikembangkan. Untuk aplikasi berbasis Web, Front Page dan Dreamweaver
          merupakan dua program bantu, di antara sekian banyak program bantu,
          yang dapat mendukung pembuatan purwarupa secara cepat. Selain itu,
          sejumlah peranti masukan, seperti tetikus, sudah merupakan peranti
          masukan standar seperti halnya papan ketik, sehingga saat ini kita
          tidak direpotkan lagi dengan berbagai usaha yang diperlukan untuk
          menangani berbagai peranti masukan. Penggunaan peranti bantu untuk
          mengembangkan antarmuka mempunyai keuntungan antara lain: 1. Antarmuka
          yang dihasilkan menjadi lebih baik: a. Hasil rancangan sementara
          segera dapat dibuatkan purwarupanya atau diimplementasikan secara
          penuh, bahkan sebelum aplikasinya ditulis. b. Perubahan yang
          diinginkan pengguna dapat segera dilakukan karena antarmukanya mudah
          dimodifikasi. c. Sebuah aplikasi dapat mempunyai lebih dari sebuah
          Antarmuka. d. Sejumlah aplikasi yang berbeda dapat mempunyai antarmuka
          yang konsisten, karena mereka dibangun dengan menggunakan peranti
          bantu yang sama. e. Memberikan "wajah” yang unik dan sentuhan khusus
          kepada program aplikasi yang akan dibangun. f. Memungkinkan sejumlah
          ahli bekerja bersama untuk memberikan kontribusinya masing-masing,
          misalnya ahli grafis, psikolog, ahli kognitif, maupun spesialis human
          factor. 2. Program antarmuka menjadi mudah ditulis dan lebih ekonomis
          untuk dipelihara: a. Program antarmuka menjadi lebih terstruktur dan
          lebih modular karena sudah dipisahkan dari aplikasinya. Hal ini
          memungkinkan pengguna untuk mengubah antarmuka tanpa mempengaruhi
          aplikasinya, dan memungkinkan pemrogram untuk mengubah program
          aplikasi tanpa mengubah antarmukanya. b. Program antarmuka lebih
          bersifat dapat-digunakan-kembali (reusable) karena peranti bantu
          menggabungkan bagian-bagian yang sama. c. Kehandalan antarmuka menjadi
          lebih tinggi, karena program iłu dibangkitkan secara otomatis dari
          tingkat spesifikasi yang lebih tinggi. d. Spesifikasi antarmuka
          menjadi lebih mudah diungkapkan, divalidasi, dievaluasi, dan
          dimodifikasi. e. Ketergantungan peranti diisolasi di dałam peranti
          bantu sehingga antarmukanya lebih mudah di-port ke berbagai aplikasi
          pada lingkungan yang berbeda.
        </p>
        {readFull === false && (
          <img className="imgSize" src={require("../../assets/BAB1.png")} />
        )}
      </div>
    </div>
  );
}
