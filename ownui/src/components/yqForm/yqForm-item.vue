<template>
  <div class="yq-form-item">
    <div class="item-box">
      <label v-if="label">{{ label }}</label>
      <slot></slot>
    </div>
    <p v-if="errorMsg">{{ errorMsg }}</p>
  </div>
</template>
<script>
import Schema from "async-validator";
export default {
  name: "yqFormItem",
  inject: ["yqForm"],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: String
  },
  data() {
    return {
      errorMsg: null
    };
  },
  mounted() {
    this.$on("validate", function() {
      this.validate();
    });
  },
  methods: {
    // 校验
    validate() {
      if (this.prop) {
        //获取验证
        let value = this.yqForm.model[this.prop];
        let rules = this.yqForm.rules[this.prop];
        // 普通验证
        let schema = new Schema({
          [this.prop]: rules // username:rule
        });
        return schema.validate({ [this.prop]: value }, (err, res) => {
          if (err) {
            //验证失败，错误是所有错误的数组
            //字段是由字段名称键入的对象，数组为
            this.errorMsg = err[0].message;
          } else {
            this.errorMsg = null;
          }
        });
      }
    }
  }
};
</script>
<style lang="scss"></style>
