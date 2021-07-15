<template>
  <div class="pageWrapper">
    <!-- 头部 -->
    <yq-doc :config="config" :iframeSrc="iframeSrc">
      <router-view></router-view>
    </yq-doc>
  </div>
</template>
<script>
import yqDoc from "./doc/docTemplate";
import demoConfig from "@/config/demoConfig";
export default {
  name: "Home",
  components: { yqDoc },
  computed: {},
  data() {
    return {
      config: demoConfig.site,
      baseSrc: demoConfig.build.site.publicPath,
      iframeSrc: ""
    };
  },
  created() {
		console.log('demoConfig',this.baseSrc)
    this.iframeSrc = location.hash.replace(/#\/component/, this.baseSrc);
    console.log(this.iframeSrc);
  },
  watch: {
    "$route.path"(val) {
      this.iframeSrc = this.baseSrc + val;
      console.log(this.iframeSrc);
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.pageWrapper {
  width: 100%;
  overflow: hidden;
  height: 100vh;
  background: #fcfdfd;
}
</style>
