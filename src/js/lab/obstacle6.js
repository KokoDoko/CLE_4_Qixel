import { Actor, CollisionType, Scene, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class Obstacle6 extends Actor {
    constructor() {
        super({ width: Resources.Obstacle2.width, height: Resources.Obstacle2.height, collisionType: CollisionType.Fixed })

        this.graphics.use(Resources.Obstacle2.toSprite());
        this.pos = new Vector(200, 600);
    }
}