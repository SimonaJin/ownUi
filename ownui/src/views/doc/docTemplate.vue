<template>
  <div class="pageWrapper">
    <!-- 头部 -->
    <yq-header :headerConfig="headerConfig"></yq-header>
    <!-- 左 侧边栏 -->
    <yq-sidebar :navList="navList"></yq-sidebar>
    <!-- 中间 md 文档说明-->
    <yq-content>
      <slot></slot>
    </yq-content>
    <!-- 右侧组件展示 -->
    <yq-iframe :iframeSrc="iframeSrc"></yq-iframe>
  </div>
</template>
<script>
import yqHeader from "./header";
import yqSidebar from "./sidebar";
import yqContent from "./content";
import yqIframe from "./iframeCont";
export default {
  name: "docTemplate",
  components: { yqHeader, yqSidebar, yqContent, yqIframe },
  props: {
		config: Object,
		iframeSrc: String
  },
  computed: {},
  data() {
    return {
      navList: [],
      headerConfig: {},
    };
  },
  created() {
    this.navList = this.config.nav;
    let { title, logo, description } = this.config;
		this.headerConfig = { title, logo, description };
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
