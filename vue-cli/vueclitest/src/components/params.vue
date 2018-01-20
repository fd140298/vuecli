<template>
  <div>
     <h2>{{msg}}</h2>
     <p>newId:{{$route.params.newId}}</p>
     <p>newTite:{{$route.params.newTitle}}</p>
 </div>
</template>
<script>    
   export default{
        name:'params',
        data(){
           return {
             msg:'params page!'
           } 
        },
        beforeRouteEnter:(to,from,next)=>{
           console.log('准备进入路由模块');
           next();
        },
        beforeRouteLeave:(to,from,next)=>{
          console.log('准备离开路由模块');
          next();
        }
    }
</script>