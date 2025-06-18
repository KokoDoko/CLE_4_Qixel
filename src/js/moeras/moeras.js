import { Actor, Scene, Vector } from "excalibur";
import { Resources } from "../resources.js";
import { Player } from "../player.js"
import { Capybara } from "./capybara.js"
import { UI } from "../UI.js"
import { BlueBush } from "./bluebush.js"
import { SwampRose } from "./swamprose.js"

export class MoerasScene extends Scene {
    onActivate(ctx) {
        this.clear();
        const bubble = new Actor({ pos: new Vector(640, 360) });
        bubble.graphics.use(Resources.Bubble.toSprite());
        bubble.on("pointerup", () => {
            ctx.engine.goToScene('game');
        });
        this.add(bubble);

         this.obstaclePositions = [];

        this.positionObstacle(BlueBush, 7, this.obstaclePositions)


        const player = new Player();
        this.add(player)

        let capybara = new Capybara()
        this.add(capybara)

         this.positionObstacle(SwampRose, 1, this.obstaclePositions)


        const playerUI = new UI(player)
        this.add(playerUI)



    }

    positionObstacle(ObstacleClass, number, positions) {
        const obstacleCount = number
        const width = 1240
        const height = 920
        // let minDistance = 100;
        // let positions = [];
        const obstacleSize = 100
        const margin = obstacleSize / 2;
        const minDistance = obstacleSize

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
}
