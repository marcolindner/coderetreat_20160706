
/* global BowlingGame */
'use strict';

describe('BowlingGame', function () {
    var game;

    beforeEach(function () {
        game = new BowlingGame();
    });

    function throwMany(n, pins) {
        for (var i = 0; i < n; i++) {
            game.throw(pins);
        }
    }

    function throwSpare() {
        game.throw(5);
        game.throw(5);
    }

    function throwStrike() {
        game.throw(10);
    }

    it('should handle gutter game', function () {
        throwMany(20, 0);
        expect(game.score()).toEqual(0);
    });

    it('should handle all ones', function () {
        throwMany(20, 1);
        expect(game.score()).toEqual(20);
    });

    it('should handle one spare', function () {
        throwSpare();
        game.throw(3);
        throwMany(17, 0);
        expect(game.score()).toEqual(16);
    });

    it('should handle one strike', function () {
        throwStrike();
        game.throw(3);
        game.throw(4);
        throwMany(16, 0);
        expect(game.score()).toEqual(24);
    });

    it('should handle a perfect game', function () {
        throwMany(12, 10);
        expect(game.score()).toEqual(300);
    });
});
