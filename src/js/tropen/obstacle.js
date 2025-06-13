import { Actor, Engine, Vector, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'

export class Bubble extends Actor {

    constructor() {
        super({width: Resources.Bubble.width, height: Resources.Bubble.height, collisionType: CollisionType.Fixed})
        this.graphics.use(Resources.Bubble.toSprite())
         this.pos = new Vector(500, 300)
         this.scale = new Vector(1, 1)
        
    }


}

