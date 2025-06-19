import '../css/style.css';
import { ScreenElement, Vector, Sprite, ImageSource, Actor } from 'excalibur';
import { Resources } from './resources';

export class UI extends ScreenElement {
    constructor(player) {
        super({ anchor: new Vector(0, 0) }); // anchor top-left
        this.player = player;
        this.hearts = []

        // capybara, monkey, orchid discovery 
        this.discoverySprites = [
            { name: "capybara", discovered: false, spriteOff: Resources.Capyundiscover.toSprite(), spriteOn: Resources.Capydiscover.toSprite() },
            { name: "monkey", discovered: true, spriteOff: Resources.Monkeyundiscover.toSprite(), spriteOn: Resources.MonkeyDiscover.toSprite() },
            { name: "orchid", discovered: false, spriteOff: Resources.Orchidundiscover.toSprite(), spriteOn: Resources.Orchiddiscover.toSprite() },
        ]
    }

    onInitialize(engine) {
        // Scale the sprites down (e.g., 50%) - TODO maak gewoon de image PNG's kleiner :)
        this.heartFull = Resources.HeartFullImage.toSprite();
        this.heartFull.scale.setTo(0.15, 0.15);
        this.heartEmpty = Resources.HeartEmptyImage.toSprite();
        this.heartEmpty.scale.setTo(0.15, 0.15);

        // toon huidige heart / discovery status
        this.removeAllChildren()
        this.updateHearts();
        this.showAnimalPortraits()
    }

    onPreUpdate() {
        // Dit hoeft niet elke update! pas het alleen aan als de speler een hartje verliest of een discovery heeft gedaan
        //this.removeAllChildren()
        //this.updateHearts();
        //this.showAnimalPortraits()
    }

    updateHearts() {
        this.hearts = [];

        const startHealth = this.player.startHealth;
        const currentHealth = this.player.health;

        for (let i = 0; i < startHealth; i++) {
            const isFull = i < currentHealth;
            const heart = new Actor({
                pos: new Vector(10 + i * 70, 10), // closer spacing for smaller hearts
                width: 16,
                height: 16,
                anchor: new Vector(0, 0)
            });
            heart.graphics.use(isFull ? this.heartFull : this.heartEmpty);
            heart.z = 10;
            this.addChild(heart);
            this.hearts.push(heart);
        }
    }

    showAnimalPortraits(){
        for (let i = 0; i < this.discoverySprites.length; i++) {
            let check = this.discoverySprites[i]
            const discovery = new Actor({
                pos: new Vector(50 + i * 70, 90), 
                anchor: new Vector(0, 0)
            });
            discovery.graphics.use(check.discovered ? check.spriteOn : check.spriteOff);
            discovery.z = 10;
            this.addChild(discovery);
        }
    }
}
