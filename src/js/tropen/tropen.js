import { Actor, Scene, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class TropenScene extends Scene {
    onActivate(ctx) {
        this.clear();
        const bubble = new Actor({ pos: new Vector(640, 360) });
        bubble.graphics.use(Resources.Bubble.toSprite());
        bubble.on("pointerup", () => {
            ctx.engine.goToScene('game');
        });
        this.add(bubble);
    }
}
