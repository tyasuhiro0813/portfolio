<template>
    <section>
        <section class="contact-text">
            <h1 class="title">お問い合わせ</h1>
            <p>以下のフォームにお問い合わせ事項を記入し、「送信」ボタンを押してください</p>
            <p>お問い合わせを受領しましたら、内容を確認させていただき、5営業日以内にメールにてご返信させていただきます。</p>
        </section>
        <section class="contact-info">
            <b-field label="お名前" horizontal>
                    <b-input v-model="name"></b-input>
            </b-field>
            <b-field label="メールアドレス" horizontal>
                    <b-input type="email" v-model="email"></b-input>
            </b-field>
            <b-field label="お問い合わせ内容" horizontal>
                    <b-input type="textarea" v-model="contact"></b-input>
            </b-field>
        </section>
        <section class="is-flex">
            <p class="control column is-flex is-justify-content-center send-button">
                <b-button label="送信" type="is-success is-light" size="is-medium" @click="send"></b-button>
            </p>
        </section>
        <b-loading is-full-page v-show="isLoading"></b-loading>
    </section>
</template>

<script>
    import { functions } from "../plugins/firebase"
    import { httpsCallable } from "firebase/functions"
    export default {
        data(){
            return {
                name: "",
                email: "",
                contact: "",
                isLoading: false
            }
        },
        methods: {
            async send() {
                this.isLoading = true
                const sendContactMessage = httpsCallable(functions, "getContactMessage")
                const result = await sendContactMessage({
                    name: this.name,
                    email: this.email,
                    contact: this.contact
                })
                this.isLoading = false
                alert("送信しました。")
                console.log(result)
            }
        }
    }
</script>

<style>
    .contact-text, .contact-text .title {
        margin-top: 20px;
        margin-bottom: 0;
        color: #267853;
        text-align: center;
    }

    .contact-text .title {
        margin-bottom: 20px;
    }


    .contact-info {
        margin-top: 30px;
    }

    .send-button {
        margin-top: 20px;
    }
</style>

