import { Actor, Engine, Vector, CollisionType, Shape } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'

export class Palmtree extends Actor {

    constructor() {
        super({ 
            width: Resources.Palmtree.width, 
            height: Resources.Palmtree.height, 
            collisionType: CollisionType.Fixed 
        })
        
        this.graphics.use(Resources.Palmtree.toSprite())
        this.pos = new Vector(500, 300)
        this.scale = new Vector(3, 3)
        this.collider.set(Shape.Box(20, 20, Vector.Zero, new Vector(-30, 40)));

    }



}

