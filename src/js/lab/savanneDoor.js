import { Actor, CollisionType, Scene, Shape, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class SavanneDoor extends Actor {
    constructor(engine) {
        super({ width: Resources.SavanneDoor.width, height: Resources.SavanneDoor.height, collisionType: CollisionType.Fixed })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.SavanneDoor.toSprite());
        this.pos = new Vector(900, 100);
        this.scale = new Vector(1.25, 1.25);

        this.on("collisionstart", () => {
            setTimeout(() => {
                engine.goToScene('savanne');
            }, 2);
        }
        );
    }
}
