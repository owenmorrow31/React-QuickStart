import logo from './logo.svg';
import './App.css';


function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
      <img className="avatar" src={logo} alt="Logo" />
    </>
  );
}


export default AboutPage;
