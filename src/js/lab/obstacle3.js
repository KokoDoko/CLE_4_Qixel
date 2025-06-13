import { Actor, CollisionType, Scene, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class Obstacle3 extends Actor {
    constructor() {
        super({ width: Resources.Obstacle3.width, height: Resources.Obstacle3.height, collisionType: CollisionType.Fixed })

        this.graphics.use(Resources.Obstacle3.toSprite());
        this.pos = new Vector(40, 500);
    }
}