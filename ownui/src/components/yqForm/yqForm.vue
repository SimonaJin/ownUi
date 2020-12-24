<template>
  <div class="yq-form">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "yqForm",
  props: {
    rules: {
      type: Object,
      default: () => ({}), // 保证数据不被共享和data一样
    },
    model: {
      type: Object,
      default: () => ({}), // 保证数据不被共享和data一样
    },
  },
  provide() {
    return {
      yqForm: this,
    };
  },
  data() {
    return {};
  },
  methods: {
    async validate(cb) {
      // 需要看一下内部的elformItem 是否都通过了校验
      // 获取所有的子组件
      let children = this.$broadcast("yqFormItem"); // 获取所有子元素
      try {
        await Promise.all(children.map((child) => child.validate()));
        cb(true);
      } catch (e) {
        console.log(e);
        cb(false);
      }
    },
  },
};
</script>
<style lang="stylus"></style>
