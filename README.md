# putyourphotos
putyour photos（rectangle）  at will  but not hit with each other;

#### by using this demo
#### you will get a group of rectangle  which structed as x,y,width,height 
#### such as 
```
[{x:0,y:0,width:1000,heigh:100},
{x:11,y:23,width:1000,heigh:100},
{x:33,y:12,width:1000,heigh:100}]
```
### how to use it?
in this demo case

```javascript

import {Rect} from './caculate/rect'
import {core} from './caculate/core'

//created a rectangle first
let rects=[];
let rect=new Rect(300,300,Math.random()*30+50,Math.random()*30+50);
rects.push(rect);

//put other rectangles with all property reandom
for(let i =0;i<10;i++)
{
  let nrect=new Rect(Math.cos(a)*600,Math.sin(a)*600,Math.random()*30+50,Math.random()*30+50);
  core.moveToRect(rects,nrect);
  rects.push(nrect);
}

console.log(rects);
//then you will get a array ,width every element in this array,
//by using them,you can layout you div by the struct of every element
rects.forEach((item)=>{
  let div=document.createElement('div');
  div.style.position='absolute';
  div.style.left=item.x+'px';
  div.style.top=item.y+"px";
  div.style.width=item.width+"px";
  div.style.height=item.height+"px";
  div.style.background="#F00";
  document.appendChild(div)
})
```
so you can build a view like somthing below


they are departed at will..and will never hit each other~

![Image text](https://mmbiz.qpic.cn/mmbiz_png/IKwTcRr68JCEgnJQw9EFCqdcZUlq5e0BTAIuic66FNo8DqLaacicbv8ZjMZP1PWiaTxxoqp7mP1icUPQziakiavzV3dA/0?wx_fmt=png)

and then you could put your photos in every rectangle of them~

