import { render } from 'solid-js/web';
import "./index.css"
import { createSignal } from 'solid-js';

function App() {
  const [getCount, setCount] = createSignal(0.0)

  setInterval(() => setCount((getCount()+0.1)), 100);

  return <h1>Game Of Life, seconds: {getCount().toFixed(1)}</h1>
}

render(App, document.getElementById("root"))
