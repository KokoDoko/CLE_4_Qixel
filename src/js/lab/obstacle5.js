import { Actor, CollisionType, Scene, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class Obstacle5 extends Actor {
    constructor() {
        super({ width: Resources.Obstacle5.width, height: Resources.Obstacle5.height, collisionType: CollisionType.Fixed })

        this.graphics.use(Resources.Obstacle5.toSprite());
        this.pos = new Vector(500, 600);
    }
}