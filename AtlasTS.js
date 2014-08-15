var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
function AtlasTS() {
    for (var key in AtlasTS) {
        if (AtlasTS.hasOwnProperty(key)) {
            window[key] = AtlasTS[key];
        }
    }
}

var AtlasTS;
(function (AtlasTS) {
    var AtlasOriginal = Atlas;

    var UtilProto = AtlasOriginal.Util.prototype;

    var AtlasClass = (function () {
        function AtlasClass() {
        }
        AtlasClass.prototype.inherit = function () {
        };
        return AtlasClass;
    })();
    AtlasTS.AtlasClass = AtlasClass;

    var Util = (function (_super) {
        __extends(Util, _super);
        function Util() {
            _super.call(this);
            this.isMobile = UtilProto.isMobile;
            this.orientation = UtilProto.orientation;
            this.initialize = UtilProto.initialize;
            this.tween = UtilProto.tween;
            this.isQueEmpty = UtilProto.isQueEmpty;
            this._refresh = UtilProto._refresh;
            this.moveTo = UtilProto.moveTo;
            this.useEvent = UtilProto.useEvent;
            this.initialize.apply(this, arguments);
        }
        return Util;
    })(AtlasClass);
    AtlasTS.Util = Util;

    var AppProto = AtlasOriginal.App.prototype;
    var App = (function (_super) {
        __extends(App, _super);
        function App(place) {
            _super.call(this);
            this.initialize = AppProto.initialize;
            this.getCanvasURL = AppProto.getCanvasURL;
            this.getCanvasImage = AppProto.getCanvasImage;
            this.colorToAlpha = AppProto.colorToAlpha;
            this.addChild = AppProto.addChild;
            this.addChildren = AppProto.addChildren;
            this.centerize = AppProto.centerize;
            this.fitWindow = AppProto.fitWindow;
            this.setQuality = AppProto.setQuality;
            this.setSize = AppProto.setSize;
            this.getQuality = AppProto.getQuality;
            this.loadingScene = AppProto.loadingScene;
            this._preLoadEnterFrame = AppProto._preLoadEnterFrame;
            this._enterFrame = AppProto._enterFrame;
            this.pushScene = AppProto.pushScene;
            this.setColor = AppProto.setColor;
            this.setImage = AppProto.setImage;
            this.start = AppProto.start;
            this.toDataURL = AppProto.toDataURL;
            this.load = AppProto.load;
            this.initialize(place);
        }
        return App;
    })(Util);
    AtlasTS.App = App;

    var ThingProto = AtlasOriginal.Thing.prototype;
    var Thing = (function (_super) {
        __extends(Thing, _super);
        function Thing() {
            _super.call(this);
            this.initialize = ThingProto.initialize;
            this.initialize();
        }
        return Thing;
    })(Util);
    AtlasTS.Thing = Thing;

    var GroupProto = AtlasOriginal.Group.prototype;
    var Group = (function (_super) {
        __extends(Group, _super);
        function Group() {
            _super.call(this);
            this.initialize = GroupProto.initialize;
            this.initialize();
        }
        return Group;
    })(Thing);
    AtlasTS.Group = Group;

    var SceneProto = AtlasOriginal.Scene.prototype;
    var Scene = (function (_super) {
        __extends(Scene, _super);
        function Scene() {
            _super.call(this);
            this.initialize = SceneProto.initialize;
            this._enterFrame = SceneProto._enterFrame;
            this.initialize();
        }
        return Scene;
    })(Group);
    AtlasTS.Scene = Scene;
})(AtlasTS || (AtlasTS = {}));
