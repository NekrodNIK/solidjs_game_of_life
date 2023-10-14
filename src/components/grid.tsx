import { createMutable } from "solid-js/store";
import { For } from 'solid-js/web';
import Cell from "./cell";

function gen_empty_field(x: number, y: number) {
  let array: boolean[][] = new Array(y)

  let sub_array: boolean[] = new Array(x)
  sub_array.fill(false)

  array.fill(sub_array)
  return array
}


function Grid() {
  var cell_status_grid = createMutable(gen_empty_field(10, 10))

  return (
    <div id="grid">
      <For each={cell_status_grid}>{(row_array, x) =>
        <For each={row_array}>{(value, y) => {
          let position = {
            x: x()+1,
            y: y()+1
          }
          
          return <Cell status={value} position={position}/>
        }}</For>
      }</For>
    </div>
  )
}

export default Grid;