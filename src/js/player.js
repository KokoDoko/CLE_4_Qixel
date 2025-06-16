import { Actor, Engine, Vector, Keys, CollisionType, SpriteSheet, range, Animation, Axes, Buttons, Shape } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Monkey } from './tropen/monkey.js'
import { Mine } from './tropen/flower.js'
import { Net } from './tropen/net.js'

export class Player extends Actor {

    flowerCount

    constructor() {
        super({
            width: Resources.Player.width,
            height: Resources.Player.height,
            collisionType: CollisionType.Active
        });

        this.scale = new Vector(0.4, 0.4);
        this.pos = new Vector(500, 300);

        this.collider.set(Shape.Box(130, 200));
        this.collider.set(
            Shape.Box(100, 100, Vector.Zero, new Vector(-23, 10))
        );

        const runSheet = SpriteSheet.fromImageSource({
            image: Resources.Player,
            grid: { rows: 1, columns: 12, spriteWidth: 180, spriteHeight: 250 }
        });

        const idle = runSheet.sprites[1];
        const runLeft = Animation.fromSpriteSheet(runSheet, range(3, 5), 120);
        const runRight = Animation.fromSpriteSheet(runSheet, range(6, 8), 120);
        const runUp = Animation.fromSpriteSheet(runSheet, range(10, 11), 120);
        const runDown = Animation.fromSpriteSheet(runSheet, range(0, 2), 120);

        this.graphics.add("idle", idle);
        this.graphics.add("runleft", runLeft);
        this.graphics.add("runright", runRight);
        this.graphics.add("runup", runUp);
        this.graphics.add("rundown", runDown);
        this.graphics.use(idle); // <-- Now it's defined

        this.flowerCount = 0
    }

    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;
        let speed = 300;
        let vel = new Vector(xspeed, yspeed); // FIXED
        let kb = engine.input.keyboard;

        this.graphics.use('idle');

        if (kb.isHeld(Keys.W)) {
            yspeed = -300;
            this.graphics.use('runup');
        }
        if (kb.isHeld(Keys.S)) {
            yspeed = 300;
            this.graphics.use('rundown');
        }
        if (kb.isHeld(Keys.A)) {
            xspeed = -300;
            this.graphics.use('runleft');
        }
        if (kb.isHeld(Keys.D)) {
            xspeed = 300;
            this.graphics.use('runright');
        }

        if (kb.wasPressed(Keys.Space)) {
            this.catch()
        }

        // Override vel now that xspeed/yspeed may have changed
        vel = new Vector(xspeed, yspeed);

        // Gamepad support
        // const gamepad = engine.input.gamepads.at(0);
        // if (gamepad) {
        //     const deadzone = 0.2;
        //     let moveX = gamepad.getAxes(Axes.LeftStickX);
        //     let moveY = gamepad.getAxes(Axes.LeftStickY);

        //     if (Math.abs(moveX) < deadzone) moveX = 0;
        //     if (Math.abs(moveY) < deadzone) moveY = 0;

        //     let moveDirection = new Vector(moveX, moveY);

        //     if (gamepad.isHeld(Buttons.DpadLeft)) {
        //         xspeed = -300;
        //         this.graphics.use('runleft');            
        //     }
        //     if (gamepad.isHeld(Buttons.DpadRight)) {
        //         xspeed = 300;
        //         this.graphics.use('runright');            
        //     }
        //     if (gamepad.isHeld(Buttons.DpadUp)) {
        //         yspeed = -300;
        //         this.graphics.use('runup');            
        //     }
        //     if (gamepad.isHeld(Buttons.DpadDown)) {
        //         yspeed = 300;
        //         this.graphics.use('rundown');            
        //     }

        //     if (!moveDirection.equals(Vector.Zero)) {
        //         vel = moveDirection.normalize().scale(speed);
        //     }

        //     if (gamepad.isButtonPressed(Buttons.Face1)) this.jump();
        //     if (gamepad.isButtonPressed(Buttons.Face2)) this.attack();
        //     if (gamepad.isButtonPressed(Buttons.Face3)) this.interact();
        // }

        // Final velocity clamp
        if (!vel.equals(Vector.Zero)) {
            vel = vel.normalize().scale(speed);
        }

        this.vel = vel;
    }

    onInitialize(engine) {
        this.on('collisionstart', (event) => this.hitMonkey(event))
        this.on('collisionstart', (event) => this.hitFlower(event))

    }

    hitMonkey(event) {
        if (event.other.owner instanceof Monkey) {
            if (this.flowerCount > 0) {
                this.flowerCount -= 1
                console.log("lost flower")

                if (this.scene && typeof this.scene.positionObstacle === "function") {
                    this.scene.positionObstacle(Mine, 1, this.scene.obstaclePositions);
                }


            }


        }
    }

    hitFlower(event) {
        if (event.other.owner instanceof Mine) {
            console.log("got flower")
            event.other.owner.kill()
            this.flowerCount += 1

        }
    }

    jump() {
        console.log("Jump action triggered");
        // Implement jump logic here (e.g., apply upward velocity if grounded)
    }

    attack() {
        console.log("Attack action triggered");
        // Implement attack logic here (e.g., play animation, detect hit)
    }

    catch() {
        // let b = new Net()
        // b.pos = new Vector(this.pos.x, this.pos.y)
        // this.scene.add(b)
        // this.scene.add(new Net(this.pos.x + this.width/2, this.pos.y))
        let direction = new Vector(1, 0);
        let net = new Net(this.pos, direction);
        this.scene.add(net);

    }

    interact() {
        console.log("Interact action triggered");
        // Implement interact logic (e.g., talk to NPCs, open doors)
    }


    onCollisionStart(event) {
        console.log('Geraakt door:', event.other);
    }

    onCollisionEnd(event) {

    }


    gameOver() {
        this.pos.x = 400;
        this.pos.y = 300;
        this.health = this.startHealth;
    }

}