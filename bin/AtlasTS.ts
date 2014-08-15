declare var Atlas: any;

function AtlasTS(): void {
    for (var key in AtlasTS) {
        if (AtlasTS.hasOwnProperty(key)) {
            window[key] = AtlasTS[key];
        }
    }
}

module AtlasTS {
    var AtlasOriginal: any = Atlas;

    var UtilProto: Util<any> = AtlasOriginal.Util.prototype;

    export interface Quality {
        width: number;
        height: number;
    }

    export class AtlasClass {
        inherit(): void { }
    }

    export class Util<T> extends AtlasClass {
        isMobile: boolean = UtilProto.isMobile;
        orientation: string = UtilProto.orientation;

        constructor() {
            super();
            this.initialize.apply(this, arguments);
        }

        initialize: () => void = UtilProto.initialize;
        tween: () => void = UtilProto.tween;
        isQueEmpty: () => boolean = UtilProto.isQueEmpty;
        private _refresh: () => void = UtilProto._refresh;
        moveTo: (x: number, y: number, frame: number) => T = UtilProto.moveTo;

        useEvent: () => void = UtilProto.useEvent;
        
        
    }

    var AppProto: App<any> = AtlasOriginal.App.prototype;
    export class App<T> extends Util<T> {
        constructor(place?: string) {
            super();
            this.initialize(place);
        }

        initialize: (place?: string) => void = AppProto.initialize;
        getCanvasURL: () => string = AppProto.getCanvasURL;
        getCanvasImage: () => string = AppProto.getCanvasImage;
        colorToAlpha: (imageName: string, hex: string) => void = AppProto.colorToAlpha;
        addChild: (child) => void = AppProto.addChild;
        addChildren: (...children) => void = AppProto.addChildren;
        centerize: () => void = AppProto.centerize;
        fitWindow: () => void = AppProto.fitWindow;
        setQuality: (width: number, height: number) => void = AppProto.setQuality;
        setSize: (width: number, height: number) => void = AppProto.setSize;
        getQuality: () => Quality = AppProto.getQuality;
        loadingScene: (scene: Scene<any>) => void = AppProto.loadingScene;
        private _preLoadEnterFrame: () => void = AppProto._preLoadEnterFrame;
        private _enterFrame: () => void = AppProto._enterFrame;
        pushScene: (scene: Scene<any>) => void = AppProto.pushScene;
        setColor: (color: string) => void = AppProto.setColor;
        setImage: (img: string) => void = AppProto.setImage;
        start: () => void = AppProto.start;
        toDataURL: () => string = AppProto.toDataURL;
        load: (...data: any[]) => void = AppProto.load;
    }

    var ThingProto: Group<any> = AtlasOriginal.Thing.prototype;
    export class Thing<T> extends Util<T> {
        constructor() {
            super();
            this.initialize();
        }

        initialize: () => void = ThingProto.initialize;
    }

    var GroupProto: Group<any> = AtlasOriginal.Group.prototype;
    export class Group<T> extends Thing<T> {
        constructor() {
            super();
            this.initialize();
        }

        initialize: () => void = GroupProto.initialize;
    }

    var SceneProto: Scene<any> = AtlasOriginal.Scene.prototype;
    export class Scene<T> extends Group<T> {
        constructor() {
            super();
            this.initialize();
        }

        initialize: () => void = SceneProto.initialize;
        private _enterFrame: () => void = SceneProto._enterFrame;
    }

}

declare class App extends AtlasTS.App<App>{ }
declare class Scene extends AtlasTS.Scene<Scene>{ }