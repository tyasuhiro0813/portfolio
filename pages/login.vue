<template>
    <section class="section container column is-half">
        <b-field label="Email">
            <b-input type="email"
                v-model="email">
            </b-input>
        </b-field>

        <b-field label="Password">
            <b-input v-model="password" type="password" ></b-input>
        </b-field>

        <div class="is-flex">
            <p class="control column is-half is-flex is-justify-content-center">
                <b-button label="新規登録" type="is-primary " size="is-medium" @click="register"/>
            </p>
            <p class="control column is-half is-flex is-justify-content-center">
                <b-button label="Login" type="is-primary" size="is-medium" @click="login"/>
            </p>
        </div>
    </section>
</template>

<script>
export default {
    layout: "login-layout",
    data(){
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login(){
            if(this.email === "") {
                alert("メールアドレスを入力してください。")
                return
            }
            if(this.password === "") {
                alert("パスワードを入力してください。")
                return
            }
            console.log(this.email, this.password)
        },
        register(){
            if(this.email === "") {
                alert("メールアドレスを入力してください。")
                return
            }
            if(this.password === "") {
                alert("パスワードを入力してください。")
                return
            }
            console.log(this.email, this.password)
        }
    } 
}
</script>