import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { PoolScene } from './poolgebied/pool.js'
import { MainScene } from './mainScene.js'
import { SavanneScene } from './savanne/savanne.js'
import { MoerasScene } from './moeras/swamp.js'
import { TropenScene } from './tropen/tropen.js'

export class Game extends Engine {

    player;
    constructor() {
        super({
            width: 1240,
            height: 920,
            maxFps: 60,
            pixelRatio:1, 
            displayMode: DisplayMode.FitScreen
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
    }
}
new Game()