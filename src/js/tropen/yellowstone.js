export class YellowStone extends Actor {

    constructor() {
        super({ width: Resources.Yellowstone.width, height: Resources.Yellowstone.height, collisionType: CollisionType.Fixed })
        this.graphics.use(Resources.Yellowstone.toSprite())
        this.pos = new Vector(500, 300)
        this.scale = new Vector(2, 2)
        this.collider.set(Shape.Box(20, 10, Vector.Zero, new Vector(-30, 40)));

    }



}