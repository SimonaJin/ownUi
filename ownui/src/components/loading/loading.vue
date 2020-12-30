<template>
  <div class="yq-loading" v-show="show" id="loadingBox">
    <yq-spinner :type="spinnerType" color="#ffffff" size="30"></yq-spinner>
    <p v-if="text">{{ text }}</p>
    <div class="mask"></div>
  </div>
</template>
<script>
export default {
  name: "loading",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    text: String,
    spinnerType: {
      type: String,
      default: "snake",
    },
  },
};
</script>
<style lang="scss" scoped>
</style>