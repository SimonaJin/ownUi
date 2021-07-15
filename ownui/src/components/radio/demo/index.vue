<template>
  <div>
    <demo-ui-section>
      <demo-ui-title>基础用法</demo-ui-title>
      <demo-ui-modules>
        <yq-radio-group v-model="radioData">
          <yq-radio name="1">男</yq-radio>
          <yq-radio name="0">女</yq-radio>
        </yq-radio-group>
      </demo-ui-modules>
    </demo-ui-section>
  </div>
</template>
<script>
import yqRadio from "../yqRadio.vue";
export default {
  components: { yqRadio },
  name: "demoButton",
  data() {
    return {
      radioData: 0,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
