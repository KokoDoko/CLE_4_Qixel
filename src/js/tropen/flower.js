import { Actor, Engine, Vector, CollisionType, Shape } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'

export class Mine extends Actor {

    constructor() {
        super({ width: Resources.Mine.width, height: Resources.Mine.height, collisionType: CollisionType.Fixed })
        this.graphics.use(Resources.Mine.toSprite())
        this.pos = new Vector(500, 300)
        this.scale = new Vector(0.4, 0.4)
        // this.collider.set(Shape.Box(20, 10, Vector.Zero, new Vector(-30, 40)));

    }



}