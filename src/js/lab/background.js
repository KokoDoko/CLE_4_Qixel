import { Actor, CollisionType, DegreeOfFreedom, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class LabBackground extends Actor {
    constructor() {
        super();
    }
    onInitialize(engine) {
        this.anchor = Vector.Half;
        this.pos = new Vector(engine.drawWidth / 2, engine.drawHeight / 2);
        const sprite = Resources.LabBackground.toSprite();
        sprite.width = engine.drawWidth;
        sprite.height = engine.drawHeight;
        this.graphics.use(sprite);
    }
}
