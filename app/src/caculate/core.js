import {Rect} from './rect'
class core{

    //cut a rectrangle from x,y and ,with,height
    //
    static moveToRect(targetarr,newer){

        
        let target=targetarr[0];
        
        let targetCenter=target.center;
        let newerCenter=newer.center;
        //console.log(target.center);
        let disx=targetCenter.x-newerCenter.x;
        let disy=targetCenter.y-newerCenter.y;
       
        let temprect=null;
        
        temprect=newer.clone();
        while(1)
        {
            let fp=findTheFistAttachRect();
            let fp2=findTheFistAttachRect();
            if(fp==fp2) break;
        }
        
        //while(findTheFistAttachRect()!=fp)
       // {
        //    fp=findTheFistAttachRect();
       // }
        //找到第一个a 
        function findTheFistAttachRect(dp){
            temprect=newer.clone();
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
                    //console.log(Rect.checkIsAttach(targetarr[i],temprect),i);
                    if(dp && targetarr[i]==dp) continue;
                    if(Rect.checkIsAttach(targetarr[i],temprect))
                    {
                        //console.log(i);
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
            return dp;
       
        }
        //二叉树轮训次数
        let cumn=7;
        let isCatch=true;
        disx=disx>>1;
        disy=disy>>1;
        while(1)
        {
            cumn--;
            if(cumn<=0) break;
            temprect=newer.clone();
            temprect.x+=disx;
            temprect.y+=disy;
           
            //如果两个矩形相交
            //targetarr.wvwrt
            //if(Rect.checkIsAttach(target,rect))

            if(Rect.checkIsAttach(target,temprect))
            {
                disx=disx>>1;
                disy=disy>>1;
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