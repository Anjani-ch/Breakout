class Ball {
    x;
    y;
    xSpeed = 1;
    ySpeed = -1;
    radius;
    color;
    
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw(gameElement, game, ctx) {
        ctx.fillStyle = this.color;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();

        this.update();
        this.detectHit(gameElement, game);
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    changeDir(xSpeed, ySpeed) {
        if(xSpeed) this.xSpeed *= xSpeed;
        if(ySpeed) this.ySpeed *= ySpeed;
    }

    detectHit(gameElement, game) {
        const hasHitTop = this.y <= 0;
        const hasHitBottom = this.y + this.radius >= gameElement.height;
        const hasHitLeft = this.x <= 0;
        const hasHitRight = this.x + this.radius >= gameElement.width;

        if(hasHitLeft || hasHitRight) this.changeDir(-1, 0);

        if(hasHitTop) this.changeDir(0, -1);

        if(hasHitBottom) {
            this.x = gameElement.width / 2;
            this.y = gameElement.height / 2;
            
            this.changeDir(0, 1);
            game.resetBlocks();
        }
    }
}

export default Ball;