
export class theCanvas {
    constructor() {
        this.canvas = document.querySelector('#gameScreen');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = 600;
        this.canvas.height = 600;
        this.blocksPerLine = 11;
        this.gridBlock = (this.canvas.width / this.blocksPerLine) * 0.9;
        this.gridSpace = this.canvas.width / this.blocksPerLine;
        this.blockArray = [];
        this.playerX = 5;
        this.playerY = 5;
        this.playerArray = [this.playerX + ',' + this.playerY];
    }
    displayCanvas() {
        for (let i = 0; i < this.blocksPerLine; i++) {
            for (let x = 0; x < this.blocksPerLine; x++) {
                this.blockArray.push(i + ',' + x)
                if (this.playerArray == this.blockArray[this.blockArray.length - 1]) {
                    this.context.fillStyle = 'blue'
                }
                else {
                    this.context.fillStyle = 'gray';
                }
                this.context.fillRect(
                    (i * this.gridSpace) + (this.gridSpace - this.gridBlock) / 2,
                    (x * this.gridSpace) + (this.gridSpace - this.gridBlock) / 2,
                    this.gridBlock, this.gridBlock);
            }
        }
    }
    displayPlayer() {
        document.addEventListener('keydown', () => {
            if (event.keyCode == 37 || event.keyCode == 65) {
                this.playerX -= 1;
                this.playerArray = [this.playerX + ',' + this.playerY];
                this.displayCanvas();
            }
            if (event.keyCode == 38 || event.keyCode == 87) {
                this.playerY -= 1;
                this.playerArray = [this.playerX + ',' + this.playerY];
                this.displayCanvas();
            }
            if (event.keyCode == 39 || event.keyCode == 68) {
                this.playerX += 1;
                this.playerArray = [this.playerX + ',' + this.playerY];
                this.displayCanvas();
            }
            if (event.keyCode == 40 || event.keyCode == 83) {
                this.playerY += 1;
                this.playerArray = [this.playerX + ',' + this.playerY];
                this.displayCanvas();
            }
        });
    }
}