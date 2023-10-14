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

export default Cell;