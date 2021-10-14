import Nav from './components/Nav';
import Main from './components/Main';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './App.css';

function App() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`"app" ${theme ? "app-dark" : "app-light"}`}>
      <Nav />
      <Main />
    </div>
  );
}

export default App;
