import { Actor, Engine, Vector, CollisionType, Shape } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'

export class Tree extends Actor {

    constructor() {
        super({ width: Resources.Tree.width, height: Resources.Tree.height, collisionType: CollisionType.Fixed })
        this.graphics.use(Resources.Tree.toSprite())
        this.pos = new Vector(500, 300)
        this.scale = new Vector(2, 2)
        this.collider.set(Shape.Box(20, 10, Vector.Zero, new Vector(-30, 40)));

    }



}

