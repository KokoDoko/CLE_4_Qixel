import { Actor, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class LabBackground extends Actor {
    constructor() {
        super();
    }
    onInitialize(engine) {
        const sprite = Resources.LabBackground.toSprite();
        sprite.width = 950;
        sprite.height = 700;
        this.pos = new Vector(1240 / 2, 920 / 2)
        sprite.scale = new Vector(1.35, 1.35);
        this.graphics.use(sprite);
    }
}
