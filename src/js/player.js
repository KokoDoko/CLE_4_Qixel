import { Actor, Engine, Vector, Keys, CollisionType, SpriteSheet, range, Animation, Axes, Buttons } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Player extends Actor {

    constructor() {
        super({
            width: Resources.Player.width,
            height: Resources.Player.height,
            collisionType: CollisionType.Active
        });

        this.scale = new Vector(0.3, 0.3);
        this.pos = new Vector(500, 300);

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

        // Override vel now that xspeed/yspeed may have changed
        vel = new Vector(xspeed, yspeed);

        // Gamepad support
        const gamepad = engine.input.gamepads.at(0);
        if (gamepad) {
            const deadzone = 0.2;
            let moveX = gamepad.getAxes(Axes.LeftStickX);
            let moveY = gamepad.getAxes(Axes.LeftStickY);

            if (Math.abs(moveX) < deadzone) moveX = 0;
            if (Math.abs(moveY) < deadzone) moveY = 0;

            let moveDirection = new Vector(moveX, moveY);

            if (gamepad.isButtonPressed(Buttons.DpadLeft)) moveDirection.x = -1;
            if (gamepad.isButtonPressed(Buttons.DpadRight)) moveDirection.x = 1;
            if (gamepad.isButtonPressed(Buttons.DpadUp)) moveDirection.y = -1;
            if (gamepad.isButtonPressed(Buttons.DpadDown)) moveDirection.y = 1;

            if (!moveDirection.equals(Vector.Zero)) {
                vel = moveDirection.normalize().scale(speed);
            }

            if (gamepad.isButtonPressed(Buttons.Face1)) this.jump();
            if (gamepad.isButtonPressed(Buttons.Face2)) this.attack();
            if (gamepad.isButtonPressed(Buttons.Face3)) this.interact();
        }

    // Final velocity clamp
    if (!vel.equals(Vector.Zero)) {
        vel = vel.normalize().scale(speed);
    }

    this.vel = vel;
    }    

    jump() {
        console.log("Jump action triggered");
        // Implement jump logic here (e.g., apply upward velocity if grounded)
    }

    attack() {
        console.log("Attack action triggered");
        // Implement attack logic here (e.g., play animation, detect hit)
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
