import { Actor, BoundingBox, Scene, Vector } from "excalibur";
import { Resources } from "../resources.js";
import { Player } from "../player.js";
import { SwampBorderLeft } from "./swampBorderLeft.js";
import { SwampBorderRight } from "./swampBorderRight.js";
import { SwampBorderTop } from "./swampBorderTop.js";
import { SwampBorderBottom } from "./swampBorderBottom.js";
import { SwampDoor } from "./door.js";

export class MoerasScene extends Scene {
    onActivate(ctx) {
        this.clear();

        let swampDoor = new SwampDoor();
        this.add(swampDoor)

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

        let swampBorderLeft = new SwampBorderLeft();
        this.add(swampBorderLeft)

        let swampBorderRight = new SwampBorderRight();
        this.add(swampBorderRight)

        let swampBorderTop = new SwampBorderTop();
        this.add(swampBorderTop)

        let swampBorderBottom = new SwampBorderBottom();
        this.add(swampBorderBottom)

    }
}
