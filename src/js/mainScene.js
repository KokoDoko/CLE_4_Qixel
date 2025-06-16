import { Scene, Actor, Vector, Color, CollisionType } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from './player.js'
import { LabBackground } from "./lab/background.js";
import { Obstacle1 } from "./lab/obstacle1.js";
import { Obstacle2 } from "./lab/obstacle2.js";
import { Obstacle3 } from "./lab/obstacle3.js";
import { Obstacle4 } from "./lab/obstacle4.js";
import { Obstacle5 } from "./lab/obstacle5.js";
import { Obstacle6 } from "./lab/obstacle6.js";
import { SwampDoor } from "./lab/swampDoor.js";
import { TropenDoor } from "./lab/tropenDoor.js";
import { PoolDoor } from "./lab/poolDoor.js";
import { SavanneDoor } from "./lab/savanneDoor.js";


export class MainScene extends Scene {
    onActivate(ctx) {
        this.clear();

        const labBackground = new LabBackground();
        this.add(labBackground)

        let obstacle1 = new Obstacle1();
        this.add(obstacle1)

        let obstacle2 = new Obstacle2();
        this.add(obstacle2)

        let obstacle3 = new Obstacle3();
        this.add(obstacle3)

        let obstacle4 = new Obstacle4();
        this.add(obstacle4)

        let obstacle5 = new Obstacle5();
        this.add(obstacle5)

        let obstacle6 = new Obstacle6();
        this.add(obstacle6)

        let swampDoor = new SwampDoor();
        this.add(swampDoor)

        let savanneDoor = new SavanneDoor();
        this.add(savanneDoor)

        let poolDoor = new PoolDoor();
        this.add(poolDoor)

        let tropenDoor = new TropenDoor();
        this.add(tropenDoor)

        // const redFish = new Actor();
        // const redsprite = Resources.Fish.toSprite();
        // redsprite.tint = Color.Red;
        // redFish.graphics.use(redsprite);
        // redFish.pos = new Vector(500, 300);
        // redFish.on("pointerup", () => {
        //     ctx.engine.goToScene('savanne');
        // });

        // const pinkFish = new Actor();
        // const pinkSprite = Resources.Fish.toSprite();
        // pinkSprite.tint = Color.Pink;
        // pinkFish.graphics.use(pinkSprite);
        // pinkFish.pos = new Vector(500, 500);
        // pinkFish.on("pointerup", () => {
        //     ctx.engine.goToScene('tropen');
        // });

        // const blueFish = new Actor();
        // const blueSprite = Resources.Fish.toSprite();
        // blueSprite.tint = Color.Blue;
        // blueFish.graphics.use(blueSprite);
        // blueFish.pos = new Vector(500, 700);
        // blueFish.on("pointerup", () => {
        //     ctx.engine.goToScene('pool');
        // });

        // this.add(greenFish);
        // this.add(redFish);
        // this.add(pinkFish);
        // this.add(blueFish);
        this.createPlayer();
    }
    createPlayer() {
        const player = new Player()
        this.add(player)
        this.add(player)
        console.log("spawn");
        console.log(player);
    }

}