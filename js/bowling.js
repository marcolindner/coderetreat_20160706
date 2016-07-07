'use strict';

var BowlingGame = function () {
    this.throws = [];
    this.currentThrow = 0;
};

BowlingGame.prototype.throw = function (pins) {
    this.throws[this.currentThrow++] = pins;
};

BowlingGame.prototype.score = function () {
    var score = 0;
    var frameIndex = 0;
    var self = this;

    function sumOfBallsInFrame() {
        return self.throws[frameIndex] + self.throws[frameIndex + 1];
    }

    function spareBonus() {
        return self.throws[frameIndex + 2];
    }

    function strikeBonus() {
        return self.throws[frameIndex + 1] + self.throws[frameIndex + 2];
    }

    function isStrike() {
        return self.throws[frameIndex] === 10;
    }

    function isSpare() {
        return self.throws[frameIndex] + self.throws[frameIndex + 1] === 10;
    }

    for (var frame = 0; frame < 10; frame++) {
        if (isStrike()) {
            score += 10 + strikeBonus();
            frameIndex++;
        } else if (isSpare()) {
            score += 10 + spareBonus();
            frameIndex += 2;
        } else {
            score += sumOfBallsInFrame();
            frameIndex += 2;
        }
    }
    return score;
};
