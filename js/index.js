import Game from './Game.js';
import Paddle from './Paddle.js';
import Ball from './Ball.js';
import Block from './Block.js';

const gameElement = document.querySelector('#game');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 500;
const GAME_SPEED = 1;

const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 5;
const PADDLE_COLOR = 'white';
const paddleX = (GAME_WIDTH / 2) - (PADDLE_WIDTH / 2);
const paddleY = GAME_HEIGHT - 15;

const BALL_X = GAME_WIDTH / 2;
const BALL_Y = GAME_HEIGHT / 2;
const BALL_RADIUS = 7;
const BALL_COLOR = 'white';

const BLOCK_ROWS = 9;
const BLOCK_COLS = 9;

const createBlocks = (rows, cols) => {
    const BLOCK_OFFSET_X = 25;
    const BLOCK_OFFSET_Y = 20;
    const BLOCK_WIDTH = 75;
    const BLOCK_HEIGHT = 10;
    const BLOCK_PADDING = 10;
    const BLOCK_COLOR = 'white';

    const result = [];

    for (let i = 0; i < rows; i++) {
        result[i] = [];

        for (let j = 0; j < cols; j++) {
          const x = i * (BLOCK_WIDTH + BLOCK_PADDING) + BLOCK_OFFSET_X;
          const y = j * (BLOCK_HEIGHT + BLOCK_PADDING) + BLOCK_OFFSET_Y;
      
          result[i][j] = new Block(x, y, BLOCK_WIDTH, BLOCK_HEIGHT, BLOCK_COLOR);;
        }
    }

    return result;
}

const blocks = createBlocks(BLOCK_ROWS, BLOCK_COLS);

const paddle = new Paddle(paddleX, paddleY, PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_COLOR);
const ball = new Ball(BALL_X, BALL_Y, BALL_RADIUS, BALL_COLOR);

const game = new Game(gameElement, GAME_WIDTH, GAME_HEIGHT, GAME_SPEED, paddle, ball, blocks);

window.addEventListener('DOMContentLoaded', e => game.init());

gameElement.addEventListener('mousemove', e => paddle.updateDir(e.offsetX));