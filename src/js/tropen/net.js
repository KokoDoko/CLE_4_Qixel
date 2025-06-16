import { Actor, Engine, Vector, CollisionType, Shape } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'

export class Net extends Actor {

    constructor() {
        super({ width: Resources.Net.width, height: Resources.Net.height, collisionType: CollisionType.Fixed })
        this.graphics.use(Resources.Net.toSprite())
        this.pos = new Vector(500, 300)
        this.scale = new Vector(0.1, 0.1)
        // this.collider.set(Shape.Box(20, 10, Vector.Zero, new Vector(-30, 40)));

    }



}