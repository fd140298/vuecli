import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Hi from '@/components/Hi';
import Hi3 from '@/components/Hi3';
import Hi4 from '@/components/Hi4';
import params from'@/components/params'; 
import Error from'@/components/Error';  
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
       path:"/params/:newId(\\d+)/:newTitle",
       component:params
      },{
      path:'/gohome',
      redirect:'/'
    },{
      path:'/goParams/:newId(\\d+)/:newTitle',
      redirect:'/params/:newId(\\d+)/:newTitle'
    },{
       path:'/Hi3',
       component:Hi3,
       alias:'/jspang'
    },{
       path:'*',
       component:Error
    }
    

   
    // {
    //   path:'/Hi',
    //   name:'Hi',
    //   component:Hi,
    //   children:[
    //       {path:"/",name:'hello/hi',component:Hi},
    //       {path:"Hi1",name:'hi1',component:Hi1},
    //       {path:"Hi2",name:'hi2',component:Hi2}
    //   ]
    // }
    
    
   ]
})
