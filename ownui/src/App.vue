<template>
  <div id="app">
    <!-- <ul id="nav">
      <router-link to="/home" tag="li" active-class="active" exact> Home </router-link> |
      <router-link to="/test" tag="li">Test</router-link>
    </ul> -->
    <!-- 响应式图片适应 -->
    <!-- <img srcset="photo_w350.jpg 1x, photo_w640.jpg 2x" src="地址" alt=""> -->
    <router-view />
  </div>
</template>

<style lang="stylus">
ul{
  list-style:none
}
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav{
  display flex
  flex-direction row
  li{
    flex:1
  }
  li.active{
    color:red
  }
}
</style>
