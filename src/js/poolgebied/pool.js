import { Actor, CollisionType, DegreeOfFreedom, Scene, Vector } from "excalibur";
import { Resources } from "../resources.js";
import { Game } from "../game.js";

export class PoolScene extends Scene {
    onInitialize(engine) {
        const bubble = new Actor({ pos: new Vector(640, 360) })
        bubble.graphics.use(Resources.Bubble.toSprite())
        this.add(bubble)
        bubble.on("pointerup", () => {
            engine.goToScene('game')
        })
        // this.add('game', new Game())

    }
}
