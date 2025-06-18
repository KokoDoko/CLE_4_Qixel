import { Actor, CollisionType, Color, Font, Graphic, Label, Rectangle, Vector } from "excalibur";
import { Resources } from "../resources.js";
import { Player } from "../player.js";

export class LabBook extends Actor {
    constructor() {
        super({ width: Resources.Bubble.width, height: Resources.Bubble.height, collisionType: CollisionType.Fixed });

        this.graphics.use(Resources.Bubble.toSprite());
        this.pos = new Vector(600, 300);
        this.pages = [
            "Je bent een dokter die een infectie moet stoppen en geïnfecteerde dieren moet genezen.\nDit doe je door geïnfecteerde dieren te verslaan en planten te verzamelen\nom een medicijn te maken.\nJe start in een laboratorium, de kamers leiden naar andere gebieden.\nJe vangt de dieren op verschillende manieren: springen, gooien, sluipen.\nJe verliest een leven wanneer je iets verkeerd vangt.\nAls je “dood” bent verlies je progressie in de kamer en moet je vanaf het begin beginnen.\nZorg ervoor dat je alle planten en dieren verzamelt om in het lab het medicijn te maken.",
            "Controls:\nDoor op ? te klikken ga je naar voren.\nDoor op ? te klikken ga je naar achteren.\nDoor op ? te klikken ga je naar links.\nDoor op ? te klikken ga je naar rechts.",
            "Vangmethodes:\nDoor op ? te klikken gooi je een net.\nDoor op ? te klikken gooi je een steen.\nDoor eerst de plant te pakken kan je een dier lokken.\nDoor op ? te klikken spring je op een dier.",
            "Hints voor de bijpassende vangmethodes:\nHet dier dat het hoogst springt moet met een net worden gevangen.\nHet dier dat agressief is moet je aanvallen.\nHet dier dat ?\nOp het dier dat het verst glijdt moet je springen."
        ];
        this.currentPage = 0;
        this.popup = null;
        this._onKeyPress = null;
    }

    onInitialize(engine) {
        this.on("collisionstart", (evt) => {
            if (evt.other.owner instanceof Player && !this.popup) {
                this.showPopup(engine);
            }
        });
    }

    showPopup(engine) {
        const popupWidth = 820;
        const popupHeight = 320;
        const centerX = engine.drawWidth / 1.65;
        const centerY = engine.drawHeight / 2;

        // Achtergrond 
        this.popupBg = new Actor({
            pos: new Vector(centerX, centerY),
            width: popupWidth,
            height: popupHeight,
            z: 9998,
            anchor: Vector.Half,
            collisionType: CollisionType.PreventCollision
        });
        this.popupBg.graphics.use(Resources.Book.toSprite());
        this.popupBg.scale = new Vector(0.75, 0.75);
        engine.currentScene.add(this.popupBg);

        // Tekst
        this.popup = new Label({
            text: this.pages[this.currentPage],
            pos: new Vector(centerX - 390, centerY - 80),
            font: new Font({ size: 20, color: Color.Black }),
            z: 9999,
            anchor: Vector.Half
        });
        engine.currentScene.add(this.popup);

        // Kruisje 
        const crossSize = 40;
        this.closeBtn = new Label({
            text: "✕",
            pos: new Vector(centerX - popupWidth / 2.5 + crossSize, centerY - popupHeight / 1.4 + crossSize),
            font: new Font({ size: crossSize, color: Color.Black }),
            z: 10000,
            anchor: Vector.Half
        });
        engine.currentScene.add(this.closeBtn);

        this.closeBtn.on('pointerup', () => {
            this.closePopup(engine);
        });

        const arrowSize = 40;
        const arrowY = centerY + popupHeight / 2 - arrowSize;

        // Linkerpijl
        this.leftArrow = new Label({
            text: "<",
            pos: new Vector(centerX - popupWidth / 2.5 + arrowSize, arrowY),
            font: new Font({ size: arrowSize, color: this.currentPage > 0 ? Color.Black : Color.Gray }),
            z: 10000,
            anchor: Vector.Half
        });
        engine.currentScene.add(this.leftArrow);
        this.leftArrow.on('pointerup', () => {
            if (this.currentPage > 0) {
                this.currentPage--;
                this.popup.text = this.pages[this.currentPage];
                this.updateArrows();
            }
        });

        // Rechterpijl
        this.rightArrow = new Label({
            text: ">",
            pos: new Vector(centerX + popupWidth / 2.65 - arrowSize, arrowY),
            font: new Font({ size: arrowSize, color: this.currentPage < this.pages.length - 1 ? Color.Black : Color.Gray }),
            z: 10000,
            anchor: Vector.Half
        });
        engine.currentScene.add(this.rightArrow);
        this.rightArrow.on('pointerup', () => {
            if (this.currentPage < this.pages.length - 1) {
                this.currentPage++;
                this.popup.text = this.pages[this.currentPage];
                this.updateArrows();
            }
        });

        this._onKeyPress = (e) => {
            if ((e.key === 'ArrowRight') && this.currentPage < this.pages.length - 1) {
                this.currentPage++;
                this.popup.text = this.pages[this.currentPage];
                this.updateArrows();
            } else if ((e.key === 'ArrowLeft') && this.currentPage > 0) {
                this.currentPage--;
                this.popup.text = this.pages[this.currentPage];
                this.updateArrows();
            } else if (e.key === 'Escape') {
                this.closePopup(engine);
            }
        };
        engine.input.keyboard.on('press', this._onKeyPress);
    }
    updateArrows() {
        if (this.leftArrow) {
            this.leftArrow.font.color = this.currentPage > 0 ? Color.Black : Color.Gray;
        }
        if (this.rightArrow) {
            this.rightArrow.font.color = this.currentPage < this.pages.length - 1 ? Color.Black : Color.Gray;
        }
    }
    closePopup(engine) {
        if (this.popup) {
            this.popup.kill();
            this.popup = null;
            this.currentPage = 0;
        }
        if (this.popupBg) {
            this.popupBg.kill();
            this.popupBg = null;
        }
        if (this.closeBtn) {
            this.closeBtn.kill();
            this.closeBtn = null;
        }
        if (this.leftArrow) {
            this.leftArrow.kill();
            this.leftArrow = null;
        }
        if (this.rightArrow) {
            this.rightArrow.kill();
            this.rightArrow = null;
        }
        engine.input.keyboard.off('press', this._onKeyPress);
    }
}