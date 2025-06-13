import { Scene, Actor, Vector, Color } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from './player.js'


export class MainScene extends Scene {
    onActivate(ctx) {
        this.clear();
        const greenFish = new Actor();
        const greenSprite = Resources.Fish.toSprite();
        greenSprite.tint = Color.Green;
        greenFish.graphics.use(greenSprite);
        greenFish.pos = new Vector(500, 100);
        greenFish.vel = new Vector(-10, 0);
        greenFish.on("pointerup", () => {
            ctx.engine.goToScene('moeras');
        });

        const redFish = new Actor();
        const redsprite = Resources.Fish.toSprite();
        redsprite.tint = Color.Red;
        redFish.graphics.use(redsprite);
        redFish.pos = new Vector(500, 300);
        redFish.on("pointerup", () => {
            ctx.engine.goToScene('savanne');
        });

        const pinkFish = new Actor();
        const pinkSprite = Resources.Fish.toSprite();
        pinkSprite.tint = Color.Pink;
        pinkFish.graphics.use(pinkSprite);
        pinkFish.pos = new Vector(500, 500);
        pinkFish.on("pointerup", () => {
            ctx.engine.goToScene('tropen');
        });

        const blueFish = new Actor();
        const blueSprite = Resources.Fish.toSprite();
        blueSprite.tint = Color.Blue;
        blueFish.graphics.use(blueSprite);
        blueFish.pos = new Vector(500, 700);
        blueFish.on("pointerup", () => {
            ctx.engine.goToScene('pool');
        });

        this.add(greenFish);
        this.add(redFish);
        this.add(pinkFish);
        this.add(blueFish);
        this.createPlayer();
    }
    createPlayer() {
        const player = new Player()
        this.add(player)
        this.currentScene.add(player)
        console.log("spawn");
        console.log(player);
    }

}