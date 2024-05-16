import Image from "next/image";
import Profile from "./components/Profile";
import Language from "./components/Language";
import DownloadCV from "./components/DownloadCV";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center py-10">
    <section className="w-full max-w-[1536px] grid grid-cols-8 gap-8 px-20">
      <div className="col-start-1 col-end-7 row-start-1 row-end-5 bg-red-200 rounded-lg">1</div>
      {/* <Profile/> */}
      {/* <div className="col-start-7 col-end-9 bg-yellow-100 row-start-1 row-end-3 aspect-square rounded-lg">2</div> */}
      <Language/>
      {/* <div className="col-start-7 col-end-9 bg-blue-200 row-start-3 row-end-5 aspect-square rounded-lg">3</div> */}
      <DownloadCV/>
      <div className="col-start-1 col-end-3 bg-yellow-100 rounded-lg">4</div>
      <div className="col-start-3 col-end-5 bg-yellow-100 rounded-lg">5</div>
      <div className="col-start-5 col-end-9 bg-yellow-100 rounded-lg">6</div>
      <div className="col-start-1 col-end-5 row-start-6 row-end-8 bg-yellow-100 rounded-lg">7</div>
      <div className="col-start-5 col-end-6 row-start-6 row-end-7 bg-red-800 rounded-lg">q</div>
      
      <div className="col-start-6 col-end-7 row-start-6 row-end-7 bg-red-100 rounded-lg">w</div>

      <div className="col-start-7 col-end-9 row-start-6 row-end-8 bg-red-500 rounded-lg">9</div>

      <div className="col-start-5 col-end-6 row-start-7 row-end-8 bg-yellow-300 rounded-lg">e</div>
      
      <div className="col-start-6 col-end-7 row-start-7 row-end-8 bg-blue-300 rounded-lg">r</div>
      <div className="col-start-1 col-end-5 bg-yellow-100 rounded-lg">10</div>
      <div className="col-start-5 col-end-7 bg-red-500 rounded-lg">11</div>
      <div className="col-start-7 col-end-9 bg-red-500 rounded-lg">12</div>
      <div className="col-start-1 col-end-3 bg-blue-500 rounded-lg">13</div>
      <div className="col-start-3 col-end-7 bg bg-yellow-600 rounded-lg">14</div>
      <div className="col-start-7 col-end-9 bg-green-400 rounded-lg">15</div>
      <div className="col-start-1 col-end-5 bg-red-200 rounded-lg">16</div>
      <div className="col-start-5 col-end-7 bg-red-200 rounded-lg">17</div>
      <div className="col-start-7 col-end-9 bg-red-200 rounded-lg">18</div>
    </section>
  </main>
  );
}
