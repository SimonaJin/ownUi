class loadingBox {
	constructor() {
		this.text = null;
		this.vm = null;
	}
	meessage(Vue, spinnerType, text) {
		this.dealText(text);
		this.extend(Vue, spinnerType);
	}
	//处理对象
	dealText(text) {
		if (typeof text == "string") {
			this.text = text;
		} else if (text instanceof Object) {
			this.text = text.text || "";
		}
	}
	//注册
	extend(Vue, spinnerType) {
		let msg = this.text;
		let VueLoadingBox = Vue.extend({
			render(h) {
				let props = {
					spinnerType,
					text: msg,
					show: this.show
				};
				return h("loading", {
					props
				});
			},
			data() {
				return {
					show: false
				};
			}
		});
		//新建实例
		let newLoading = new VueLoadingBox();
		//手动挂载
		this.vm = newLoading.$mount();
		//把实例插入到body
		let el = this.vm.$el;
		document.body.appendChild(el);
		this.vm.show = true;
	}
}
//挂载loading方法
export default function initLoading(Vue) {
	//挂载到原型上 暴露4个方法
	let vm = Vue;
	let loadingProtype = (vm.prototype.$loading = {});
	
	loadingProtype['open'] = function (loadingVal) {
		if (!loadingVal.text) return;
		let newLoading = new loadingBox();
		newLoading.meessage(vm, loadingVal.spinnerType, loadingVal.text);
	}
	loadingProtype['close'] = function () {
		let el = document.getElementById('loadingBox')
		document.body.removeChild(el)
	}
}