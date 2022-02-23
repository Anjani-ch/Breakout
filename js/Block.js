class Block {
    x;
    y;
    width;
    height;
    color;
    isVisible = true;

    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(ctx, ball) {
        ctx.fillStyle = this.isVisible ? this.color : 'transparent';
        ctx.fillRect(this.x, this.y, this.width, this.height);

        if(this.isVisible) this.detectHit(ball);
    }

    detectHit(ball) {
        const checkLeft = ball.y - ball.radius < this.y + this.height;
        const checkTop = ball.y + ball.radius > this.y;
        const checkBottom = ball.x - ball.radius > this.x;
        const checkRight = ball.x + ball.radius < this.x + this.width;

        const hasHitBall = checkLeft && checkTop && checkBottom && checkRight;

        if(hasHitBall) {
            ball.changeDir(0, -1);
            this.isVisible = false;
        }
    }
}

export default Block;