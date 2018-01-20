<template>
 <div>
    <h2>{{msg}}--{{$route.params.username}}--{{$route.params.id}}</h2>
    <router-view></router-view>
 </div>
</template>

<script>
export default {
  name: 'Hi1',
  data () {
    return {
      msg: ' I am hi1 page'
    }
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
