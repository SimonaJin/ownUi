<template>
  <div class="sidebar">
    <div class="sidebar__group" v-for="(group, index) in navList" :key="index">
      <div class="sidebar__title">{{ group.title }}</div>
      <div
        class="sidebar__item"
        v-for="(item, groupIndex) in group.items"
        :key="groupIndex"
      >
        <sidebar-link :item="item" :base="base"></sidebar-link>
      </div>
    </div>
  </div>
</template>
<script>
import sidebarLink from "./sidebarLink";
export default {
  name: "yqSidebar",
  components: { sidebarLink },
  props: {
    navList: Array,
  },
  data() {
    return {base:''};
  },
  created() {
  },
};
</script>
<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 0;
  z-index: 1;
  min-width: 220px;
  max-width: 220px;
  padding: 24px 0 72px;
  overflow-y: scroll;
  background-color: #fff;
  box-shadow: 0 8px 12px #ebedf0;
  .sidebar__group {
    margin-bottom: 16px;
    .sidebar__title {
      padding: 8px 0 8px 30px;
      color: #455a64;
      font-weight: 600;
      font-size: 15px;
      line-height: 28px;
      text-align: left;
    }
    .sidebar__item {
      a {
        display: block;
        margin: 0;
        padding: 8px 0 8px 30px;
        color: #333;
        font-size: 14px;
        line-height: 28px;
        -webkit-transition: color 0.2s;
        transition: color 0.2s;
        text-align: left;
      }
      .router-link-active,
      a:hover {
        color: #02c497;
      }
    }
  }
}
.sidebar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: transparent;
}
.sidebar::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.13);
  border-radius: 6px;
}
</style>