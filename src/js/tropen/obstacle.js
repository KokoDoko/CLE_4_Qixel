import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'

export class Bubble extends Actor {

    constructor() {
        super()
        this.graphics.use(Resources.Bubble.toSprite())
    }


}

