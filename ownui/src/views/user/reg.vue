<template>
    <div>
        <h3>欢迎注册</h3>
        <div style="height:2000px;margin-top:500px">
        <yq-form :rules="rules" :model="yqForm" ref="yqForm">
                    <yq-form-item label="邮箱" prop="username">
                        <yq-form-input v-model="yqForm.username" placeholder="请输入正确邮箱"></yq-form-input>
                    </yq-form-item>
                    <yq-form-item label="确认密码" prop="password">
                        <yq-form-input v-model="yqForm.password" placeholder="请输入密码"></yq-form-input>
                    </yq-form-item>
                    <yq-form-item label="密码" prop="checkPass">
                        <yq-form-input v-model="yqForm.checkPass" placeholder="请再次输入密码"></yq-form-input>
                    </yq-form-item>
                    <yq-form-item class="noborBotton">
                        <button @click="submitForm('yqForm')">注册</button>
                        <button>重置</button>
                    </yq-form-item>
                </yq-form>
        </div>

        <div class="line"></div>

    </div>
</template>
<script>
import YqForm from 'components/yqForm/yqForm'
import YqFormItem from 'components/yqForm/yqForm-item'
import YqFormInput from 'components/yqForm/yqForm-input'
export default {
    name:'reg',
    components:{
        YqForm,YqFormItem,YqFormInput
    },
    data(){
        var checkEmail = (rule,value,callback) =>{
            if (!value) {
                return callback(new Error('邮箱不能为空'));
            }
        }
        return{
            yqForm:{
                username:'',
                password:'',
                checkPass:''
            },
            rules:{
                username:[
                     { required: true, message: "请输入邮箱"},
                    // { validate: checkEmail, trigger: "blur" }
                ],
                password:[
                    { required: true, message: "请输入密码"}
                ],
                checkPass:[
                    { required: true, message: "请输入密码"}
                ]
            }
        }
    },
    methods: {
        submitForm(formName){
            this.$refs[formName].validate(valid => {
                if (valid) {
                    let options = {
                        text:'测试短的',
                        duration:4000
                    }
                    let msg='注册注册注册注册注册注册注册注册注册注册注册注册注册注册注册注册注册注册注册注册注册'
                    this.$alert.warning(msg,function(){
                        console.log(123)
                    })
                } else {
                    //this.$alert.warning("error submit!!")
                    console.log("error submit!!");
                    return false;
            }
        })
    }
    },
    
};
</script>
<style scoped>
h3{
    margin: 0px;
    padding: 5px;
    background-color: #E0E0E0
}
</style>