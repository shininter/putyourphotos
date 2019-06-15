class Position {
    constructor(x,y){
        this._x=x || 0;
        this._y=y || 0;
    }
    set x(val){
        this._x=val;
    }
    set y(val){
        this._y=val;
    }
    get x(){
        return this._x;
    }
    get y(){
        return this._y;
    }
    static getDistace(p1,p2){
        return Math.sqrt((p1.x-p2.x)*(p1.x-p2.x)+(p1.y-p2.y)*(p1.y-p2.y));
    }
}
export {Position}