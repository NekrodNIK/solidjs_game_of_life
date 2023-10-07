import { render } from 'solid-js/web';
import "./index.css";


function App() {
  return (
    <>
      <h1 id="game_title">Game Of Life</h1>
      <div id="game_field"></div>
    </>
  )
}

render(App, document.getElementById("root")!)
