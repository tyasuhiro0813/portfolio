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

        <b-loading is-full-page v-show="isLoading"></b-loading>
    </section>
</template>

<script>
import {auth} from "../plugins/firebase"
import {signInWithEmailAndPassword} from "firebase/auth"

// 新しいユーザー登録_20220904
import {createUserWithEmailAndPassword } from "firebase/auth"

export default {
    layout: "login-layout",
    data(){
        return {
            email: "",
            password: "",
            // Loading UIの表示
            isLoading: false,
            

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
            this.isLoading = true
            console.log(this.email, this.password)
            signInWithEmailAndPassword(auth, this.email, this.password) 
            .then((user)=> {
                console.log(user)
                // storeにuseridを入れる
                this.$store.commit("setUid", user.user.uid)
                this.isLoading = false
                alert("ログインしました。")
                this.$router.push("/mypage")
            })
            .catch((error)=> {
                console.log(error)
                this.isLoading = false
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
            this.isLoading = true
            console.log(this.email, this.password)
            createUserWithEmailAndPassword(auth, this.email, this.password)
            .then((user) => {
                // Signed in
                this.$store.commit("setUid", user.user.uid)
                this.isLoading = false
                alert("新規登録しました。")
                this.$router.push("/mypage")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(error)
                this.isLoading = false
                alert("新規登録に失敗しました。")
            });

        }
    },
    mounted() {
        console.log(this.$store.state.uid)
    },    
}
</script>