<template>
  <div>
    home
    <p>小明年龄{{$store.state.age}}</p>
    <p>小王年龄{{$store.getters.getAge}}</p>
    <button @click="$store.commit('changeAge', 5)">同步更新</button>
    <button @click="$store.dispatch('changeAge', 5)">异步更新</button>
    <!-- <ul>
      <li  v-for="(item,index) in sliders" :key="index"><img :src="item" alt=""></li>
    </ul> -->
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex';
import * as types from '../store/actions-types'
export default {
  name:'Home',
  components:{},
  computed: {
    //...mapState(['sliders'])
  },
  data() {
    return {
      now: new Date() //返回的默认值 必须是一个函数类型 {} []
    };
  },
  mounted() { 
    // if(!this.sliders.length){
    //   this[types.SET_SLIDERS]();
    // }
  },
  methods: {
    //...mapActions([types.SET_SLIDERS])
  }

};
</script>
<style lang="stylus">
</style>