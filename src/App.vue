<template>
  <div id="app">
    <!-- <img src="./assets/snow.png"/> -->
    <el-switch
      v-model="showSnow"
      active-text="ON"
      inactive-text="OFF">
    </el-switch>
  </div>
</template>
<script>
const $ = require('jquery')
const Snow = require('./plugins/snow')
export default {
  name: 'app',
  data () {
    return {
      showSnow: true
    }
  },
  mounted () {
    $('#app').append(new Snow().imgTag)
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
  background-color: rgba(0, 0, 0, 0.1);
  /* margin-top: 60px; */
}
</style>
