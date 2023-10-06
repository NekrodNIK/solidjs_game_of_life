import { render } from 'solid-js/web';
import "./index.css"
import { createSignal } from 'solid-js';

function App() {
  return (
    <>
      <h1 id="game_title">Game Of Life</h1>
    </>
  )
}

render(App, document.getElementById("root")!)
