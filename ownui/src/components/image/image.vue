<template>
  <div
    :class="['yq-Image', showRound ? 'yq-Image-Round' : '']"
    :style="{
      width: width + 'px',
      height: height + 'px',
      borderRadius: radius,
    }"
  >
    <img :src="src" alt="" :style="{ objectFit: fit }" />
    <!-- 提示 -->
    <div class="yq-image-loading" v-if="showLoading">
      <i class="yq-icon yq-icon-picture" v-if="isLoading"></i>
      <slot name="loading" v-else></slot>
    </div>
				<!-- 报错 -->
		<div class="yq-image-loading" v-if="showError">
      <i class="yq-icon yq-icon-pictureError" v-if="isError"></i>
      <slot name="error" v-else></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "yqImage",
  props: {
    src: String,
    width: {
      type: String,
      default: "100",
    },
    height: {
      type: String,
      default: "100",
    },
    fit: {
      type: String,
      default: "fill",
    },
    radius: String,
    showRound: Boolean,
    showError: Boolean,
    showLoading: Boolean,
  },
  data() {
    return {};
  },
  computed: {
    isLoading() {
      if (this.$slots.loading) {// 判断是否有插槽内容
        return false;
      } else {
        return true;
      }
		},
		isError(){
			if (this.$slots.error) {
        return false;
      } else {
        return true;
      }
		}
  },
  mounted() {
	
	},
};
</script>
<style lang="scss">
</style>