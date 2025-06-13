import { Actor, Engine, Vector, Keys,SpriteSheet, range , Animation, CollisionType, } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Player extends Actor {

    constructor() {
        super({
            width: Resources.Player.width, 
            height: Resources.Player.height, 
            collisionType: CollisionType.Active })

        this.graphics.use(Resources.Player.toSprite())
        this.pos = new Vector(200, 200)
        this.scale = new Vector(0.31,0.31)
        
        // fish.vel = new Vector(-10,0)s

        const runSheet = SpriteSheet.fromImageSource({
            image: Resources.Player,
            grid: { rows: 1, columns: 12, spriteWidth:180, spriteHeight: 250 }
        }) 
        const idle = runSheet.sprites[1] // geen animatie
        const runLeft = Animation.fromSpriteSheet(runSheet, range(3, 5), 120)
        const runRight = Animation.fromSpriteSheet(runSheet, range(6, 8), 120)
        const runUp = Animation.fromSpriteSheet(runSheet, range(10, 12), 120)
        const runDown = Animation.fromSpriteSheet(runSheet, range(0, 2), 120)

        this.graphics.add("idle", idle)
        this.graphics.add("runleft", runLeft)
        this.graphics.add("runright", runRight)
        this.graphics.add("runup", runUp)
        this.graphics.add("rundown", runDown)

        this.graphics.use(idle)
    }





    onPreUpdate(engine) {

        let xspeed = 0
        let yspeed = 0
        let kb = engine.input.keyboard
        this.graphics.use('idle')

        if (kb.isHeld(Keys.W)) {
            yspeed = -300
            this.graphics.use('runup')
        }
        if (kb.isHeld(Keys.S)) {
            yspeed = 300

            this.graphics.use('rundown')
        }
        if (kb.isHeld(Keys.A)) {
            xspeed = -300
            this.graphics.use('runleft')

        }
        if (kb.isHeld(Keys.D)) {
            xspeed = 300
            this.graphics.use('runright')

        }

        this.vel = new Vector(xspeed, yspeed)
        //  console.log(this.score)

    }


}