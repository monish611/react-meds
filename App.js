import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <div className="split left">
        <header className="header">
            <a href="" className="logo"><img src="1.JPG"/></a>
            </header>
        <div className="txt">
            <h1>WELCOME TO MEDSONLINE!!!</h1>
            <h2>The fastest medicine delivery website in your neighbourhood.</h2>
            <h3>Please login to continue.</h3>
        </div>
    </div>
    <div className="split right">
    <div className="centered">
<div className="C"></div>
 <div className="A">
    <form>
        <h1>Login</h1>
        <div className="B">
        <input type="text" id="Username" placeholder="Username" required/>
        <i className='bx bxs-user'></i>
        </div>
        <div className="B">
            <input type="password" placeholder="Password" id="password" required/>
            <i className='bx bxs-lock-alt' ></i>
        </div>
        <div className="fp">
            <a href="">Forgot Password?</a>
        </div>
        <div className="btn"> 
                 <button>Login</button>
        </div>
    </form>
    </div>
 </div>  
 </div>
    </div>
  );
}

export default App;
