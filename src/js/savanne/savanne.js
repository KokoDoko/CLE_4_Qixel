import { Actor, BoundingBox, Scene, Vector } from "excalibur";
import { Resources } from "../resources.js";
import { SavanneDoor } from "./door.js";
import { Player } from "../player.js";
import { SavanneBorderBottom } from "./savanneBorderBottom.js";
import { SavanneBorderTop } from "./savanneBorderTop.js";
import { SavanneBorderRight } from "./savanneBorderRight.js";
import { SavanneBorderLeft } from "./savanneBorderLeft.js";

export class SavanneScene extends Scene {
    onActivate(ctx) {
        this.clear();

        let savanneDoor = new SavanneDoor();
        this.add(savanneDoor)

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

        let savanneBorderLeft = new SavanneBorderLeft();
        this.add(savanneBorderLeft)

        let savanneBorderRight = new SavanneBorderRight();
        this.add(savanneBorderRight)

        let savanneBorderTop = new SavanneBorderTop();
        this.add(savanneBorderTop)

        let savanneBorderBottom = new SavanneBorderBottom();
        this.add(savanneBorderBottom)
    }
}
