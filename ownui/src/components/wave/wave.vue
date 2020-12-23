<template>
  <div class="canvas-box">
    <canvas id="canvas"></canvas>
  </div>
</template>
<script>
export default {
  name: "wave",
  data() {
    return {
      step: 0
    };
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      //设置画布
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      //画布大小
      canvas.width = document.body.offsetWidth;
      canvas.height = 300;

      //星球圆
      // Draw a solid white circle.
      //context.arc(x,y,r,sAngle,eAngle,counterclockwise);
      //x	圆的中心的 x 坐标。
      // y	圆的中心的 y 坐标。
      // r	圆的半径。
      // sAngle	起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）。
      // eAngle	结束角，以弧度计。
      // counterclockwise	可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针。
      ctx.save(); //用来保存Canvas的状态
      ctx.beginPath(); //beginPath() 方法开始一条路径，或重置当前的路径
      ctx.arc(canvas.width / 2, 100, 80, 0, Math.PI * 2, false);
      ctx.closePath();
      ctx.fillStyle = "#002043";
      ctx.fill();
      ctx.restore(); //恢复最近一近的画布保存状态

      // 星球圆 draw inner shadow
      ctx.save();
      //globalCompositeOperation 属性设置或返回如何将一个源（新的）图像绘制到目标（已有的）的图像上。
      // 源图像 = 您打算放置到画布上的绘图。
      // 目标图像 = 您已经放置在画布上的绘图。
      //source-atop在目标图像顶部显示源图像。源图像位于目标图像之外的部分是不可见的
      ctx.globalCompositeOperation = "source-atop";
      ctx.beginPath();
      ctx.arc(canvas.width / 2, 100, 81, 0, Math.PI * 2, false); // add 0.5 for anti-aliasing
      ctx.arc(canvas.width / 2, 100, 90, 0, Math.PI * 2, true);
      ctx.closePath(); //结束路径
      //绘制阴影
      ctx.shadowColor = "rgba(255, 255, 255, 0.9)";
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 15;
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.restore();

      //绘制星球外圈
      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = 4;
      //外围填充

      ctx.strokeStyle = "#99B0D2";
      // ctx.arc(canvas.width/2, 100, 120, this.getRads(-15),this.getRads(200), false);
      //效果 从180度出来 第一个圆弧210度，第二个270度 第三个0 第四个 30
      this.BezierEllipse(ctx, canvas.width / 2, 120, 80, 20); //椭圆
      ctx.stroke();
      //绘制液体
      this.waterCont(ctx);
    },
    waterCont(ctx) {
      //绘制中间液体
      ctx.fillStyle = "rgba(255,118,87,.6)";
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.lineTo(0, canvas.height / 2);
      ctx.closePath();
      ctx.fill();
      this.loop(ctx);
    },
    loop(ctx) {
      //清空canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255,118,87,.6)";
      this.step++;

      const angle = (this.step * Math.PI) / 180;
      const deltaHeight = Math.sin(angle) * 50;
      const deltaHeightRight = Math.cos(angle) * 50;

      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2 + deltaHeight);
      ctx.bezierCurveTo(
        canvas.width / 2,
        canvas.height / 2 + deltaHeight - 50,
        canvas.width / 2,
        canvas.height / 2 + deltaHeightRight - 50,
        canvas.width,
        canvas.height / 2 + deltaHeightRight
      );
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.lineTo(0, canvas.height / 2 + deltaHeight);
      ctx.closePath();
      ctx.fill();
    },
    BezierEllipse(ctx, x, y, a, b) {
      //从椭圆的左端点开始顺时针绘制四条三次贝塞尔曲线
      // 移动到第一个点
      let pointFrist = this.getroundPos(x, y, 270, a);
      ctx.moveTo(pointFrist.posX, y - b - 17);
      console.log("起始位置", pointFrist);
      //context.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
      //cp1x	第一个贝塞尔控制点的 x 坐标
      // cp1y	第一个贝塞尔控制点的 y 坐标
      // cp2x	第二个贝塞尔控制点的 x 坐标
      // cp2y	第二个贝塞尔控制点的 y 坐标
      // x	结束点的 x 坐标
      // y	结束点的 y 坐标

      //获取第二个点坐标
      let pointSec = this.getroundPos(x, y, 240, a);
      console.log("位置2", pointSec);
      //获取第三个点坐标
      let pointThree = this.getroundPos(x, y, 120, a);
      console.log("位置3", pointThree);
      //获取第4个点坐标
      let pointFour = this.getroundPos(x, y, 70, a);
      console.log("位置4", pointFour);
      //绘制第一段
      ctx.bezierCurveTo(
        pointFrist.posX - a,
        y - b,
        pointFrist.posX - a,
        pointSec.posY - 10,
        pointSec.posX + 10,
        pointSec.posY - 10
      );
      // 绘制第二段
      ctx.bezierCurveTo(
        pointSec.posX + b + 5,
        pointSec.posY - 8,
        pointThree.posX - b - 10,
        pointThree.posY - 12,
        pointThree.posX + 10,
        pointThree.posY - b - 7
      );
      // 绘制第三段
      ctx.bezierCurveTo(
        x + 2 * a,
        pointThree.posY - b * 3 + 5,
        x + 2 * a,
        pointFour.posY - b - 5,
        pointFour.posX - 5,
        pointFour.posY - b - 10
      );
    },
    getroundPos(x, y, Degrees, r) {
      //坐标点计算
      let posX, posY;
      let rads = this.getRads(Degrees);
      posX = x + Math.sin(rads) * r;
      posY = y - Math.cos(rads) * r;
      return { posX, posY };
    },
    getRads(degrees) {
      //计算弧度
      return (Math.PI * degrees) / 180;
    },
    getDegrees(rads) {
      // 计算角度
      return (rads * 180) / Math.PI;
    }
  }
};
</script>
<style lang="scss">
.canvas-box {
  background: #001f3e;
}
</style>
