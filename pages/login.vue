<template>
    <section>
        <section class="main-text">
            <h1 class="title">美味しかったグルメやお店を簡単に記録</h1>
            <p>グルメモを使えば、美味しかったグルメやお気に入りのお店を簡単に記録することができます。</p>
            <h1 class="title">おすすめのグルメやお店を他の人にもシェア</h1>
            <p>ボタン1つで、他のグルメモユーザーにおすすめのグルメやお店をシェアすることができます。</p>
        </section>
        <section class="section container column is-half login-info">
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
        </section>
        <section class="section container column is-half button-area"> 
            <div class="is-flex">
                <div class="column">
                    <b-button type="is-success is-light" label="SignUp" size="is-medium" @click="register"/>
                </div>
                <div class="column">
                    <b-button type="is-success is-light" label="LogIn" size="is-medium" @click="login"/>
                </div>
            </div>
            <div>
                <div class="column">
                    <b-button type="is-success is-light" label="SignUp・Login with Google" size="is-medium" icon-right="google" @click="googleLogin"/>
                </div>
            </div>
        </section>
        <b-loading is-full-page v-show="isLoading"></b-loading>
    </section>
</template>

<script>
import {auth} from "../plugins/firebase"
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup} from "firebase/auth"

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
        async googleLogin(){
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
            .then(async result => {
                console.log({ result })
                const user = result.user
                await updateProfile(auth.currentUser, {
                    displayName: user.displayName
                })
                this.$store.commit("setUid", user.uid)
                sessionStorage.setItem('portfolioID', user.uid)
                this.$store.commit("setUname", user.displayName)
                sessionStorage.setItem('portfolioUser', user.displayName)
                this.isLoading = false
                alert("ログインしました。")
                this.$router.push("/register")
            })
            .catch((error)=> {
                console.log(error)
                this.isLoading = false
                alert("ログインに失敗しました。")
            })
        }
    },
    mounted() {
        console.log("uid", this.$store.state.uid)
        console.log("uname", this.$store.state.uname)
    },    
}
</script>

<style>
.main-text, .main-text .title {
    margin-top: 20px;
    margin-bottom: 0;
    color: #267853;
    text-align: center;
}

.main-text p {
    font-weight: bold;
    padding-top: 5px;
    padding-bottom: 5px;
}

.login-info {
    margin-bottom: 0;
    padding: 30px;
}

.button-area {
    text-align: center;
    margin-top: 0;
    padding-top: 0;
}
</style>