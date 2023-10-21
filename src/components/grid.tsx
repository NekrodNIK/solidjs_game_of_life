import { For } from 'solid-js/web';
import Cell from "./cell";
import { JSX, children, onMount } from 'solid-js';
import {setMainStore} from "../store"

function GridContainer(props: {children: JSX.Element}) {
  const grid = children(() => props.children)

  let ref: HTMLDivElement | undefined;

  onMount(() => {
    var resizeObserver = new ResizeObserver((entry) => {
      setMainStore("gridSpacePixelSize", {
        width: ref!.clientWidth, 
        height: ref!.clientHeight
      })
    })

    resizeObserver.observe(ref!)
  })

  return (
    <div id="grid-container" ref={ref}>
      {grid()}
    </div>
  )
}

function Grid(props: {
  cell_status_array: boolean[][]
}) {

  return (
    <div id="grid">
      <For each={props.cell_status_array}>{(row_array, x) =>
        <For each={row_array}>{(cell_status, y) => {
          let position = {
            x: x()+1,
            y: y()+1
          }
          
          return <Cell status={cell_status} position={position}/>
        }}</For>
      }</For>
    </div>
  )
}

export {GridContainer, Grid};