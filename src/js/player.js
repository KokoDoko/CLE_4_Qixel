import { Actor, Engine, Vector, Keys, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Player extends Actor {

    constructor() {
        super({ width: Resources.Player.width, height: Resources.Player.height, collisionType: CollisionType.Active })
        this.graphics.use(Resources.Player.toSprite())
        this.scale = new Vector(0.3, 0.3)
        this.pos = new Vector(500, 300)
       
    }

    
     onPreUpdate(engine) {

         let xspeed = 0
            let yspeed = 0
            let kb = engine.input.keyboard

            if (kb.isHeld(Keys.W)) {
                yspeed = -300
            }
            if (kb.isHeld(Keys.S)) {
                yspeed = 300
            }
            if (kb.isHeld(Keys.A)) {
                xspeed = -300
                this.graphics.flipHorizontal = false       // flip de sprite
            }
            if (kb.isHeld(Keys.D)) {
                xspeed = 300
                this.graphics.flipHorizontal = true      // flip de sprite
            }

            this.vel = new Vector(xspeed, yspeed)
            //  console.log(this.score)
           
    }


}