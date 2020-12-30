<template>
  <div class="yq-spinner">
    <span
      :class="`yq-spinner-${type}`"
      :style="{
        borderTopColor: color,
        borderBottomColor: color,
        borderLeftColor: color,
        width: size + 'px',
        height: size + 'px',
      }"
    ></span>
  </div>
</template>
<script>
import { loadingType } from "js/ui/config.js";
export default {
  name: "yqSpinner",
  props: {
    type: {
      default: loadingType.snake,
      type: String,
    },
    color: {
      default: "#02C497",
      type: String,
    },
    size: {
      default: "36",
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
</style>