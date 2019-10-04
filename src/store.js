import Vue from 'vue'
import Vuex from 'vuex'
import api from './api.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stuList:[],
    page:1,
    size:15,
    showModel:false,
    editUser:{},
    keyWord:'',
    total: 0
  },
  mutations: {
    setStuList(state, list){
      state.stuList = list
    },
    setShowModel(state, bool){
      state.showModel = bool
    },
    setEditUser(state, user = {}){
      state.editUser = user
    },
    setTotal(state, cont){
      state.total = cont
    },
    setKeyWord(state, word){
      state.keyWord = word
    }
  },
  actions: {
    getStuList({commit, state, dispatch}, page=1){
      if(state.keyWord !== ''){
        dispatch('SearchStu', page)
      }else {
       return api.findByPage(page)
         .then(res=>{
           commit('setStuList',res.data.data.findByPage)//填充stuList
           commit('setTotal',res.data.data.cont)
         })
         .catch(err=>console.log(err))
      }  
    },
    updateStu({commit, state}, data){
      return api.updateStu(data)
                .then(res=>{
                  if(res.data.status == 'success'){
                    Object.assign(state.editUser, data)
                    commit('setShowModel',false)
                    commit('setEditUser')
                    return res.data.msg
                  } else {
                    return Promise.reject(res.data.msg)
                  }
              })
    },
    delBySno({dispatch}, sNo){
      api.delBySno(sNo)
         .then(()=>{
           dispatch('getStuList')
           alert('删除成功')
         })
    },
    SearchStu({state, commit}, page){
      api.stuSearch(state.keyWord, page)
         .then(res=>{
           console.log(res)
           commit('setTotal', res.data.data.cont)
           commit('setStuList', res.data.data.searchList)
         })
    },
  }
})
