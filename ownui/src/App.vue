<template>
  <div id="app">
    <ul id="nav">
      <router-link to="/" tag="li" active-class="active" exact>Home</router-link> |
      <router-link to="/test" tag="li" active-class="active">Test</router-link>
    </ul>
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
