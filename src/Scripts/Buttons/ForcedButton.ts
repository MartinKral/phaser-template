export abstract class ForcedButton {
    private button: Phaser.GameObjects.Sprite;
    private canClickOnButton: boolean;
    private gameContainer: HTMLElement;

    public constructor(posX: number, posY: number, btnGraphicsName: string, scene: Phaser.Scene) {
        this.setupButton(posX, posY, btnGraphicsName, scene);
        this.setupGameContainer();
    }

    protected abstract clickOnButton(): void;

    private setupButton(posX: number, posY: number, btnGraphicsName: string, scene: Phaser.Scene): void {
        this.button = scene.add.sprite(posX, posY, btnGraphicsName);
        this.button.setInteractive();
        this.button.on('pointerdown', this.allowClickOnButton, this);
    }

    private setupGameContainer(): void {
        this.gameContainer = document.getElementById('game');
        this.gameContainer.addEventListener('click', this.tryToClickOnButton.bind(this));
        this.gameContainer.addEventListener('touchend', this.tryToClickOnButton.bind(this));
    }

    private allowClickOnButton(): void {
        this.canClickOnButton = true;
        setTimeout((): void => {
            this.canClickOnButton = false;
        }, 300);
    }

    private tryToClickOnButton(): void {
        if (this.canClickOnButton) {
            this.clickOnButton();
        }
    }
}
