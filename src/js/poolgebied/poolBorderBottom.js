import { Actor, CollisionType, Color, Rectangle, Shape, Vector } from "excalibur";

export class PoolBorderBottom extends Actor {
    constructor() {
        super({})
        this.graphics.use(new Rectangle({ width: 1240, height: 20, color: Color.Transparent }));
        this.pos = new Vector(0, 1320);
        this.body.collisionType = CollisionType.Fixed
        this.collider.set(
            Shape.Box(1240, 1, Vector.Zero, new Vector(0, -400))
        );
    }
}