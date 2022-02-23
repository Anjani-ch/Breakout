class Paddle {
    x;
    y;
    width;
    height;
    color;

    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(gameElement, ball, ctx) {
        this.detectHit(gameElement, ball);

        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

    }

    updateDir(x) {
        this.x = x - (this.width / 2);
    }

    detectHit(gameElement, ball) {
        const hasHitLeft = this.x <= 0;
        const hasHitRight = this.x + this.width >= gameElement.width;

        const hasHitBall = ball.y + ball.radius >= this.y && ball.x >= this.x && ball.x + ball.radius <= this.x + this.width;

        if(hasHitLeft) this.x = 0;
        if(hasHitRight) this.x = gameElement.width - this.width;

        if(hasHitBall) ball.changeDir(0, -1);
    }
}

export default Paddle;