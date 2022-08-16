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

        <b-field class="is-flex is-justify-content-center"><!-- Label left empty for spacing -->
            <p class="control">
                <b-button label="Login" type="is-primary" @click="login"/>
            </p>
        </b-field>
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
        }
    } 
}
</script>