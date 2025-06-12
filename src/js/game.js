import '../css/style.css'
import { Engine, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { PoolScene } from './poolgebied/pool.js'
import { MainScene } from './mainscene.js'

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
        this.add('game', new MainScene())
        this.add('pool', new PoolScene())
        this.goToScene('game')
    }
}

new Game()
