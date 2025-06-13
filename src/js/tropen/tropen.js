import { Actor, Scene, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class TropenScene extends Scene {
    onInitialize(engine) {
        const bubble = new Actor({ pos: new Vector(640, 360) })
        bubble.graphics.use(Resources.Bubble.toSprite())
        this.add(bubble)
        bubble.on("pointerup", () => {
            engine.goToScene('game')
        })
    }
}
