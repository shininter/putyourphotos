import {Rect} from './rect'
class core{


    static moveToRect(targetarr,newer){

        
        let target=targetarr[0];
        
        let targetCenter=target.center;
        let newerCenter=newer.center;
       
        let disx=targetCenter.x-newerCenter.x;
        let disy=targetCenter.y-newerCenter.y;
      
        while(1)
        {
            let fp=findTheFistAttachRect();
            let fp2=findTheFistAttachRect();
            if(fp==fp2) break;
        }
      
        //找到第一个a 
        function findTheFistAttachRect(){
            let temprect=newer.clone();
            let mmx=disx/100;
            let mmy=disy/100;
            let num=100;
            while(1)
            {   
                //break;
                temprect.x+=mmx;
                temprect.y+=mmy;
                let isca=false;
                for(var i=targetarr.length-1;i>=0;i--)
                {
                   
                    if(Rect.checkIsAttach(targetarr[i],temprect))
                    {
                        if(targetarr[i]==newer) continue
                        target=targetarr[i];
                        targetCenter=target.center;
                        disx=targetCenter.x-newerCenter.x;
                        disy=targetCenter.y-newerCenter.y;
                        isca=true;
                        return target;
                        break;
                    }               
                }
                num--;
                if(num==0) break;
                
            }
            return targetarr[0];
       
        }
       
        let cumn=100;
        disx=disx>>1;
        disy=disy>>1;
        while(1)
        {
            cumn--;
            if(cumn<=0) break;
            let temprect=newer.clone();
            temprect.x+=disx;
            temprect.y+=disy;
            //如果两个矩形相交
            if(Rect.checkIsAttach(target,temprect))
            {
               
            }
            else{
                newer.x+=disx;
                newer.y+=disy;
                disx=disx>>1;
                disy=disy>>1;
            }
        }
        return newer;


    }


}
export {core}