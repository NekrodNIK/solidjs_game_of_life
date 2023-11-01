import { createEffect, createSignal, onMount } from "solid-js";
import { mainStore, setMainStore } from "../../store";

const minimal_size = 10;

function ControlBlock() {
    let refHeightInput: HTMLInputElement | undefined;
    let refWidthInput: HTMLInputElement | undefined;


    return (
        <>
            <input
                ref={refHeightInput}
                type="number"

                value={mainStore.gridSize.height}
                min={minimal_size}
                max={mainStore.availableGridSpaceCells.height}
                
                onInput={() => 
                    setMainStore(
                        "gridSize",
                        "height",
                        parseInt(refHeightInput!.value)
                    )}
            />
            <input
                ref={refWidthInput}
                type="number"

                value={mainStore.gridSize.width}
                min={minimal_size}
                max={mainStore.availableGridSpaceCells.width}
                
                onInput={() => 
                    setMainStore(
                        "gridSize",
                        "width",
                        parseInt(refWidthInput!.value)
                    )}
            />
        </>
    )
}

export {ControlBlock};