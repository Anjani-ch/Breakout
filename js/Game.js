class Game {
    gameElement;
    ctx;
    width;
    height;
    speed;
    paddle;
    ball;
    blocks;

    constructor(gameElement, width, height, speed, paddle, ball, blocks) {
        this.gameElement = gameElement;
        this.ctx = gameElement.getContext('2d');
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.paddle = paddle;
        this.ball = ball;
        this.blocks = blocks;
    }

    init() {
        this.gameElement.width = this.width;
        this.gameElement.height = this.height;

        this.update();
    }

    update() {
        setInterval(_ => {
            this.clear();

            this.paddle.draw(this.gameElement, this.ball, this.ctx);
            this.ball.draw(this.gameElement, this, this.ctx);

            this.drawBlocks();
        }, this.speed);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    drawBlocks() {
        this.blocks.forEach(column => column.forEach(block => block.draw(this.ctx, this.ball, this)));
    }

    resetBlocks() {
        this.blocks.forEach(column => column.forEach(block => block.isVisible = true));
    }
}

export default Game;