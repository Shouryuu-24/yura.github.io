import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DataImage, { listTools } from "./data";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1 animate__animated animate__fadeInUp animate__delay-3s">
        <div data-aos="fade-right" data-aos-delay="100" id="beranda">
          <div
            className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src={DataImage.yura}
              alt="Hero Image"
              className="w-10 rounded-md animate__animated animate__fadeInUp animate__delay-2s"
              data-aos="fade-up"
              data-aos-delay="200"
            />
            <q>web yang indah.lahir dari ketekunan belajar.❤❤</q>
          </div>
          <h1
            className="text-5xl/tight font-bold mb-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Hi, KAMI ADALAH YURA TECH
          </h1>
          <p
            className="text-base/loose mb-10 opacity-50 "
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Kami mempunyai ketertarikan dalam bidang programming dan design,
            terutama pada pembuatan website dan tampilan (UI/UX). Ketertarikan
            ini sudah berlangsung selama kami kuliah 2 semester.
          </p>

          <div
            className="flex items-center sm:gap-4 gap-2 animate__animated animate__fadeInUp animate__delay-2s "
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <a
              href="#contact"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 animate__animated animate__pulse animate__infinite"
              data-aos="zoom-in"
            >
              Contact menu <i className="ri-arrow-down-long-line"></i>
            </a>
            <a
              href="#tentang"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 animate__animated animate__pulse animate__infinite"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              Tentang kami <i className="ri-arrow-down-long-line"></i>
            </a>
          </div>
        </div>

        <img
          src={DataImage.yura}
          alt="Hero"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s"
          data-aos="fade-left"
          data-aos-delay="400"
        />
      </div>

      {/* Tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 mx-auto p-7 bg-zinc-800 rounded-lg">
          <p className="text-base/loose mb-10">
            Saya Muhammad Rakha Naufal (Shou/Rakha), kelas R2Q Semester 2. Saya
            adalah bagian Front-end dari website ini. Tujuan saya adalah menjadi
            Web Developer. Terima kasih ✌✌.
          </p>
          <p className="text-base/loose mb-10">
            Saya Muhammad Yusuf Raihan (Raihan/Yusuf), kelas R2B Semester 2.
            Saya mengerjakan UI/UX design menggunakan Figma. Saya juga ingin
            menjadi Web Developer. Terima kasih 🤙🤙.
          </p>
        </div>

        {/* Tools */}
        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Tools yang dipakai
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Berikut ini beberapa tools yang kami pakai untuk pembuatan website
            dan desain.
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-3 border border-y-zinc-600 rounded-md hover:bg-zinc-800 group"
                data-aos="fade-up"
                data-aos-delay={tool.dad || i * 100}
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="contact">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          KONTAK
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Mari Terhubung dengan Kami ❤❤.
        </p>
        <form
          action="https://formsubmit.co/shouryuu24@email.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex flex-col gap-6">
            <div
              className="flex flex-col gap-2"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <label className="font-semibold">Nama lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukan Nama..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div
              className="flex flex-col gap-2"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukan email..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div
              className="flex flex-col gap-2"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="50"
                rows="8"
                placeholder="Masukan pesan..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-y-zinc-600 hover:bg-violet-600 animate__animated animate__pulse animate__infinite"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
