import { createStore } from "solid-js/store";

const [mainStore, setMainStore] = createStore({
    gridSpacePixelSize: { width: 0, height: 0},
    gridSize: {width: 10, height: 10},
})

export {
    mainStore, setMainStore
}