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
export {
    getYearMontDay,
    getDate
}