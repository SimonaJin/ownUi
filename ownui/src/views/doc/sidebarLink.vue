<template>
  <router-link
    v-if="item.path"
    :class="{ active }"
    :to="path"
    v-html="itemName"
  />
</template>
<script>
export default {
  name: "",
  props: {
    item: Object,
  },
  computed: {
    itemName() {
      const name = (this.item.title || this.item.name).split(" ");
      return `${name[0]} <span>${name.slice(1).join(" ")}</span>`;
    },
    path() {
      return `${this.item.path}`;
    },
    active() {
      if (this.$route.path === this.path) {
        return true;
      }
      if (this.item.path === "home") {
        return this.$route.path === this.base;
      }

      return false;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>