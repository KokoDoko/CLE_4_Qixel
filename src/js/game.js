import '../css/style.css'
import { Engine, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Player } from './player.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1240,
            height: 920,
            maxFps: 60,
            displayMode: DisplayMode.Fixed
         })
        this.start(ResourceLoader).then(() => this.startGame())
        // this.displayMode.pos = new Vector(500,300)
    }

    startGame() {
        console.log("start de game!")
        const fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(500, 300)
        fish.vel = new Vector(-10,0)
        fish.events.on("exitviewport", (e) => this.fishLeft(e))
        this.add(fish)
        const player = new Player()
        player.events.on("exitviewport", (e) => this.fishLeft(e))
        this.add(player)
    }

    fishLeft(e) {
        e.target.pos = new Vector(1350, 300)
    }
}

new Game()
