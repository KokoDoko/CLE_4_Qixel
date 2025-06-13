import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Player } from './player.js'
import { BoundingBox } from "excalibur"
import { PoolScene } from './poolgebied/pool.js'
import { MainScene } from './mainscene.js'
import { SavanneScene } from './savanne/savanne.js'
import { MoerasScene } from './moeras/moeras.js'
import { TropenScene } from './tropen/tropen.js'
import { Mine } from './tropen/obstacle.js'

export class Game extends Engine {
    constructor() {
        super({
            width: 1240,
            height: 920,
            maxFps: 60,
            displayMode: DisplayMode.Fixed
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        this.add('game', new MainScene())
        this.add('pool', new PoolScene())
        this.add('savanne', new SavanneScene())
        this.add('moeras', new MoerasScene())
        this.add('tropen', new TropenScene())
        this.goToScene('game')

        this.createPlayer()

        const fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(500, 300)
        fish.vel = new Vector(-10, 0)
        this.add(fish)

    }
        // let bubble = new Bubble()
        // this.add(bubble)

        // let mine = new Mine()
        // this.add(mine)

    createPlayer() {
        const player = new Player()
        this.add(player)
        this.currentScene.add(player)
        console.log("spawn");
        console.log(player);


        }
    }
    
new Game()