import '../css/style.css'
import { Engine, DisplayMode, Actor, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { PoolScene } from './poolgebied/pool.js'
import { MainScene } from './mainscene.js'
// import { Player } from './player.js'
import { Bubble } from './tropen/obstacle.js'

export class Game extends Engine {
    constructor() {
        super({
            width: 1280,
            height: 920,
            maxFps: 60,
            displayMode: DisplayMode.Fixed
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.add('game', new MainScene())
        this.add('pool', new PoolScene())
        this.goToScene('game')


        const fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(500, 300)
        fish.vel = new Vector(-10, 0)
        this.add(fish)
        // const player = new Player()
        // this.add(player)
        let bubble = new Bubble()
        this.add(bubble)
    }
}
new Game()