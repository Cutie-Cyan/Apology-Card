import { useState } from "react";
import "./App.css";
import flowerImg from "./assets/flower.png";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-container">
      <div
        className={`card ${isOpen ? "open" : "closed"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="card-front">
          <h1>💝</h1>
          <p>Open me...</p>
        </div>

        <div className="card-inner-top">
          <div className="flowers">
            <img src={flowerImg} alt="flower" className="flower flower-1" />
            <img src={flowerImg} alt="flower" className="flower flower-2" />
            <img src={flowerImg} alt="flower" className="flower flower-3" />
            <img src={flowerImg} alt="flower" className="flower flower-4" />
            <img src={flowerImg} alt="flower" className="flower flower-5" />
            <img src={flowerImg} alt="flower" className="flower flower-6" />
            <img src={flowerImg} alt="flower" className="flower flower-7" />
            <img src={flowerImg} alt="flower" className="flower flower-8" />
            <img src={flowerImg} alt="flower" className="flower flower-9" />
          </div>
        </div>

        <div className="card-inner-bottom">
          <div className="letter-content">
            <p className="greeting">My Dearest,</p>
            <p className="message">
              I wanted to take a moment to say I'm sorry. You mean the world to
              me, and I hope you can forgive me.
            </p>
            <p className="signature">
              With all my love,
              <br />
              Forever yours ❤️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
