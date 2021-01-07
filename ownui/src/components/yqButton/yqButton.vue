<template>
  <button
    :class="[
      'yq-button',
      `yq-button-${type}`,
      `yq-button-${size}`,
      {
        'yq-button-plain': plain,
        'yq-button-disabled': disabled,
        'yq-button-icon': icon,
      },
    ]"
    :disabled="disabled"
    @click="hanleClickButton"
  >
    <span v-if="icon" :class="['yq-icon', `yq-icon-${icon}`]"></span>
    <span v-if="icon" class="button-text"><slot></slot></span>
    <slot v-else></slot>
  </button>
</template>
<script>
import { iconType, buttonSizeMap } from "js/ui/config.js";
export default {
  name: "yqButton",
  props: {
    type: {
      default: iconType.defaults,
      type: String,
    },
    size: {
      default: buttonSizeMap.large,
      type: String,
    },
    plain: {
      default: false,
      type: Boolean,
    },
    icon: String,
    disabled: Boolean,
  },
  methods: {
    hanleClickButton(event) {
      this.$emit("click", event);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>