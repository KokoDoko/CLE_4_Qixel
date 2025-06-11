import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        const fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(Math.random() * 1280, Math.random() * 720)
        fish.vel = new Vector(Math.random() * 100 - 50, Math.random() * 100 - 50)

        fish.on('preupdate', () => {
            if (Math.random() < 0.01) {
                fish.vel = new Vector(Math.random() * 100 - 50, Math.random() * 100 - 50)
            }
        })

        this.add(fish)
    }
}

new Game()
