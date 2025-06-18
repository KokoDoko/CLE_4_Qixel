import { Actor, Engine, Vector, DisplayMode, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Orchiddisco extends Actor{
     constructor() {
        super({
            width: Resources.Orchiddiscover.width, 
            height: Resources.Orchiddiscover.height, 
            collisionType: CollisionType.PreventCollision
        })

        this.graphics.use(Resources.Orchiddiscover.toSprite())
        this.pos = new Vector(100, 300)
        this.scale = new Vector(1, 1)
        
    }
}