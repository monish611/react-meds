import './landingpg.css';

function landingpg(){
    return(
        <div>
    <header className="header">
    <a href="" className="logo"><img src="1.JPG"/></a>
    <nav className="nav">
        <a href="2.HTML" style="color: orange">HOME</a>
        <a href="3.HTML">MEDICINE</a>
        <a href="4.HTML">DOCTORS</a>
    </nav>
    <form action="index.HTML">
    <button className="logout">LOGOUT</button></form>
    </header>  
  <div className="txt">
        <h3>We are here for your care.</h3>
      <h1>100% geniune and trusted medicines.</h1>
      <h3>We deliver within 30 minutes.</h3>
      <form action="3.HTML">
      <button className="button2">SHOP NOW</button></form></div>
  <div><img className="img1" src='2.jpg' style="float: right;"/></div>
  </div>
    );
}
export default landingpg;