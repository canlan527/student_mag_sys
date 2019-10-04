//存放所有页面发送的请求
import Axios from 'axios'
import URLs from './URLs.js'
const api =  {}
const size = 10
const appKey = {
    appkey: 'dongmeiqi_1547441744650',
}
api.findByPage = function(page = 1){
    return Axios.get(URLs.baseURL + URLs.findByPage,{
        params:{
            page,
            size,
            ...appKey
        }
        
    } )
}
api.updateStu = function(data){
    return Axios.get(URLs.baseURL + URLs.updataStu, {
        params:{
            ...appKey,
            ...data
        }
    })
}
api.delBySno = function(sNo){
    return Axios.get(URLs.baseURL + URLs.delBySno, {
        params:{
            ...appKey,
            sNo
        }
    })
}
api.stuSearch = function(search, page = 1){
    return Axios.get(URLs.baseURL + URLs.stuSearch, {
        params:{
            ...appKey,
            search,
            page,
            size,
            sex: -1
        },
        
    })
},
api.addStu = function(data){
    return Axios.get(URLs.baseURL + URLs.addStu, {
        params:{
            ...appKey,
            ...data
        },
        
    })
}
export default api