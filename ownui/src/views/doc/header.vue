<template>
  <header>
    <!-- logo -->
    <div class="header_logo">
      <img :src="headerConfig.logo" alt="" />
      <span>{{headerConfig.title}}</span>
    </div>
    <!-- 搜索 -->
    <div class="header_search">
      <input type="text" placeholder="搜索文档..." />
    </div>
    <!--git地址 切换中英文 -->
    <ul class="header_top-nav">
      <li class="header_top-nav-item">
        <a href=""><img src="../../assets/github.png" alt="" /></a>
      </li>
      <li class="header_top-nav-item"><a href="" class="language">En</a></li>
    </ul>
  </header>
</template>
<script>
export default {
	name: "yqHeader",
	props:{
		headerConfig:Object
	},
	mounted(){
	}
};
</script>
<style lang="scss" scoped>
header {
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  position: relative;
  z-index: 10;
  max-width: 100%;
  height: 60px;
  padding: 0 30px;
  line-height: 60px;
  display: flex;
  align-items: center;
  .header_logo {
    line-height: 60px;
    img {
      margin-right: 10px;
      width: 70px;
      display: inline-block;
      vertical-align: middle;
    }
    span {
      display: inline-block;
      color: #333;
      font-size: 20px;
      font-weight: border;
    }
  }
  .header_search {
    margin-left: 10%;
    input {
      width: 200px;
      height: 60px;
      color: #666;
    }
    input::placeholder {
      color: #999;
    }
  }
  .header_top-nav {
    flex: 1;
    font-size: 0;
    text-align: right;
    > li {
      position: relative;
      display: inline-block;
      vertical-align: middle;
    }
    .header_top-nav-item {
      margin-left: 20px;
      img {
        width: 32px;
        height: 32px;
        display: block;
      }
      .language {
        display: block;
        padding: 0 12px;
        color: #02c497;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        border: 1px solid #02c497;
        border-radius: 20px;
        cursor: pointer;
        -webkit-transition: 0.3s ease-in-out;
        transition: 0.3s ease-in-out;
      }
    }
  }
}
</style>