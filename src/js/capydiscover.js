import { Actor, Engine, Vector, DisplayMode, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Capydisco extends Actor{
     constructor() {
        super({
            width: Resources.Capydiscover.width, 
            height: Resources.Capydiscover.height, 
            collisionType: CollisionType.Passive
        })

        this.graphics.use(Resources.Capydiscover.toSprite())
        this.pos = new Vector(500, 300)
        this.scale = new Vector(1, 1)
        
    }
}