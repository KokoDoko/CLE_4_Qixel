import { Actor, CollisionType, EdgeCollider, Scene, Shape, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class Obstacle1 extends Actor {
    constructor() {
        super({ width: Resources.Obstacle1.width, height: Resources.Obstacle1.height, collisionType: CollisionType.Fixed })

        this.graphics.use(Resources.Obstacle1.toSprite());
        this.pos = new Vector(1200, 500);
        this.collider.set(
            Shape.Box(64, 350, Vector.Zero, new Vector(2, -180))
        );
    }
}