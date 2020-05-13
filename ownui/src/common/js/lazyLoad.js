//获取定位
const getScrollParent = (el) =>{
    let parent = el.parentNode;
    while(parent){
        if(/(scroll)|(auto)/.test(getComputedStyle(parent)['overflow'])){
            return  parent;
        }
        parent = parent.parentNode;
    }
    return parent;
}
//lazy-核心代码
const loadImageAsync= (src,resolve,reject) =>{
    let image = new Image();
    image.src = src;
    image.onload = resolve;
    image.onerror = reject;
}
const Lazy = (Vue) =>{
    class ReaciveListener{//每一个图片元素 都构造成一个类的实例
        constructor({el,src,options,elRender}){
            this.el = el;
            this.src = src;
            this.options = options;
            this.state = {loading:false} //没有加载过
            this.elRender = elRender
        }
        checkInView(){ // 检测这个图片是否在可视区域内
            let {top} = this.el.getBoundingClientRect()//当前图片的顶部距离
            //当前图片的顶部距离  与 window的内部距离* 用户定义的配置的显示倍率的关系
            return top < window.innerHeight * (this.options.preLoad || 1.3);  //小于在里面
        }
        load(){ //用来加载这个图片
            // 先加载loading
            this.elRender(this,'loading')
            // 如果加载OK 显示正常图片
            //核心代码创建一个新的image标签
            loadImageAsync(this.src,()=>{
                this.state.loading = true
                this.elRender(this,'finish')
            },()=>{
                this.elRender(this,'error')
            })
        }
    }
    return class LazyClass{
        constructor(options){
            // 保存用户传入的属性
            this.options = options;
            this.bindHandler = false; //处理绑定事件

            this.listenerquere =[] //为每一个元素创建一个实例
        }
        handlelazyload(){
            //这里应该看一下 是否应该显示这个图片
            //计算当前图片的位置
            this.listenerquere.forEach(listener=>{ //默认不在
                if(!listener.state.loading){ //如果没有加载过的仔进行加载
                    let catIn = listener.checkInView(); //判断是否在页面中
                    catIn && listener.load(); //加载图片
                }
            })
        }
        add(el,bindings,vnode){
            //找到父元素
            Vue.nextTick(()=>{
                // 带有滚动的盒子 
                let scrollParent = getScrollParent(el)
                if(scrollParent && !this.bindHandler){
                    this.bindHandler = true //绑定过就设置为true
                    scrollParent.addEventListener('scroll', this.handlelazyload.bind(this))
                }
                // 需要判断当前这个元素的是否在容器的课时区域中，如果不是就不用渲染
                const linstener = new ReaciveListener({
                    el, //当前元素
                    src:bindings.value, //当前图片真正的渲染地址
                    options: this.options, //属性
                    elRender: this.elRender.bind(this)
                })
                //把所有的人都创建一个实例，放到数组中
                this.listenerquere.push(linstener);
                this.handlelazyload()
            })
        }
        elRender(listener,state){ // 渲染方法
            let el = listener.el;
            let src = ''
            switch (state) {
                case 'loading':
                    src = listener.options.loading || ''
                    break;
                case 'error':
                    src = listener.options.error || ''
                    break;
                default:
                    src = listener.src
                    break;
            }
            el.setAttribute('src', src)
        }
    }
}
const VueLazyload={
    install(Vue,options){
        // 把所有逻辑进行封装 类，把类封装到函数中
        const LazyClass =  Lazy(Vue)
        const lazy = new LazyClass(options) //函数柯里化
        Vue.directive('lazy',{
            bind:lazy.add.bind(lazy)
        })
    }
}
export default VueLazyload;