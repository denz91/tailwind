import React from "react";

function Home() {
  return (
    <div className="bg-">
      <img
        className="flex w-full h-[70vh] object-cover"
        src="/img/rumahikan2.jpg"
        alt=""
      ></img>
      <h1 className="flex justify-center font-bold">
        Selamat Datang di Rumah Ikan
      </h1>
      <h2 className="flex justify-center font-bold">
        Rumahnya Ikan Hias dan Konsumsi
      </h2>
      <div className="flex justify-center">
        <button className="flex justify-items-center bg-cyan-400 text-white font-bold px-4 py-1 rounded-lg mx-4">
          Pelajari Selengkapnya
        </button>
      </div>
    </div>
  );
}

export default Home;
