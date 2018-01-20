<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/">Home</router-link>
    <router-link to="/params/198/jspang website is very good">params</router-link>        
    <router-link to="/gohome">goHome</router-link>
    <router-link to="/goParams/123/I like params">goParams</router-link>
    <router-link to="/Hi3">Hi3</router-link>
    <router-link to="/jspang">jspang</router-link>
    <div>
        <button @click="goback">后退</button>
        <button @click="Gogo">前进</button>
    </div>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
   
    
  </div>      
</template>
<script>
export default {
  name: 'app',
  methods:{
      goback(){
        this.$router.go(-1);
      },
      Gogo(){
        this.$router.go(1);
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
    opacity:0;
}
.fade-enter-active{
   transition:opacity .5s;
}
.fade-leave{
  opacity:0
}
.fade-leave-active{
    opacity:0;
    transition:opacity .5s;
}
</style>
