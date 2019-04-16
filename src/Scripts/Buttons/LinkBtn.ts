import { ForcedButton } from './ForcedButton';

export class LinkBtn extends ForcedButton {
    private url: string;
    public constructor(posX: number, posY: number, btnGraphicsName: string, url: string, scene: Phaser.Scene) {
        super(posX, posY, btnGraphicsName, scene);
        this.url = url;
    }

    protected clickOnButton(): void {
        window.open(this.url, '_blank');
    }
}
