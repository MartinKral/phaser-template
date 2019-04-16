import { FullscreenBtn } from '../Scripts/Buttons/FullscreenBtn';
import { LinkBtn } from '../Scripts/Buttons/LinkBtn';

export class MainMenuScene extends Phaser.Scene {
    public constructor() {
        super({
            key: 'MainMenuScene',
        });
    }

    public create(): void {
        new LinkBtn(400, 300, 'logo', 'https://github.com/', this);
        new FullscreenBtn(500, 300, 'fullscreen', this);
    }
}
