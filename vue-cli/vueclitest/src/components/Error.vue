<template>
 <div>
    <h2>{{msg}}</h2>
    页面不存在
</div>
</template>
<script>
export default {
  name: 'error',
  data () {
    return {
      msg: ' I am 404 error'
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