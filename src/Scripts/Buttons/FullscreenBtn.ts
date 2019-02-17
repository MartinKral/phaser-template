import { ForcedButton } from "./ForcedButton";

export class FullscreenBtn extends ForcedButton {
    private scene: Phaser.Scene;
    constructor(posX: number, posY: number, btnGraphicsName: string, scene: Phaser.Scene) {
        super(posX, posY, btnGraphicsName, scene);
        this.scene = scene;
    }

    protected clickOnButton(): void {
        this.scene.scale.startFullscreen();
    }
}
