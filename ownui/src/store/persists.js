//持久化插件
//replaceState
export default function persists(store){
    let local = localStorage.getItem('Vuex:state')
    if(local){
        store.replaceState(JSON.parse(local))
    }
    store.subscribe((mutation,state)=>{//只要状态变化了就执行
        // 只要频繁操作 就要考虑防抖和节流
        localStorage.setItem('Vuex:state',JSON.stringify(state))
    })
}