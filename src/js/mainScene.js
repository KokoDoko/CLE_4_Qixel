import { Scene, Actor, Vector, Color } from "excalibur";
import { Resources } from "./resources.js";

export class MainScene extends Scene {
    onInitialize(engine) {
        const pool = new Actor();
        pool.graphics.use(Resources.Fish.toSprite());
        pool.tint = new Color(Math.random() * 255, Math.random() * 255, Math.random() * 255)

        pool.pos = new Vector(500, 300);
        pool.vel = new Vector(-10, 0);
        pool.events.on("exitviewport", (e) => {
            pool.pos = new Vector(1350, 300);
        });
        pool.on("pointerup", () => {
            engine.goToScene('pool');
        });
        this.add(pool);


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