<template>
  <div>
    <h3>表单</h3>
    <yq-form :rules="rules" :model="yqForm" ref="yqForm">
      <yq-form-item label="用户名" prop="username">
        <!--@click="test"  :readonly="isReadonly"-->
        <yq-form-input
          v-model="yqForm.username"
          placeholder="请输入用户名"
        ></yq-form-input>
      </yq-form-item>
      <yq-form-item label="手机号" prop="password">
        <yq-form-input
          v-model="yqForm.password"
          type="number"
          placeholder="请输入密码"
          maxlength="11"
        ></yq-form-input>
      </yq-form-item>
      <yq-form-item label="文本框" prop="text">
        <yq-form-input
          v-model="yqForm.text"
          type="textarea"
          placeholder="请输入密码"
        ></yq-form-input>
      </yq-form-item>
      <yq-form-item class="noborBotton">
        <yq-button @click="submitForm('yqForm')" type="primary" plain icon="account">提交表单</yq-button>
      </yq-form-item>
    </yq-form>
		<h3>button</h3>
			<yq-button type="warning" size="normal" @click="handleAlert">drange 点击alert组件</yq-button>
			<yq-button type="drange" size="small">small</yq-button>
			<yq-button type="defaults" size="mini" plain>mini</yq-button>
		<h3>badge</h3>
		<div class="ovHidden">
		<div class="badgeBox">
				<yq-badge badge="9"></yq-badge>	
			</div>
			<div class="badgeBox">
				<yq-badge badge="99+"></yq-badge>
			</div>
		</div>
	
		<h3>icon</h3>
			<yq-icon name="set"></yq-icon>
			<yq-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png"></yq-icon>
			<yq-icon name="edit" color="02C497" size="3rem"></yq-icon>
			<yq-icon name="comments" color="02C497" badge="99+"></yq-icon>
		<h3>tab切换</h3>
    <div>
      <tab-nav :currIndex="currIndex" type="default">
        <tab-Cont title="标签 1">内容1</tab-Cont></tab-Cont>
				<tab-Cont title="标签 2" disabled>内容2</tab-Cont>
				<tab-Cont title="标签 3">内容3</tab-Cont>
      </tab-nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  computed: {},
  data() {
    var validatePass = (rule, value, callback) => {
      let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(value)) {
        callback(new Error("请输入合法的手机号码"));
      } else {
        callback();
      }
    };
    return {
      currIndex: "0",
      isReadonly: true,
      yqForm: {
        username: "",
        password: "",
        text: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符" },
        ],
        password: [
          { required: true, message: "请输入手机号码" },
          { validator: validatePass, trigger: "blur" },
        ],
        text: [{ required: true, message: "请输入文本内容" }],
      },
    };
  },
  mounted() {},
  methods: {
    //表单提交
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
			
        if (valid) {
					let self = this
					this.$loading.open({text:'加载中'});
					setTimeout(()=>{
						self.$loading.close()
					},2000)
        } else {
          console.log("error submit!!");
        }
      });
    },
    test(){
      this.$alert.danger("form");
    },
    //alert
    handleAlert() {

      this.$alert.warning("alert");
    },
  },
};
</script>
<style lang="scss" scoped>
h3{
	margin: 12px 0;
	}
.badgeBox{
	position: relative;
	width: 50px;
	height: 50px;
	background:#ccc;
	float: left;
	margin-right: 10px;
	margin-top: 10px;
	}
.ovHidden{
	overflow: hidden;
}
</style>
