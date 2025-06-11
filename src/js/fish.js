import { Actor, Engine, Vector, Keys } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Fish extends Actor {

    constructor() {
        super()
        this.graphics.use(Resources.Fish.toSprite())
         this.pos = new Vector(200, 200)
        // fish.vel = new Vector(-10,0)
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