import { Actor, BoundingBox, Scene, Vector } from "excalibur";
import { Resources } from "../resources.js";
import { PoolDoor } from "./door.js";
import { Player } from "../player.js";
import { PoolBorderLeft } from "./poolBorderLeft.js";
import { PoolBorderRight } from "./poolBorderRight.js";
import { PoolBorderTop } from "./poolBorderTop.js";
import { PoolBorderBottom } from "./poolBorderBottom.js";

export class PoolScene extends Scene {

    onActivate(ctx) {
        this.clear();

        let poolDoor = new PoolDoor();
        this.add(poolDoor)

        const player = new Player();
        this.pos = new Vector(300, 60);
        this.width = new Vector(30, 0)
        this.height = new Vector(30, 0)

        this.add(player)

        const minX = 0;
        const maxX = 1240;
        const minY = 0;
        const maxY = 920;

        this.camera.strategy.lockToActor(player);
        this.camera.strategy.limitCameraBounds(new BoundingBox(minX, minY, maxX, maxY));
        this.camera.zoom = 1.35;

        let poolBorderLeft = new PoolBorderLeft();
        this.add(poolBorderLeft)

        let poolBorderRight = new PoolBorderRight();
        this.add(poolBorderRight)

        let poolBorderTop = new PoolBorderTop();
        this.add(poolBorderTop)

        let poolBorderBottom = new PoolBorderBottom();
        this.add(poolBorderBottom)
    }
}
