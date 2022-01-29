import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  const _changeTheme = () => {
    setIsDark(isDark ? false : true);
  };

  return (
    <div className="App" theme={isDark ? 'dark' : 'light'}>
      <div className="header">
        <div className="typing-div">
          <h1>Hello!</h1>
        </div>
        <p>My name is Woo-Sik Choi</p>
      </div>
      <Navbar _changeTheme={_changeTheme} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
