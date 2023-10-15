import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

const [getGridSize, setGridSize] = createSignal([0, 0])

export default {setGridSize, getGridSize}