import { Signal, createSignal } from "solid-js";

const [gridSpacePixelSize, setGridSpacePixelSize] = createSignal([0, 0])

const gridSize = () => [Math.floor(gridSpacePixelSize()[0]/17), Math.floor(gridSpacePixelSize()[1]/17)] // TODO: refactor

export default {
    gridSpacePixelSize,
    setGridSpacePixelSize,
    gridSize
}