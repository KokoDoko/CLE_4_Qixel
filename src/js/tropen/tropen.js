import { Actor, Scene, Vector } from "excalibur";
import { Resources } from "../resources.js";
import { Mine } from './obstacle.js'

export class TropenScene extends Scene {


    constructor() {
        super()
    }

    onActivate(ctx) {
        this.clear();
        const bubble = new Actor({ pos: new Vector(640, 360) });
        bubble.graphics.use(Resources.Bubble.toSprite());
        bubble.on("pointerup", () => {
            ctx.engine.goToScene('game');
        });
        this.add(bubble);


        let mine = new Mine()
        this.add(mine)
        const mineCount = 10
        const width = 1240  
        const height = 920

        for (let i = 0; i < mineCount; i++) {
            const x = Math.random() * width
            const y = Math.random() * height
            let mine = new Mine()
            mine.pos = new Vector(x, y)
            this.add(mine)
        }
    }
}
