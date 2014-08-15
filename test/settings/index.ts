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
    });

    it('load to not throw', () => {
        var fn = () => {
            game.load("chara.png");
        };

        except(fn).to.not.throw();
    });

    it('load to not throw', () => {
        var fn = () => {
            game.load(["chara.png", "chara"]);
        };

        except(fn).to.not.throw();
    });
});

declare var mochaPhantomJS: any;
mochaPhantomJS.run();