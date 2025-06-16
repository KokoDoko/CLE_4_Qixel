import { Actor, Engine, Vector, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { PurpleBushBerries } from "./purplebushberries.js"

export class PurpleBush extends Actor {

    constructor() {
        super({width: Resources.Purplebush.width, height: Resources.Purplebush.height, collisionType: CollisionType.Fixed})
        this.graphics.use(Resources.Purplebush.toSprite())
         this.pos = new Vector(500, 300)
         this.scale = new Vector(0.6, 0.6)
        
    }
    
    

}