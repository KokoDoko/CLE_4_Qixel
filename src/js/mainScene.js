import { Scene, Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class MainScene extends Scene {
    onInitialize(engine) {
        const fish = new Actor();
        fish.graphics.use(Resources.Fish.toSprite());
        fish.pos = new Vector(500, 300);
        fish.vel = new Vector(-10, 0);
        fish.events.on("exitviewport", (e) => {
            fish.pos = new Vector(1350, 300);
        });
        fish.on("pointerup", () => {
            engine.goToScene('pool');
        });
        this.add(fish);
    }
}