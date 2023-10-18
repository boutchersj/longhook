import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleCopy = async () => {
    const whitespace = (" ").repeat(280 - text.length)
    const newText = text + whitespace
    // Copy the text inside the text field
    await navigator.clipboard.writeText(newText).then(() => {
      // Alert the copied text
      alert("Copied the text: " + newText);
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
        <p>Click to Copy 👇🏻</p>
        <button
          id='hookOutput'
          onClick={handleCopy}
        >
          {text}
        </button>
        <p>The <b>See More</b> button on 𝕏 will hide everything after this copied text.</p>
      </section>
    </main>
  );
}

export default App;
