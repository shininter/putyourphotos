import {Position} from './cutpos'
import {TweenMax} from 'gsap'
class Rect {
    constructor(x,y,w,h){

        this._x=x;
        this._y=y;
        this.width=w;
        this.height=h;
        
    }
    clone(){
        
        return new Rect(this.x,this.y,this.width,this.height);
    }
    set x(val)
    {
        //TweenMax.to(this,.5,{_x:val});
        this._x=val;
    }
    get x()
    {
        return this._x;
    }
    set y(val)
    {
        //TweenMax.to(this,.5,{_y:val});
        this._y=val;
    }
    get y(){
        return this._y;
    }
    set width(val)
    {
        this._width=val;
    }
    get width(){
        return this._width;
    }
    set height(val)
    {
        this._height=val;
    }
    get height(){
        return this._height;
    }
    get center(){
        let positions=this.positions;
        return new Position((positions[0].x+positions[3].x)/2,(positions[0].y+positions[3].y)/2);
    }
    get positions(){
        let p_topleft=new Position(this.x,this.y);
        let p_topright=new Position(this.x+this.width,this.y);
        let p_bottomleft=new Position(this.x,this.y+this.height);
        let p_bottomright=new Position(this.x+this.width,this.y+this.height);
        return [p_topleft,p_topright,p_bottomleft,p_bottomright];
    }
    //比较两个举行是否有重叠
    static checkIsAttach(rc1,rc2){
        
        let p1=rc1.center;
        let p2=rc2.center;
        let discenterx=Math.abs(p1.x-p2.x);
        let discentery=Math.abs(p1.y-p2.y);
        if(discenterx<=(rc1.width+rc2.width)/2 
            && 
        discentery <= (rc1.height+rc2.height)/2)
        {
            return true;
        }
        return false;
    }
    
}
export {Rect}