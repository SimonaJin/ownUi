<template>
  <div>
    <h3>拖拽测试</h3>
    <p>
      拖拽的基本原理就是根据鼠标的移动来移动被拖拽的元素。鼠标的移动也就是x、y坐标的变化；
      元素的移动就是style.position的top和left的改变。
      当然，并不是任何时候移动鼠标都要造成元素的移动，
      而应该判断鼠标左键的状态是否为按下状态，是否是在可拖拽的元素上按下的。
    </p>
    <p>
      设置物体拖拽，那么必须使用三个事件，并且这三个事件的使用顺序不能颠倒。
    </p>
    <p>1.onmousedown：鼠标按下事件</p>
    <p>2.onmousemove:鼠标移动事件</p>
    <p>3.onmouseup:鼠标抬起事件</p>
    <div
      class="drag"
      style="left:0;top:0;width:100px;height:100px;"
      @mousedown="handleDrag"
    >
      按住拖动
    </div>
  </div>
</template>
<script>
export default {
  name: "drag",
  data() {
    return {
      dragDom: null,
      isDown: false
    };
  },
  mounted() {
    //1.获取dom元素
    this.dragDom = document.getElementsByClassName("drag")[0];

    //2. 绑定鼠标按下
    //this.dragDom.addEventListener("mousedown", this.handleDrag, false);
    //6. 监听全局mouseup
    document.addEventListener("mouseup", this.handelMouseUp, false);
  },
  beforeDestroy() {
    document.removeEventListener("mouseup");
  },
  methods: {
    // 鼠标按下事件 处理程序
    handleDrag(event) {
      //3. 获取x,y坐标
      let dragDom = this.dragDom;
      dragDom.style.cursor = "pointer"; //设置鼠标样式

      let offsetX = parseInt(dragDom.style.left); // 获取当前的x轴距离
      let offsetY = parseInt(dragDom.style.top); // 获取当前的y轴距离
      let innerX = event.clientX - offsetX; // 获取鼠标在方块内的x轴距
      let innerY = event.clientY - offsetY; // 获取鼠标在方块内的y轴距
      //开关打开
      this.isDown = true;
      // 按住鼠标时为div添加一个border
      dragDom.style.borderStyle = "solid";
      dragDom.style.borderColor = "red";
      dragDom.style.borderWidth = "3px";
      // 4.鼠标移动的时候不停的修改div的left和top值
      document.onmousemove = function(evl) {
        if (this.isDown == false) {
          return;
        }

        dragDom.style.left = evl.clientX - innerX + "px";
        dragDom.style.top = evl.clientY - innerY + "px";

        let divLeft = parseInt(dragDom.style.left);
        let divTop = parseInt(dragDom.style.top);
        let divWidth = parseInt(dragDom.style.width);
        let divHeight = parseInt(dragDom.style.height);

        // 边界判断
        if (divLeft <= 0) {
          dragDom.style.left = "0px";
        }
        if (divTop <= 0) {
          dragDom.style.top = "0px";
        }
        if (divLeft >= window.innerWidth - divWidth) {
          dragDom.style.left = window.innerWidth - divWidth + "px";
        }
        if (divTop >= window.innerHeight - divHeight) {
          dragDom.style.top = window.innerHeight - divHeight + "px";
        }
      };
      // 5.鼠标抬起时，清除绑定在文档上的mousemove和mouseup事件
      // 否则鼠标抬起后还可以继续拖拽方块
      dragDom.onmouseup = this.handelMouseUp;
    },
    // 鼠标放开事件 处理程序
    handelMouseUp() {
      this.isDown = false;
      document.onmousemove = null;
      document.onmouseup = null;
      // 清除border
      this.dragDom.style.borderStyle = "";
      this.dragDom.style.borderColor = "";
      this.dragDom.style.borderWidth = "";
    }
  }
};
</script>
<style lang="stylus" scoped>
.drag{
    width:100px;
    height:100px;
    background-color:gray;
    position:absolute;
}
</style>
