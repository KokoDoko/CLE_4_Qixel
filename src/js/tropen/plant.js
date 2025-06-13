import { Actor, Engine, Vector, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'

export class Bones extends Actor {

    constructor() {
        super({width: Resources.Bones.width, height: Resources.Bones.height, collisionType: CollisionType.Fixed})
        this.graphics.use(Resources.Bones.toSprite())
         this.pos = new Vector(500, 300)
         this.scale = new Vector(0.6, 0.6)
        
    }
    


}