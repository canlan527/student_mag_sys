<template>
    <div class="model">
        <div class="mask" @click="setShowModel(false)"></div>
        <div class="model-content">
            <h3>编辑信息</h3>
            <form id="editStudentForm">
                <div>
                    <label for="name">姓名</label>
                    <input type="text" name="name" :value="editUser.name"
                      @input="updateUser('name',$event.target.value)"
                      ref="name"
                    >
                </div>
                <div class="sex">
                    <label for="sex">性别</label>
                    <input type="radio" name="sex" value="0" :checked="editUser.sex == 0"
                    @change="updateUser('sex',0)" ref="sex">
                    <span>男</span>
                    <input type="radio" name="sex" value="1" :checked="editUser.sex == 1"
                    @change="updateUser('sex',0)">
                    <span>女</span>
                </div>
                <div>
                    <label for="sNo">学号</label>
                    <input type="text" name="sNo" :value="editUser.sNo"
                    @input="updateUser('sNo',$event.target.value)" ref="sNo"
                    >
                </div>
                <div>
                    <label for="email">邮箱</label>
                    <input type="text" name="email" :value="editUser.email"
                    @input="updateUser('email',$event.target.value)" ref="email"
                    >
                </div>
                <div>
                    <label for="birth">出生年</label>
                    <input type="text" name="birth" :value="editUser.birth"
                    @input="updateUser('birth',$event.target.value)" ref="birth">
                </div>
                <div>
                    <label for="phone">手机号</label>
                    <input type="text" name="phone" :value="editUser.phone"
                    @input="updateUser('phone',$event.target.value)" ref="phone">
                </div>
                <div>
                    <label for="address">住址</label>
                    <input type="text" name="address" :value="editUser.address"
                    @input="updateUser('address',$event.target.value)" ref="address">
                </div>
                <div>
                    <label for=""></label>
                    <input type="button" class="btn" id="edit-submit" value="提交" @click="handleSubmit">
                    &nbsp;
                    <input type="button" class="btn" value="重置" @click="handleReset">
                </div>
            </form>
        </div>
    </div> 
</template>

<script>
import { mapState,mapMutations, mapActions} from 'vuex'
export default {
    data() {
            return {
                user:{}
            }
        },
    methods: {
        updateUser(key, value){
            this.user[key] = value
        },

        handleSubmit(){
            let user = Object.assign({}, this.editUser, this.user)
            this.updateStu(user).then(res => {
                alert(res)
            }).catch(err => {
                alert(err)
            })

        },

        handleReset(){
            for(let prop in this.$refs){
                if(prop != 'sex'){
                   this.user[prop] = this.$refs[prop].value = ''
                }
            }
            this.$refs.sex.checked = true
            this.user.sex = 0
        },
        ...mapMutations(['setShowModel']),
        ...mapActions(['updateStu'])
    },
    computed: {
        ...mapState(['editUser'])
    },
}
</script>