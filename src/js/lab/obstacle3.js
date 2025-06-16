import { Actor, CollisionType, Scene, Shape, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class Obstacle3 extends Actor {
    constructor() {
        super({ width: Resources.Obstacle3.width, height: Resources.Obstacle3.height, collisionType: CollisionType.Fixed })

        this.graphics.use(Resources.Obstacle3.toSprite());
        this.pos = new Vector(40, 500);
        this.collider.set(
            Shape.Box(64, 350, Vector.Zero, new Vector(-70, -180))
        );
    }
}