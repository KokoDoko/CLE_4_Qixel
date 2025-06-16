import { Actor, Engine, Vector, CollisionType, Shape } from "excalibur"
import { Resources } from "../resources.js";

export class TropenBackground extends Actor {
    constructor() {
        super({
            width: Resources.Tropenbg.width, 
            height: Resources.Tropenbg.height, 
            collisionType: CollisionType.PreventCollision
        });
    }

    onInitialize(engine) {
        this.anchor = Vector.Half;
        this.pos = new Vector(engine.drawWidth / 2, engine.drawHeight / 2);
        const sprite = Resources.Tropenbg.toSprite();
        sprite.width = engine.drawWidth;
        sprite.height = engine.drawHeight;
        this.graphics.use(sprite);
    }
}
