<template>
  <transition name="fade">
    <div class="yq-alert">
      <div
        :class="['message-alert', `yq-alert-${iconType}`]"
        v-if="show"
        ref="messagebox"
      >
        <i :class="['yq-icon', 'alert-icon', `yq-icon-${iconname}`]"></i>
        <span class="text">{{ text }}</span>
      </div>
    </div>
  </transition>
</template>
<script>
import { iconType } from "common/js/ui/config.js";
export default {
  name: "alert",
  props: {
    text: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: false
    },
    iconType: {
      type: String,
      default: iconType.defaults
    }
  },
  data() {
    return {
      iconname: "",
      icontype: this.iconType
    };
  },
  created() {
    switch (this.iconType) {
      case "success":
        this.iconname = "success";
        break;
      case "defaults":
        this.iconname = "defaults";
        break;
      case "danger":
        this.iconname = "danger";
        break;
      case "warning":
        this.iconname = "warning";
        break;
    }
  },
  mounted() {
    // window.addEventListener("scroll", this.showIcon);
  },
  methods: {
    showTop() {
      let clientHeight =
        document.body.clientHeight || document.documentElement.clientHeight;
      let screenHeight = window.screen.height;
      let top = document.documentElement.scrollTop;
      if (clientHeight > screenHeight) {
        this.$refs.messagebox.style.top = top + 10 + "px";
      } else {
        this.$refs.messagebox.style.top = 3 + "%";
      }
    }
  },
  watch: {
    show(val) {
      if (val == true) {
        var self = this;
        setTimeout(() => {
          self.$refs.messagebox.style.opacity = "1";
          self.showTop();
        }, 100);
      }
    }
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
