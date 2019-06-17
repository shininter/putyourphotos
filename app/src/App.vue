<template>
  <div id="app">
     <shincatlogo></shincatlogo>
      <div v-for='(item,index) in rects' :style='item.style' class="rect"  :key='index'></div>
  </div>
</template>

<script>

import {Rect} from './caculate/rect'
import {StyleProxy} from './common/styleProxy'
import {ShinTimeLine,ShinTimeEvent} from 'shintimeline';
import {core} from './caculate/core'
import { setTimeout, setInterval, clearInterval } from 'timers';
import {TweenMax} from 'gsap';
import shincatlogo from './components/shincatlogo.vue';
export default {
  name: 'app',
  components: {
    
    shincatlogo
  },
  created() {



     

      ShinTimeLine.addEventListener('frame',this.handleframe,this);
      this.rectrender();
  },
  data(){
    return {
      recttemp:[],
      rects:[

      ],
    }
  },
  mounted() {
    
     let rect=new Rect(300,300,Math.random()*30+30,Math.random()*30+30);
      //存储样式对象
      this.rects.push(new StyleProxy(rect));
      //存储矩形对象
      this.recttemp.push(rect);
      let num=10;
      let interval = setInterval(()=>{
      num--;
      if(num<0) clearInterval(interval);
      this.addNewRect()},1500);
      
  },
  methods:{
    rectrender(){
      this.rects.forEach(element => {
          
          element.render();
          
      });
    },
    handleframe(e){
        this.rectrender();
    },
    addNewRect(){ 
       let a=Math.random()*Math.PI*2;
      let rect=new Rect(Math.cos(a)*500,Math.sin(a)*800,Math.random()*30+50,Math.random()*30+50);
      
      
      let mxx=rect.clone();
     
      core.moveToRect(this.recttemp,rect);
      TweenMax.from(rect,.5,{x:mxx.x,y:mxx.y});
      this.rects.push(new StyleProxy(rect));
      this.recttemp.push(rect);

    } 
  }
}
</script>

<style>
*{
  margin:0 0
}
html,body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #cccccc;
  width: 600px;
  height: 600px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  color: #ffffff;
  
}
.rect{
  position: absolute;
  top:0px;
  left: 0px;
  transition: all .5s;  
  border-width: 2px;
  border: #ffffff;
  border-style:solid;
  /*内边框*/
  box-sizing: border-box;
  box-shadow: 0 5px 5px rgba(125,125,125,0.8);
  
}
</style>
