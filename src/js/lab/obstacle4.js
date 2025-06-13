import { Actor, CollisionType, Scene, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class Obstacle4 extends Actor {
    constructor() {
        super({ width: Resources.Obstacle4.width, height: Resources.Obstacle4.height, collisionType: CollisionType.Fixed })

        this.graphics.use(Resources.Obstacle4.toSprite());
        this.pos = new Vector(620, 870);
    }
}