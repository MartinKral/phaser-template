import { FullscreenBtn } from '../Scripts/Buttons/FullscreenBtn';
import { LinkBtn } from '../Scripts/Buttons/LinkBtn';

export class MainMenuScene extends Phaser.Scene {
    public constructor() {
        super({
            key: 'MainMenuScene',
        });
    }

    public create(): void {
        console.log('Evn : ' + process.env.NODE_ENV);
        if (process.env.NODE_ENV === 'development') {
            new LinkBtn(250, 300, 'logo', 'https://github.com/', this);
        }
        new FullscreenBtn(750, 300, 'fullscreen', this);
    }
}
