
export class theGame {
    constructor(theCanvas) {
        this.canvas = document.querySelector(theCanvas);
        this.context = this.canvas.getContext('2d');
        this.arenaSize = document.querySelector('#arenaSize');
        this.canvas.width = 600;
        this.canvas.height = 600;
        this.gridSize = 10;
        this.gridBlock = (this.canvas.width / this.gridSize) * 0.9;
        this.gridSpace = this.canvas.width / this.gridSize;
        this.playerArray = [0, 0];
        this.blockArray = [];
    }
    displayCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        document.querySelector('#arenaText').innerHTML = `The arena is currently: ${this.gridSize}x${this.gridSize}`;
        for (let x = 0; x < this.gridSize; x++) {
            for (let y = 0; y < this.gridSize; y++) {
                this.blockArray.push([x, y])
                if (this.playerArray[0] == this.blockArray[this.blockArray.length - 1][0] &&
                    this.playerArray[1] == this.blockArray[this.blockArray.length - 1][1]) {
                    this.context.fillStyle = 'blue'
                } else {
                    this.context.fillStyle = 'gray';
                }
                this.context.fillRect(
                    (x * this.gridSpace) + (this.gridSpace - this.gridBlock) / 2,
                    (y * this.gridSpace) + (this.gridSpace - this.gridBlock) / 2,
                    this.gridBlock, this.gridBlock);
            }
        }
    }
    displayPlayer() {
        document.addEventListener('keydown', () => {
            this.movePlayer(37, 65, 0, -1);
            this.movePlayer(38, 87, 1, -1);
            this.movePlayer(39, 68, 0, 1);
            this.movePlayer(40, 83, 1, 1);
        });
    }
    movePlayer(keyOne, keyTwo, XY, plusMinus) {
        if (event.keyCode == keyOne || event.keyCode == keyTwo) {
            let num = this.playerArray[XY] + plusMinus;
            if (this.border(num)) {
                this.playerArray[XY] = num;
                this.displayCanvas();
            }
        }
    }
    border(end) {
        if (0 > end || (this.gridSize - 1) < end) {
            return false;
        } else {
            return true;
        }
    }
    arenaSizeListener() {
        arenaSize.addEventListener('change', () => {
            if (arenaSize.value < this.gridSize) {
                let num = this.gridSize - arenaSize.value;
                for (let i = 0; i < num; i++) {
                    if (this.playerArray[0] > 0) {
                        this.playerArray[0] -= 1;
                    }
                    if (this.playerArray[1] > 0) {
                        this.playerArray[1] -= 1;
                    }
                }
            }
            this.gridSize = arenaSize.value;
            this.gridBlock = (this.canvas.width / this.gridSize) * 0.9;
            this.gridSpace = this.canvas.width / this.gridSize;
            this.displayCanvas();
        })
    }
}