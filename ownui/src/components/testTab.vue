<template>
  <div class="own-tab">
    <div class="box">
      <li v-for="img in imgs" :key="img">
        <img alt v-lazy="img" />
      </li>
    </div>
  </div>
</template>
<script>
export default {
  name: "test",
  data() {
    return {
      imgs: []
    };
  },
  created() {
    //获取图片
    this.demo();
  },
  methods: {
    demo: async function() {
      try {
        let res = await this.getImg();
        this.imgs = res.data;
        console.log(this.imgs);
      } catch (e) {
        console.log("try", e);
      }
    },
    get() {
      return new Promise(function(resolve, reject) {
        axios
          .get("http://127.0.0.1:5500/api/img")
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
};
</script>
<style lang="stylus">
.tabNav {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid gtay;

  li {
    flex: 1;
    position: relative;

    &:after {
      content: '';
      width: 70%;
      height: 1px;
      background: gray;
      position: absolute;
      bottom: -5px;
      left: 50%;
      margin-left: -37%;
    }
  }

  li.selected {
    color: green;

    &:after {
      background: green;
    }
  }
}

.tabContent {
  width: 100%;
  overflow: hidden;

  > div {
    display: none;
  }

  div.selected {
    display: block;
  }
}
</style>
