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
import {auth} from "../plugins/firebase"
import {signInWithEmailAndPassword} from "firebase/auth"

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
            signInWithEmailAndPassword(auth, this.email, this.password) 
            .then((user)=> {
                console.log(user)
                alert("ログインしました。")
                this.$router.push("/mypage")
            })
            .catch((error)=> {
                console.log(error)
                alert("ログインに失敗しました。")
            })
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