import { For, render } from 'solid-js/web';
import "./index.css";
import { createMutable, createStore } from 'solid-js/store';

function gen_empty_2d_field(x: number, y: number) {
  let array: boolean[][] = new Array(y)

  let sub_array: boolean[] = new Array(x)
  sub_array.fill(false)

  array.fill(sub_array)
  return array
}

function Cell(props: {status: boolean, position: {x: number, y: number}}) {
  return (
    <div
      class="cell"
      classList={{"cell-alive": props.status,
                  "cell-dead": !props.status}}
      style={`grid-area: ${props.position.x} / ${props.position.y}`}>
      
    </div>
  )
}

function Grid() {
  var cell_status_grid = createMutable(gen_empty_2d_field(10, 10))

  return (
    <div id="grid">
      <For each={cell_status_grid}>{(row_array, x) =>
        <For each={row_array}>{(value, y) =>
          <Cell status={value} position={{x: x()+1, y: y()+1}}/>
        }</For>
      }</For>
    </div>
  )
}

function App() {
  return (
    <>
      <h1 id="game_title">Game Of Life</h1>
      <Grid/>
    </>
  )
}

render(App, document.getElementById("root")!)
