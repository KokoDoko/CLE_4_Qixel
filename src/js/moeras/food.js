import { Actor, Engine, Vector, CollisionType, Shape } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'

export class Food extends Actor {

    constructor(pos) {
        super({ 
            width: Resources.Food.width, 
            height: Resources.Food.height, 
            collisionType: CollisionType.Fixed ,
            pos : pos
        })

        this.graphics.use(Resources.Food.toSprite())
        this.pos = pos.clone();
        this.scale = new Vector(0.5, 0.5)

    }



}