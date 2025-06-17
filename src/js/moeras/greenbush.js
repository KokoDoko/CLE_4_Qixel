import { Actor, Engine, Vector, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'

export class GreenBush extends Actor {

    constructor() {
        super({width: Resources.Greenbush.width, height: Resources.Greenbush.height, collisionType: CollisionType.Fixed})
        this.graphics.use(Resources.Greenbush.toSprite())
         this.pos = new Vector(500, 300)
         this.scale = new Vector(1, 1)
        
    }
    
    

}