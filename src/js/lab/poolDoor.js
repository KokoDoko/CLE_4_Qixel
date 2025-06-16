import { Actor, CollisionType, Scene, Shape, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class PoolDoor extends Actor {
    constructor(engine) {
        super({ width: Resources.PoolDoor.width, height: Resources.PoolDoor.height, collisionType: CollisionType.Fixed })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.PoolDoor.toSprite());
        this.pos = new Vector(700, 100);
        this.scale = new Vector(1.25, 1.25);

        this.on("collisionstart", () => {
            setTimeout(() => {
                engine.goToScene('pool');
            }, 2);
        }
        );
    }
}