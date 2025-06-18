import { Actor, Engine, Vector, DisplayMode, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Monkedisco extends Actor{
     constructor() {
        super({
            width: Resources.Monkeydiscover.width, 
            height: Resources.Monkeydiscover.height, 
            collisionType: CollisionType.PreventCollision
        })

        this.graphics.use(Resources.Monkeydiscover.toSprite())
        this.pos = new Vector(100, 300)
        this.scale = new Vector(1, 1)
        
    }
}