import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access to the full dashboard</p>
        <div>
            <label htmlFor="email" >Email:</label>
            <input id="email" type="email" name="email" />
            <label htmlFor="password" >Password:</label>
            <input id="password" type="password" name="password" />
            <button>OK</button>
        </div>
      </main>
      <footer className="App-footer">
        <i>Copyright {getFullYear()} - {getFooterCopy()}</i>
      </footer>
    </div>
  );
}

export default App;
