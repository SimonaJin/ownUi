<template>
  <div class="yq-form-input">
    <!--  @blur="handleInptu" -->
    <input
      v-if="type !== 'textarea'"
      :type="type"
      :placeholder="placeholder"
      :readonly="readonly"
      :maxlength="maxlength"
      :minlength="minlength"
      :value="value"
      @input="handleInptu"
      @click="handleClick"
    />

    <!-- 文本框 -->
    <textarea
      v-else
      class="yq-form-textarea"
      @input="handleInptu"
      :value="value"
      :maxlength="maxlength"
      :minlength="minlength"
      :placeholder="placeholder"
      @click="handleClick"
    >
    </textarea>
  </div>
</template>
<script>
export default {
  name: "yqFormInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    maxlength: {
      type: String
    },
    minlength: {
      type: String
    },
    readonly: {
      type: Boolean,
      default: false
    },
    value: String
  },
  data() {
    return {
      result: ""
    };
  },
  methods: {
    handleInptu(e) {
      //双向绑定数据
      let data = e.target.value;
      let newData = data;
      if (this.type === "number" && this.maxlength) {
        if (data.length > Number(this.maxlength)) {
          newData = data.substr(0, this.maxlength);
        }
      }
      e.target.value = newData;
      this.$emit("input", e.target.value);

      // 校验 $parent指向不明确 广播上一层需要更改
      this.$dispath("yqFormItem", "validate");
    },
    handleClick(event) {
      this.$emit("click", event);
    }
  }
};
</script>
<style lang="scss"></style>
