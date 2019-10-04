<template>
    <div class="search-bar">
        <label for="search-word">关键字搜索：</label>
        <input type="text" id="search-word" v-model="keyWord">
        &nbsp;
        <button class="search-submit" id="search-submit" @click="handleSearch">搜索</button>
    </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
export default {
    data(){
        return {
            keyWord:''
        }
    },
    methods: {
        handleSearch(){
            this.setKeyWord(this.keyWord)
            if(this.keyWord == ''){
                this.getStuList()
            } else {
               this.SearchStu()
            }     
        },
        ...mapActions(['SearchStu','getStuList']),
        ...mapMutations(['setKeyWord'])
    },

}
</script>