import { render } from 'solid-js/web';
import "./index.css";
import { GridContainer, Grid } from './components/grid';
import signals from "./signals"

function gen_empty_field(x: number, y: number) {
  let array: boolean[][] = new Array(y)

  let sub_array: boolean[] = new Array(x)
  sub_array.fill(false)

  array.fill(sub_array)
  return array
}

function App() {

  return (
    <>
      <div id="page_wrapper">
        <h1 id="game_title">Game Of Life</h1>
        <GridContainer>
          <Grid cell_status_array={gen_empty_field(signals.gridSize()[0], signals.gridSize()[1])}/>
        </GridContainer>
      </div>
    </>
  )
}

render(App, document.getElementById("root")!)
