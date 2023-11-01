import { createEffect } from "solid-js";
import { createStore } from "solid-js/store";

const [mainStore, setMainStore] = createStore({
    availableGridSpacePixels: { width: 0, height: 0},

    get availableGridSpaceCells() {
        return {
            width: Math.floor(this.availableGridSpacePixels.width / 17),
            height: Math.floor(this.availableGridSpacePixels.height / 17)
        }
    },

    gridSize: {width: 100, height: 30},
})


export {
    mainStore, setMainStore
}