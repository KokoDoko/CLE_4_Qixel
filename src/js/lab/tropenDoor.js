import { Actor, CollisionType, Scene, Shape, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class TropenDoor extends Actor {
    constructor(engine) {
        super({ width: Resources.TropenDoor.width, height: Resources.TropenDoor.height, collisionType: CollisionType.Fixed })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.TropenDoor.toSprite());
        this.pos = new Vector(500, 90);
        this.scale = new Vector(0.87, 0.87);

        this.on("collisionstart", () => {
            setTimeout(() => {
                engine.goToScene('tropen');
            }, 2);
        }
        );
    }
}