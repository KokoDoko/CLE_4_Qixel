import { Actor, Scene, Vector } from "excalibur";
import { Resources } from "../resources.js";
import { Mine } from './tree.js'
import { Player } from '../player.js'
import { Bones } from './plant.js'

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

         this.obstaclePositions = [];

        this.positionObstacle(Mine, 5, this.obstaclePositions)
        this.positionObstacle(Bones, 4, this.obstaclePositions)

        


        this.createPlayer()

    }

    positionObstacle(ObstacleClass, number, positions){
        const obstacleCount = number
        const width = 1240
        const height = 920
        let minDistance = 100;
        // let positions = [];
        const obstacleSize = 64
        const margin = obstacleSize / 2;

        function isFarEnough(x, y) {
            for (let i = 0; i < positions.length; i++) {
                let pos = positions[i];
                let dx = pos.x - x;
                let dy = pos.y - y;
                if (Math.sqrt(dx * dx + dy * dy) < minDistance) {
                    return false;
                }
            }
            return true;
        }

        let placed = 0;
        while (placed < obstacleCount) {
            const x = margin + Math.random() * (width - 2 * margin)
            const y = margin + Math.random() * (height - 2 * margin)
            if (isFarEnough(x, y)) {
                let obstacle = new ObstacleClass()
                obstacle.pos = new Vector(x, y)
                this.add(obstacle)
                positions.push({ x: x, y: y });
                placed++;
            }
        }

    }

    createPlayer() {
        const player = new Player()
        this.add(player)
        this.add(player)
        console.log("spawn");
        console.log(player);
    }
}
