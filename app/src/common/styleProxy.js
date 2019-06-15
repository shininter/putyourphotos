class StyleProxy{
    constructor(rect){
        this.option=rect;
        let c=0x123123+Math.random()*0x123123>>0;
        c=c.toString(16);
        c=`#${c}`;
        
        this._style={
            background:c
        }
        this.render();
    }
    get style(){    
        
        return this._style;

    }
    get rect(){
        return this.option
    }
    render(){
        this._style.left=this.option.x+"px";
        this._style.top=this.option.y+"px";
        this._style.width=this.option.width+"px";
        this._style.height=this.option.height+"px";
        
    }
}
export {StyleProxy}