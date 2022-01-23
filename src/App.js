import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App" theme="light">
      <div className="header">
        <h1>Hello!</h1>
        <p>My name is Woo-Sik Choi</p>
      </div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
