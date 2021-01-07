<template>
  <div class="yq-doc-simulator">
    <iframe
      ref="iframe"
      :src="iframeUrl"
      :style="simulatorStyle"
      frameborder="0"
    />
  </div>
</template>
<script>
export default {
  name: "iframeCont",
  props: {
    iframeSrc: String,
  },
  data() {
    return {
      scrollTop: window.scrollY,
      windowHeight: window.innerHeight,
      iframeUrl: "",
      origin: window.location.origin,
    };
  },
  computed: {
    simulatorStyle() {
      const height = Math.min(640, this.windowHeight - 90);
      return {
        height: height + "px",
      };
    },
  },
  mounted() {
    this.iframeUrl = this.origin + "/#" + this.iframeSrc;
    window.addEventListener("resize", () => {
      this.windowHeight = window.innerHeight;
    });
  },
  watch: {
    iframeSrc(val) {
      this.iframeUrl = this.origin + "/#" + val;
    },
  },
};
</script>
<style lang="scss">
</style>