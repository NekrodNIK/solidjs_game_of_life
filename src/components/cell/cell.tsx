import styles from "./cell.module.css"

function Cell(props: {status: boolean, position: {x: number, y: number}}) {
  return (
      <div
        class={styles.cell}

        classList={
          {
            [styles["cell-alive"]]: props.status,
            [styles["cell-dead"]]: !props.status
          }
        }

        style={`grid-area: ${props.position.x} / ${props.position.y}`}>
      </div>
  )
}

export default Cell;    