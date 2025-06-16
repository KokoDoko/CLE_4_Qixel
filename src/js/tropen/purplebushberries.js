import { Actor, Engine, Vector, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'

export class PurpleBushBerries extends Actor {

    constructor() {
        super({
            width: Resources.Purplebushberries.width, 
            height: Resources.Purplebushberries.height, 
            collisionType: CollisionType.Fixed
        })
        
        this.graphics.use(Resources.Purplebushberries.toSprite())
         this.pos = new Vector(500, 300)
         this.scale = new Vector(0.6, 0.6)
        
    }
    


}