<template>
    <div class="add-student content">
        <form id="addStudentForm">
            <div>
                <label for="name">姓名</label>
                <input type="text" name="name" v-model="user.name">
            </div>
            <div class="sex">
                <label for="sex">性别</label>
                <input type="radio" name="sex" value="0" checked v-model="user.sex">
                <span>男</span>
                <input type="radio" name="sex" value="1" v-model="user.sex">
                <span>女</span>
            </div>
            <div>
                <label for="sNo">学号</label>
                <input type="text" name="sNo" v-model="user.sNo">
            </div>
            <div>
                <label for="email">邮箱</label>
                <input type="text" name="email" v-model="user.email">
            </div>
            <div>
                <label for="birth">出生年</label>
                <input type="text" name="birth" v-model="user.birth">
            </div>
            <div>
                <label for="phone">手机号</label>
                <input type="text" name="phone" v-model="user.phone">
            </div>
            <div>
                <label for="address">住址</label>
                <input type="text" name="address" v-model="user.address">
            </div>
            <div>
                <label for=""></label>
                <input type="button" class="btn" id="add-submit" value="提交" @click="handleSubmit">
                &nbsp;
                <input type="button" class="btn" value="重置" @click="handleReset">
            </div>
        </form>
    </div>
</template>

<script>
import api from '../api.js'
export default {
    data(){
        return {
            user:{
                sex:0,
                name:'',
                birth:'',
                phone:'',
                address:'',
                email:'',
                sNo:''
            }
        }
    },
    methods: {
        handleSubmit(){
            api.addStu(this.user)
               .then(res => {
                   if(res.data.status == 'success'){
                       alert(res.data.msg)
                       this.$store.dispatch('getStuList')
                        .then(()=>{
                             this.$router.push('./stu_list')
                        })
                   } else {
                       alert(res.data.msg)
                   }
                   
               })
               .catch(err=>console.log(err))
        },
        handleReset(){
            this.user = {
                sex:0,
                name:'',
                birth:'',
                phone:'',
                address:'',
                email:'',
                sNo:''
            }
        }
    },
}
</script>