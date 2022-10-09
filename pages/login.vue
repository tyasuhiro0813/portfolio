<template>
    <section class="section container column is-half">
        <b-field label="Username">
            <b-input v-model="userName">
            </b-input>
        </b-field>
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
        <div class="is-flex">
            <p class="control column is-half is-flex is-justify-content-center">
                <b-button label="Googleアカウントで新規登録" type="is-primary " size="is-medium" @click="googleRegister"/>
            </p>
            <p class="control column is-half is-flex is-justify-content-center">
                <b-button label="GoogleアカウントでLogin" type="is-primary" size="is-medium" @click="googleLogin"/>
            </p>
        </div>
        <b-loading is-full-page v-show="isLoading"></b-loading>
    </section>
</template>

<script>
import {auth} from "../plugins/firebase"
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from "firebase/auth"

export default {
    layout: "login-layout",
    data(){
        return {
            userName: "",
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
            signInWithEmailAndPassword(auth, this.email, this.password) 
            .then((user)=> {
                console.log(user)
                // storeにuseridを入れる
                this.$store.commit("setUid", user.user.uid)
                sessionStorage.setItem('portfolioID', user.user.uid)
                // storeにusernameを入れる
                this.$store.commit("setUname", auth.currentUser.displayName)
                sessionStorage.setItem('portfolioUser', auth.currentUser.displayName)
                this.isLoading = false
                alert("ログインしました。")
                this.$router.push("/register")
            })
            .catch((error)=> {
                console.log(error)
                this.isLoading = false
                alert("ログインに失敗しました。")
            })
        },
        register(){
            if(this.userName === "") {
                alert("ニックネームを入力してください。")
                return
            }
            if(this.email === "") {
                alert("メールアドレスを入力してください。")
                return
            }
            if(this.password === "") {
                alert("パスワードを入力してください。")
                return
            }
            this.isLoading = true
            console.log(this.userName, this.email, this.password)
            createUserWithEmailAndPassword(auth, this.email, this.password)
            .then(async(user) => {
                await updateProfile(auth.currentUser, {
                    displayName: this.userName
                })
                // Signed in
                this.$store.commit("setUid", user.user.uid)
                sessionStorage.setItem('portfolioID', user.user.uid)
                this.$store.commit("setUname", auth.currentUser.displayName)
                sessionStorage.setItem('portfolioUser', auth.currentUser.displayName)
                this.isLoading = false
                alert("新規登録しました。")
                this.$router.push("/register")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(error)
                this.isLoading = false
                alert("新規登録に失敗しました。")
            });

        },
        googleRegister(){

        },
        googleLogin(){

        }
    },
    mounted() {
        console.log("uid", this.$store.state.uid)
        console.log("uname", this.$store.state.uname)
    },    
}
</script>