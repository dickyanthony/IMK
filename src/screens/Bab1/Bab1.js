import React from "react";
import "./imk.css";

export default function Bab1(props) {
  const { readFull, style, windowWidth } = props;

  const RenderSmall = () => {
    return (
      <>
        <h2 className="font-bold">BAB I PENDAHULUAN</h2>

        <div className="flex flex-col flex-wrap justify-center">
          {readFull === false && (
            <div className="w-full flex flex-wrap justify-center">
              <img
                className="w-6/12"
                src={require("../../assets/BAB1.png")}
                alt="Bab 1"
              />
            </div>
          )}
          <p className="paragraph font-sans">
            Istilah ramah dengan pengguna (user /friendy) dan WYSIWYG ( what you
            see is what you get) sering digunakan ketika seseorang menawarkan
            sebuah perangkat lunak atau program aplikasi. Anda yang baru pertama
            kali mendengar istilah di atas barangkali akan bingung, tidak
            mengerti akan arti dari kedua istilah tersebut. Tetapi, sejalan
            dengan pengalaman Anda mengoperasikan perangkat lunak atau program
            aplikasi, secara tidak Anda sadari istilah-istilah di atas akan
            merasuk ke dalam kumpulan kosa kata yang telah Anda miliki
            sebelumnya. Pertanyaan yang timbul adalah: Sebenarnya apa yang
            dimaksud dengan istilah ramah dengan pengguna, WYSIWYG, dan beberapa
            istilah "serem" yang Iain? Istilah "ramah dengan pengguna" digunakan
            untuk merujuk kepada karakteristik yang dimiliki oleh perangkat
            lunak atau program aplikasi yang mudah dioperasikan.
            <br />
            <br />
            Istilah di atas juga menyangkut sejumlah kemampuan Iain yang membuat
            pengguna merasa betah dalam mengoperasikan program tersebut. Bahkan,
            jika sebuah program mempunyai karakteristik "ramah dengan pengguna",
            seorang pemula sekalipun tidak akan banyak mengalami kesulitan untuk
            mengoperasikannya. Istilah inilah yang sering digunakan sebagai
            senjata andalan bagi para penjual program aplikasi dalam memasarkan
            produknya, dan menjadi salah satu kriteria utama bagi pengembang
            program. Tetapi di Sisi Iain, penggunapun juga sering mensyaratkan
            agar program aplikasi yang dia gunakan, selain dapat membantu untuk
            menyelesaikan suatu pekerjaan dengan hasil yang sesuai keinginan,
            juga menyediakan berbagai kemudahan pada saat dia mengoperasikan
            program yang dimaksud. Dengan demikian tuntutan bahwa sebuah program
            aplikasi harus bersifat ramah sesungguhnya juga datang dari
            pengguna.
          </p>
        </div>
      </>
    );
  };
  const RenderBig = () => {
    return (
      <>
        <h2 className="font-bold">BAB I PENDAHULUAN</h2>
        <div className="row">
          <p className="paragraph font-sans">
            Istilah ramah dengan pengguna (user /friendy) dan WYSIWYG ( what you
            see is what you get) sering digunakan ketika seseorang menawarkan
            sebuah perangkat lunak atau program aplikasi. Anda yang baru pertama
            kali mendengar istilah di atas barangkali akan bingung, tidak
            mengerti akan arti dari kedua istilah tersebut. Tetapi, sejalan
            dengan pengalaman Anda mengoperasikan perangkat lunak atau program
            aplikasi, secara tidak Anda sadari istilah-istilah di atas akan
            merasuk ke dalam kumpulan kosa kata yang telah Anda miliki
            sebelumnya. Pertanyaan yang timbul adalah: Sebenarnya apa yang
            dimaksud dengan istilah ramah dengan pengguna, WYSIWYG, dan beberapa
            istilah "serem" yang Iain? Istilah "ramah dengan pengguna" digunakan
            untuk merujuk kepada karakteristik yang dimiliki oleh perangkat
            lunak atau program aplikasi yang mudah dioperasikan.
            <br />
            <br />
            Istilah di atas juga menyangkut sejumlah kemampuan Iain yang membuat
            pengguna merasa betah dalam mengoperasikan program tersebut. Bahkan,
            jika sebuah program mempunyai karakteristik "ramah dengan pengguna",
            seorang pemula sekalipun tidak akan banyak mengalami kesulitan untuk
            mengoperasikannya. Istilah inilah yang sering digunakan sebagai
            senjata andalan bagi para penjual program aplikasi dalam memasarkan
            produknya, dan menjadi salah satu kriteria utama bagi pengembang
            program. Tetapi di Sisi Iain, penggunapun juga sering mensyaratkan
            agar program aplikasi yang dia gunakan, selain dapat membantu untuk
            menyelesaikan suatu pekerjaan dengan hasil yang sesuai keinginan,
            juga menyediakan berbagai kemudahan pada saat dia mengoperasikan
            program yang dimaksud. Dengan demikian tuntutan bahwa sebuah program
            aplikasi harus bersifat ramah sesungguhnya juga datang dari
            pengguna.
          </p>

          {readFull === false && (
            <img
              className="imgSize"
              src={require("../../assets/BAB1.png")}
              alt="Bab 1"
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
