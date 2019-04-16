import { FullscreenBtn } from "../Scripts/Buttons/FullscreenBtn";
import { LinkBtn } from "../Scripts/Buttons/LinkBtn";

export class MainMenuScene extends Phaser.Scene {
    private escapeKey: Phaser.Input.Keyboard.Key;

    public constructor() {
        super({
            key: "MainMenuScene"
        });
    }

    public create(): void {
        new LinkBtn(400, 300, "logo", "https://github.com/", this);
        new FullscreenBtn(500, 300, "fullscreen", this);

        this.escapeKey = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.ESC
        );
    }

    private test(): void {   }

    public update(): void {
        if (this.escapeKey.isDown) {
            console.log("escape");
            this.scale.stopFullscreen();
        }
    }
}
