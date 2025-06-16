import { Actor, CollisionType, Color, Rectangle, Shape, Vector } from "excalibur";

export class LabBorderRight extends Actor {
    constructor() {
        super({})

        this.graphics.use(new Rectangle({ width: 20, height: 950, color: Color.Transparent }));
        this.pos = new Vector(1240, 450);
        this.body.collisionType = CollisionType.Fixed
        this.collider.set(
            Shape.Box(1, 950, Vector.Zero, new Vector(0, -500))
        );
    }
}