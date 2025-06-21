import Image from "next/image";

export default function Home() {
  return (
    <div className="display">
      <main>
        <h1>HoloMyth</h1>
        <div className="card">
          <img src="https://hololive.hololivepro.com/wp-content/uploads/2020/07/Takanashi-Kiara_list_thumb.png"></img>
          <h2 className="card-title">Takanashi Kiara</h2>
          <p className="flavor-text">“Kikkeriki!!! Welcome to KFP, are you here to order or to apply for a job?”</p>
        </div>
        <div className="card">
          <img src="https://hololive.hololivepro.com/wp-content/uploads/2020/07/Gawr-Gura_list_thumb.png"></img>
          <h2 className="card-title">Gawr Gura</h2>
          <p className="flavor-text">“Domo!! Sa-me desu!! Have you had shark thoughts today?”</p>
        </div>
        <div className="card">
          <img src="https://hololive.hololivepro.com/wp-content/uploads/2020/07/Ninomae-Inanis_list_thumb.png"></img>
          <h2 className="card-title">Ninomae Ina'nis</h2>
          <p className="flavor-text">“Good morning, afternoon, evening! Hope you're having a WAHnderful day!”</p>
        </div>
        <div className="card">
          <img src="https://hololive.hololivepro.com/wp-content/uploads/2020/07/Watson-Amelia_list_thumb.png"></img>
          <h2 className="card-title">Amelia Watson</h2>
          <p className="flavor-text">“Test test, Hello~ Amelia Watson! #1 Detective at your service!”</p>
        </div>
        <div className="card">
          <img src="https://hololive.hololivepro.com/wp-content/uploads/2020/07/Mori-Calliope_list_thumb.png"></img>
          <h2 className="card-title">Mori Calliope</h2>
          <p className="flavor-text">“Dead Beats, listen up! Your Mori's been working hard for you!”</p>
        </div>
      </main>
    </div>
  );
}
