import { Actor, CollisionType, Scene, Shape, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class SwampDoor extends Actor {
    constructor(engine) {
        super({ width: Resources.SwampDoor.width, height: Resources.SwampDoor.height, collisionType: CollisionType.Fixed })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.SwampDoor.toSprite());
        this.pos = new Vector(300, 90);
        this.scale = new Vector(0.60, 0.60);

        this.on("collisionstart", () => {
            setTimeout(() => {
                engine.goToScene('moeras');
            }, 2);
        }
        );
    }
}