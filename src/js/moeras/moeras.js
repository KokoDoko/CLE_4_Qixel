import { Actor, Scene, Vector } from "excalibur";
import { Resources } from "../resources.js";
import { Player } from "../player.js"
import { Capybara } from "./capybara.js"
import { UI } from "../UI.js"

export class MoerasScene extends Scene {
    onActivate(ctx) {
        this.clear();
        const bubble = new Actor({ pos: new Vector(640, 360) });
        bubble.graphics.use(Resources.Bubble.toSprite());
        bubble.on("pointerup", () => {
            ctx.engine.goToScene('game');
        });
        this.add(bubble);


        const player = new Player();
        this.add(player)

        let capybara = new Capybara()
        this.add(capybara)

        const playerUI = new UI(player)
        this.add(playerUI)
    }
}
