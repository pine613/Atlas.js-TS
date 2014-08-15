/// <reference path="../../AtlasTS.ts" />
/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />

var except = chai.expect;
mocha.setup('bdd');

describe('App', () => {
    var game: App;

    before(() => {
        AtlasTS();
        game = new App();
        game.start();
    });

    it('game is to be instance of App', () => {
        except(game).is.to.be.instanceOf(App);
    });
});

declare var mochaPhantomJS: any;
mochaPhantomJS.run();