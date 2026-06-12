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
            <p className="greeting">My Babii</p>
            <p className="message">
              Hello bii I want mag apology sayo kasi may mga nasabi ako na
              hurtful words nakaraan, you don't deserve that, I'm sorry for
              hurting your feelings, I'm sorry if I'm not treating you right ,
              I'm sorry for all my stupid behavior I know I always mess things
              up, I'm really grateful na nag sstay ka parin sakin, Thank you so
              much for your love I love you always mwauhhhhh.
            </p>
            <p className="signature">-Cyan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
