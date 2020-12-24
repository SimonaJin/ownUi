<template>
  <i
    :class="[
      'yq-iconFont',
      imgShow ? 'yq-icon' : `yq-icon yq-icon-${iconName}`,
    ]"
    :style="{ color: '#' + color, fontSize: size }"
  >
    <img :src="iconName" alt="" v-if="imgShow" />
    <yq-badge :badge="badge" v-if="badge"></yq-badge>
  </i>
</template>
<script>
export default {
  name: "icon",
  props: {
    name: String,
    dot: Boolean, //小红点
    color: {
      type: String,
      default: "363838",
    },
    size: {
      type: String,
      default: "2rem",
    },
    badge: String,
  },
  data() {
    return {
      iconName: "",
      imgShow: false,
    };
  },
  created() {
    // 地址正则判断
    let reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/g;
    if (reg.test(this.name)) {
      this.imgShow = true;
    } else {
      this.imgShow = false;
    }
    this.iconName = this.name;
  },
};
</script>
<style lang="scss">
</style>