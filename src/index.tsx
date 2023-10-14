import { render } from 'solid-js/web';
import "./index.css";
import Grid from './components/grid';


function App() {
  return (
    <>
      <div id="page_wrapper">
        <h1 id="game_title">Game Of Life</h1>
        <Grid/>
      </div>
    </>
  )
}

render(App, document.getElementById("root")!)
