import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleCopy = async () => {
    // Copy the text inside the text field
    await navigator.clipboard.writeText(text).then(() => {
      // Alert the copied text
      alert("Copied the text: " + text);
    });
  };

  return (
    <main className='App'>
      <header>
        <h1>Longhook</h1>
        <h2>Stop smashing your spacebar</h2>
      </header>
      <section id='hookGenerator'>
        <section id='hookEntry'>
          <label htmlFor="my-input">Your Hook</label>
          <textarea
            id="my-input"
            onChange={(event) => setText(event.target.value)}
          />
        </section>
        <section id='hookOutput'>
        <textarea
          value={text}
        />
        <button onClick={handleCopy}>Copy to clipboard</button>
      </section>
      </section>
    </main>
  );
}

export default App;
