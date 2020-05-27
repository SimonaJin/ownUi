<template>
    <div>
        <h3>ui组件</h3>
        <p>form表单</p>
        <yq-form :rules="rules" :model="yqForm" ref="yqForm">
            <yq-form-item label="用户名" prop="username">
                <yq-form-input v-model="yqForm.username" placeholder="请输入用户名"></yq-form-input>
            </yq-form-item>
            <yq-form-item label="密码" prop="password">
                <yq-form-input v-model="yqForm.password" type="number"  placeholder="请输入密码"></yq-form-input>
            </yq-form-item>
            <yq-form-item class="noborBotton">
                <button @click="submitForm('yqForm')">提交表单</button>
            </yq-form-item>
        </yq-form>

        <div class="line"></div>

    </div>
</template>
<script>
import YqForm from 'components/yqForm/yqForm'
import YqFormItem from 'components/yqForm/yqForm-item'
import YqFormInput from 'components/yqForm/yqForm-input'
export default {
    name:'Test',
    components:{
        YqForm,YqFormItem,YqFormInput
    },
    data(){
        return{
            yqForm:{
                username:'',
                password:''
            },
            rules:{
                username:[
                    { required: true, message: "请输入用户名" },
                    { min: 3, max: 5, message: "长度在 3 到 5 个字符" }
                ],
                password:[
                    { required: true, message: "请输入密码"}
                ]
            }
        }
    },
    methods: {
        submitForm(formName){
            this.$refs[formName].validate(valid => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
            }
        })
    }
    },
    
};
</script>
<style lang="stylus">
h3{
    margin 0px
    padding 5px
    background-color #E0E0E0
}
.line{
    
}
</style>