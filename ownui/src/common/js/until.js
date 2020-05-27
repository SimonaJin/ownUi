//放置工具方法
const getYearMontDay = (date) =>{
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return {year,month,day}
}
const getDate = (year,month,day) =>{
    return new Date(year,month,day)
}

//对url 参数解析 a=1&b=2
const parser = (str) =>{
    const obj ={};
    str.replace(/([^&=]+)=([^&=]+)/g,function(){
        console.log(...arguments)
        obj[arguments[1]] = arguments[2]
    })
    return obj;
}
const stringify =(obj)=>{
    const arr =[];
    for(let key in obj){
        arr.push(`${key}=${obj[key]}`)
    }
    return arr.join('&')
}
// console.log(parser(`a=1&b=2`))
// console.log(stringify({ a: '1', b: '2' }))
//1. 会污染源代码 2.无法保留测试 3. 希望对代码进行模块化操作
//export 导出的不是对象，导出的是接口 供别人使用的接口 要通过结构的方式获取
// export defalut 具体值

const addNode =(node,parent)=>{
    parent.appendChild(node)
}
const removeNode=(node)=>{
    node.parentNode.remove(node)
}
const getDataByCallback = (cb)=>{
    setTimeout(() =>{
        cb({
            name:'jw'
        })
    },1000)
}
const getDataByPromise = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve({
                name:'jw'
            })
        },2000)
    })
}
export {
    getYearMontDay,
    getDate,
    parser,
    stringify, 
    addNode,
    removeNode,
    getDataByCallback,
    getDataByPromise
}