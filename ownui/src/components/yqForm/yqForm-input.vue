<template>
<!--  @blur="handleInptu" -->
    <input :type="type" :placeholder="placeholder" 
    class="yq-form-input" :value="value" 
    @input="handleInptu"
    >
</template>
<script>

export default {
    name:'yqFormInput',
    props:{
        type:{
            type:String,
            default:'text'
        },
        placeholder:{
            type:String,
            default:'' 
        },
        value:''
    },
    methods: {
        handleInptu(e){
            //双向绑定数据
            this.$emit('input',e.target.value)
            // 校验 $parent指向不明确 广播上一层需要更改
            this.$dispath('yqFormItem','validate')
        }
    },
};
</script>
<style lang="scss">

</style>