import { ForcedButton } from "./ForcedButton";

export class FullscreenBtn extends ForcedButton {
    private canvas: HTMLCanvasElement;
    private fullscreen: Phaser.Device.Fullscreen;
    constructor(posX: number, posY: number, btnGraphicsName: string, scene: Phaser.Scene) {
        super(posX, posY, btnGraphicsName, scene);
        this.canvas = scene.sys.game.canvas;
        this.fullscreen = scene.sys.game.device.fullscreen;
    }

    protected clickOnButton(): void {
        this.canvas[this.fullscreen.request]();
    }
}
