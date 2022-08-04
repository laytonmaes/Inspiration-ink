import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Ink.</h1>
      </header>
        <main>
          <div className='random-buttons'>
          <button> Inspirational Word </button>
          <button> Series Mashups </button>
          </div>

          <div className='user-buttons'>
          <button> Random User Prompts </button>
          <button> Submit Your Own Prompt! </button>
          </div>
        </main>
    </div>
  );
}

export default App;
