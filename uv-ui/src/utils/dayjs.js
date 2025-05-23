//开发文档：https://dayjs.gitee.io/docs/zh-CN/installation/installation
import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc'
const {log} = console
// 获取当前时间的utc
export function getNowUTCtime(){
    let nowUTC;
    dayjs.extend(utc)
    nowUTC = dayjs.utc().format()
    log(dayjs().date(),'dayjs(1318781876406)')
    return nowUTC
}