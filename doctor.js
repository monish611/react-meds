import React from 'react';
import './App.css';

function App() {
  const nit = () => {
    alert("Your appointment with Dr.Nithin is confirmed. Please contact +91 98869****5 to confirm the timings.");
  };

  const muk = () => {
    alert("Your appointment with Dr.Mukesh is confirmed. Please contact +91 98869****5 to confirm the timings.");
  };

  const mal = () => {
    alert("Your appointment with Dr. MUNNA BHAI is confirmed. Please contact +91 98869****5 to confirm the timings."); 
  };

  return (
    <div>
      <header className="header">
        <a href="/" className="logo"><img src="1.JPG" alt="Logo"/></a>
        <nav className="nav">
          <a href="2.HTML">HOME</a>
          <a href="3.HTML">MEDICINE</a>
          <a href="4.HTML" style={{ color: 'orange' }}>DOCTORS</a>
        </nav>
        <form action="index.HTML">
          <button className="atc">LOGOUT</button>
        </form>
      </header>
      <div>
        <div className="a">
          <div className="b">
            <div className="c">
              <div>
                <div className="d">
                  <div className="e">
                    <img src="14.png" alt="Doctor" className="f" />
                    <div className="h">
                      <h3>Dr.NITHIN.P.V<br />(M.B.B.S,M.D.)</h3>
                      <p>He is a proficient pediatrician with specialization in infant care with over 10 years of experience in the same.</p>
                      <button className="btn" onClick={nit}>MAKE APPOINTMENT</button>
                    </div>
                  </div>
                </div>
                <div className="d">
                  <div className="e">
                    <img src="14.png" alt="Doctor" className="f" />
                    <div className="h">
                      <h3>Dr.MUKESH.M.T<br />(M.B.B.S,M.D.)</h3>
                      <p>He is a renowned cardiologist and an expert surgeon with over 20 years of experience.</p>
                      <button className="btn" onClick={muk}>MAKE APPOINTMENT</button>
                    </div>
                  </div>
                </div>
                <div className="d">
                  <div className="e">
                    <img src="14.png" alt="Doctor" className="f" />
                    <div className="h">
                      <h3>Dr.MUNNA BHAI(M.B.B.S,M.D,M.S)</h3>
                      <p>He is a famous neurologist and has performed several critical operations in his career</p>
                      <button className="btn" onClick={mal}>MAKE APPOINTMENT</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
